import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';


import { initialCards } from './data.js';
// import { openPopup, closePopup } from './utils.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

const page = document.querySelector('.page');

// Находим профиль в DOM
const profile = page.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const profileAddButton = profile.querySelector('.profile__add-btn');
const profileEditButton = profile.querySelector('.profile__edit-btn');

// Попапы
const popupWithImage = new PopupWithImage('.popup_type_pic')
const popupEditSelector = document.querySelector('.popup_type_edit');
const popupAddSelector = document.querySelector('.popup_type_add');

// Находим формы
const popupEditForm = page.querySelector('.popup__form_type_edit');
const popupAddForm = page.querySelector('.popup__form_type_add');

// Находим инпуты
const nameInput = popupEditForm.querySelector('.popup__input_field_name');
const jobInput = popupEditForm.querySelector('.popup__input_field_job');
const titleInput = popupAddForm.querySelector('.popup__input_field_title');
const linkInput = popupAddForm.querySelector('.popup__input_field_link');

// Настройки валидации
const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

// Валидатор формы редактирования профиля
const validatorEditForm = new FormValidator(config, popupEditSelector);

// Валидатор формы добавления карточки
const validatorAddForm = new FormValidator(config, popupAddSelector);


// // Вставляем значение из имени и работы в поля формы
// function insertText() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// }

// // Обработчик «отправки» формы редактирования
// function submitEditForm(evt) {
//   evt.preventDefault();

//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;

//   closePopup(popupEdit);
// }


const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {

    const card = new Card({
      data: item,
      templateSelector: '#element-template',
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage('.popup_type_pic', item.name, item.link)
        popupWithImage.open()
      }
    });

    const cardElement = card.generateCard();
    cardSection.addItem(cardElement);
  }
}, '.elements')


const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {

    const card = new Card({
      data: formData,
      templateSelector: '#element-template',
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage('.popup_type_pic', formData.name, formData.link)
        popupWithImage.open()
      }
    });

    const cardElement = card.generateCard();
    cardSection.addItem(cardElement);
  }
});


const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: () => {

  }
})

const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job'
})
userInfo.getUserInfo()

cardSection.renderItems()

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  popupEdit.open();
  validatorEditForm.toggleButtonState();
});

// Прикрепляем обработчик к кнопке добавления
profileAddButton.addEventListener('click', () => {
  popupAdd.open();
  validatorAddForm.toggleButtonState();
});

// Активируем валидацию для форм
// редактирования профиля и добавления карточки
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

// Включаем слушатели для попапов
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupWithImage.setEventListeners();
