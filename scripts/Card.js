import { openPopup } from "./utils.js";
import { popupPic, popupImage, popupImageText } from "./utils.js";

// Класс Card

export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._alt = data.title;
    this._link = data.link;
  }

  // Получаем шаблон
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  // Устанавливаем слушатели
  _setEventListeners() {

    const cardLikeBtn = this._element.querySelector('.element__like');
    const cardRemoveBtn = this._element.querySelector('.element__remove');
    const cardImage = this._element.querySelector('.element__image');

    cardLikeBtn.addEventListener('click', () => {
      this._toggleLike();
    });

    cardRemoveBtn.addEventListener('click', () => {
      this._removeCard();
      this._element = null;
    });

    cardImage.addEventListener('click', () => {
      this._openPopup();
    });

  }

  // Переключаем лайк на карточке
  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Удаляем карточку
  _removeCard() {
    this._element.remove();
  }

  // Открываем попап
  _openPopup() {

    openPopup(popupPic);

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageText.textContent = this._name;
  }

  // Генерируем готовую карточку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element
  }
}


