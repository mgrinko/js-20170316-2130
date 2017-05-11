'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;
    this._template = document.querySelector('#shopping-cart-template').innerHTML;
    this._templateFunction = _.template(this._template);

    this._items = [];

    this.render();
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }

  render() {
    let html = this._templateFunction({
      items: this._items
    });

    this._el.innerHTML = html;
  }
}