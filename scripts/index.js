import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js';
import { initialCards } from './data.js';
import { openPopup, closePopup } from './utils.js';

const page = document.querySelector('.page');

// Находим профиль в DOM
const profile = page.querySelector('.profile')
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');
const profileAddButton = profile.querySelector('.profile__add-btn');
const profileEditButton = profile.querySelector('.profile__edit-btn');

// Находим попапы в DOM
const popups = page.querySelectorAll('.popup');
const popupEdit = page.querySelector('.popup_type_edit');
const popupAdd = page.querySelector('.popup_type_add');

// Находим формы
const popupForm = page.querySelector('.popup__form');
const popupEditForm = page.querySelector('.popup__form_type_edit');
const popupAddForm = page.querySelector('.popup__form_type_add');

// Находим инпуты
const nameInput = popupEditForm.querySelector('.popup__input_field_name');
const jobInput = popupEditForm.querySelector('.popup__input_field_job');
const titleInput = popupAddForm.querySelector('.popup__input_field_title');
const linkInput = popupAddForm.querySelector('.popup__input_field_link');

// Находим блок elements
const elementsBlock = page.querySelector('.elements');

const validEditForm = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, popupEdit);

const validAddForm = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, popupAdd);

//Вставляем значение из имени и работы в поля формы
function insertText() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// // Функция проверки инпутов
// function checkInputs(config) {
//   const form = document.querySelector(config.formSelector);
//   const inputs = Array.from(form.querySelectorAll(config.inputSelector));
//   const button = form.querySelector(config.submitButtonSelector);
//   FormValidator._toggleButtonState(inputs, button);
// }

// Обработчик «отправки» формы редактирования
function submitEditForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEdit);
}

// Обработчик «отправки» формы
function submitAddForm(evt) {
  evt.preventDefault();

  const inputData = {
    name: titleInput.value,
    link: linkInput.value
  }

  renderCard(inputData);
  closePopup(popupAdd);
  popupAddForm.reset();
}

function renderCard (data) {
  const card = new Card (data, '#element-template');
  const cardElement = card.generateCard();

  elementsBlock.prepend(cardElement);
}

// Вставляем начальные карточки
initialCards.forEach((card) => {
  renderCard(card);
});

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  insertText();
});

// Прикрепляем обработчик к кнопке добавления
profileAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  // checkInputs({
  //   formSelector: '.popup__form_type_add',
  //   inputSelector: '.popup__input',
  //   submitButtonSelector: '.popup__submit',
  //   inactiveButtonClass: 'popup__submit_disabled'
  // });
});

// Включаем валидацию у форм
validEditForm.enableValidation();

validAddForm.enableValidation();

// Прикрепляем обработчик к кнопке "Сохранить"
popupEditForm.addEventListener('submit', submitEditForm);

// Прикрепляем обработчик к кнопке "Создать"
popupAddForm.addEventListener('submit', submitAddForm);

//Прикрепляем обработчик для закрытия попапа на оверлэй и крестика
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-image')) {
      closePopup(popup);
    }
  })
})


