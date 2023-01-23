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

    this._likeButton = this._element.querySelector('.element__like');
    this._removeButton = this._element.querySelector('.element__remove');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');

    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });

    this._removeButton.addEventListener('click', () => {
      this._removeCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

  }

  // Переключаем лайк на карточке
  _toggleLike() {
    this._likeButton.classList.toggle('element__like_active');
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

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element
  }
}


