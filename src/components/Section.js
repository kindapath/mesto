// Класс Section
export default class Section {
  constructor({ renderer , containerSelector }) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }

  // Рендерим массив
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  // Вставляем элемент в дом
  addItem(element) {
    this._container.prepend(element)
  }
}
