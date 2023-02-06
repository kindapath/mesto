// Класс Card
export default class Card {
  constructor({ data, templateSelector, handleCardClick, handleRmvBtnClick, handleLikeClick, userId }) {
    this._data = data
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;
    this._likes = data.likes
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwner = data.owner._id
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRmvBtnClick = handleRmvBtnClick;
    this._handleLikeClick = handleLikeClick;
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
    this._likesNumber = this._element.querySelector('.element__like-num');

    // Выставляем изначальные лайки
    if (this.isLiked()) {
      this.toggleLike()
    }

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._cardId)
    });

    this._removeButton.addEventListener('click', () => {
      this._handleRmvBtnClick(this._cardId, this._element);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    if (!this._checkOwner()) {
      this._removeButton.remove()
    }
  }

  // Проверяем лайкнута ли карточка юзером
  isLiked() {
    const myLike = this._likes.some((like) => like._id === this._userId)
    return myLike
  }

  // Выставляем количество лайков
  setLikesNumber(arr) {
    this._likesNumber.textContent = arr.likes.length
  }

  // Проверяем владельца
  _checkOwner() {
    if (this._userId === this._cardOwner) {
      return true
    }
  }

  // Переключаем лайк на карточке
  toggleLike() {
    this._likeButton.classList.toggle('element__like_active');
  }

  // Удаляем карточку
  deleteCard() {
    this._element.remove()
  }

  // Генерируем готовую карточку
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._likesNumber.textContent = this._likes.length

    return this._element
  }
}


