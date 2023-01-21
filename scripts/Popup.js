// Класс Popup
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  // Чтобы не хардкодить, делаем класс открытого попапа статичным
  static opened = 'popup_opened';

  // Открываем попап
  open() {
    this._popup.classList.add(Popup.opened);
    // Прикрепляем обработчик для закрытия попапа на кнопку Esc
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  // Закрываем попап
  close() {
    this._popup.classList.remove(Popup.opened);
    // Удаляем обработчик для закрытия попапа на кнопку Esc
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  // Закрываем попап на Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      console.log(this)
      this.close();
    };
  }

  // Устанавливаем слушатели
  setEventListeners() {

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(Popup.opened)) {
        this.close();
      };
      if (evt.target.classList.contains('popup__close-image')) {
        this.close();
      }
    })
  }
}
