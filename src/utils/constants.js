
// Находим профиль в DOM
const profileAddButton = document.querySelector('.profile__add-btn');
const profileEditButton = document.querySelector('.profile__edit-btn');

// Попапы
const popupEditElement = document.querySelector('.popup_type_edit');
const popupAddElement = document.querySelector('.popup_type_add');

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
  popupEditElement,
  popupAddElement,
  config
}
