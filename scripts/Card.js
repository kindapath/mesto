import { openPopup } from "./utils.js";

export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._alt = data.title;
    this._link = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {

    const cardLikeBtn = this._element.querySelector('.element__like');
    const cardRemoveBtn = this._element.querySelector('.element__remove');
    const cardImage = this._element.querySelector('.element__image');

    cardLikeBtn.addEventListener('click', () => {
      this._toggleLike();
    });

    cardRemoveBtn.addEventListener('click', () => {
      this._removeCard();
    });

    cardImage.addEventListener('click', () => {
      this._openPopup();
    });

  }

  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _removeCard() {
    this._element.remove();
  }

  _openPopup() {

    const popupPic = document.querySelector('.popup_type_pic');
    const popupImage = document.querySelector('.popup__image');
    const popupImageText = document.querySelector('.popup__text_type_pic');

    openPopup(popupPic);

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageText.textContent = this._name;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element
  }
}


