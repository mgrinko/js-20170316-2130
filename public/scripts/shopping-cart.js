'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;

    this._items = [];

    this.render();
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }

  render() {
    let html = '';

    html += `<h4>Shopping cart </h4>`;

    if (this._items.length) {
      html += '<ul>';

      this._items.forEach(item => {
        html += `<li>${ item.id }</li>`
      });

      html += '</ul>';
    } else {
      html += '<p>No items yet!</p>';
    }

    this._el.innerHTML = html;
  }
}