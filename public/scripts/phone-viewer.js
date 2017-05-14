'use strict';

class PhoneViewer {
  constructor(options) {
    this._el = options.el;
    this._template = document.querySelector('#phone-viewer-template').innerHTML;
    this._templateFunction = _.template(this._template);
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {
    this._el.removeEventListener(eventName, handler);
  }

  trigger(eventName, data) {
    var myEvent = new CustomEvent(eventName, {
      detail: data
    });

    this._el.dispatchEvent(myEvent);
  }

  showPhone(phoneId) {
    const phone = this._getPhoneInfo(phoneId);

    this._el.classList.remove('js-hidden');

    const html = this._templateFunction({
      phone: phone
    });
    this._el.innerHTML = html;

    const backButton = this._el.querySelector('.phone-viewer__back');
    backButton.addEventListener('click', this.hide.bind(this));

    const addToBasketButton = this._el.querySelector('.phone-viewer__add-to-basket');
    addToBasketButton.addEventListener('click', this._selectPhone.bind(this));
  }

  hide() {
    this._el.classList.add('js-hidden');
    this.trigger('hidePhoneViewer');
  }

  _selectPhone(event) {
    const selectedPhoneId = event.target.dataset.phoneId;
    this.trigger('phoneSelected', selectedPhoneId);
  }

  // Как будто мы получаем информацию о телефоне с сервера
  _getPhoneInfo(phoneId) {
    for (let phone of phonesFromServer) {
      if (phone.id === phoneId) {
        return phone;
      }
    }
  }

}