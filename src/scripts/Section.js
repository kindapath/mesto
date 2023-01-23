// Класс Section
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }

  // Рендерим массив
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // Вставляем элемент в дом
  addItem(element) {
    this._container.prepend(element)
  }
}
