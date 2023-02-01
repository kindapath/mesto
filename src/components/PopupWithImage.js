import Popup from "./Popup.js";

// Класс PopupWithImage
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._imageText = this._popup.querySelector('.popup__text_type_pic');
  }
  // Открываем попап и вставляем картинку + подпись
  open(name, link) {
    super.open();

    this._image.src = link;
    this._image.alt = name;
    this._imageText.textContent = name;
  }
}
