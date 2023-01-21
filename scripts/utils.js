// Инпуты
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');

// Находим профиль в DOM
const profile = document.querySelector('.profile');
const profileAddButton = profile.querySelector('.profile__add-btn');
const profileEditButton = profile.querySelector('.profile__edit-btn');

// Попапы
const popupEditSelector = document.querySelector('.popup_type_edit');
const popupAddSelector = document.querySelector('.popup_type_add');

// Картинка и подпись
const popupImage = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__text_type_pic');

// Настройки валидации
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export {
  popupImage,
  popupImageText,
  nameInput,
  jobInput,
  profile,
  profileAddButton,
  profileEditButton,
  popupEditSelector,
  popupAddSelector,
  config
}
