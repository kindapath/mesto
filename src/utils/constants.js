
// Находим профиль в DOM
const profileAddButton = document.querySelector('.profile__add-btn');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAvatarHover = document.querySelector('.profile__avatar-hover')
const profileAvatar = document.querySelector('.profile__avatar')

// Попапы
const popupEditElement = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');
const popupAvatarElement = document.querySelector('.popup_type_avatar');

// Настройки валидации
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export {
  profileAddButton,
  profileEditButton,
  profileAvatar,
  profileAvatarHover,
  popupEditElement,
  popupAddElement,
  popupAvatarElement,
  config
}
