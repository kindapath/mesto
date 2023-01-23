import '../pages/index.css'

// Импорт классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// Импорт данных и утилитов
import { initialCards } from '../utils/data.js';
import {
  nameInput,
  jobInput,
  profileAddButton,
  profileEditButton,
  popupEditElement,
  popupAddElement,
  config
} from '../utils/constants.js';

import {
  createCard
} from '../utils/utils';

// Валидатор формы редактирования профиля и добавления карточки
const validatorEditForm = new FormValidator(config, popupEditElement);
const validatorAddForm = new FormValidator(config, popupAddElement);

// Создаем класс инормации польователя
const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job'
})

// Создаем секцию карточек
const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);
  }
}, '.elements')

// Создаем попапы
export const popupWithImage = new PopupWithImage('.popup_type_pic')

const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {
    const cardElement = createCard(formData);
    cardSection.addItem(cardElement);
  }
});


const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.job);
  }
})

// Рендерим секцию карточек
cardSection.renderItems()

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  popupEdit.open();

  // Вставляем значение из имени и работы в поля формы
  const { job, name } = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;

  validatorEditForm.resetValidation();
});

// Прикрепляем обработчик к кнопке добавления
profileAddButton.addEventListener('click', () => {
  popupAdd.open();
  validatorAddForm.resetValidation();
});

// Активируем валидацию для форм
// редактирования профиля и добавления карточки
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

// Включаем слушатели для попапов
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupWithImage.setEventListeners();
