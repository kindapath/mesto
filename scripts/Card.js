import { openPopup } from "./utils.js";
import { popupPic, popupImage, popupImageText } from "./utils.js";

// Класс Card

export default class Card {
  constructor({ data, templateSelector, handleCardClick }) {
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    });

    cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

  }

  // Переключаем лайк на карточке
  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Удаляем карточку
  _removeCard() {
    this._element.remove();
    this._element = null;
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


