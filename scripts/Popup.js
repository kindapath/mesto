export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // Чтобы не хардкодить, делаем класс открытого попапа статичным
  static popupOpened = 'popup_opened';

  // Открываем попап
  open() {
    this._popup.classList.add(popupOpened);
    // Прикрепляем обработчик для закрытия попапа на кнопку Esc
    document.addEventListener('keydown', this._handleEscClose);
  }

  // Закрываем попап
  close() {
    this._popup.classList.remove(popupOpened);
    // Удаляем обработчик для закрытия попапа на кнопку Esc
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(popupOpened)) {
        this.close();
      };
      if (evt.target.classList.contains('popup__close-image')) {
        this.close();
      }
    })
  }
}
