import '../pages/index.css'

// Импорт классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';

// Импорт данных и утилитов
import {
  profileAddButton,
  profileEditButton,
  popupEditElement,
  popupAddElement,
  config
} from '../utils/constants.js';

import {
  createCard
} from '../utils/utils';


/// API

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'fe2bb06d-e8a5-45a9-845b-99af7f5ece9e'
  },
});


// Валидатор формы редактирования профиля и добавления карточки
const validatorEditForm = new FormValidator(config, popupEditElement);
const validatorAddForm = new FormValidator(config, popupAddElement);

// Создаем класс инормации польователя
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__job',
  avatar: '.profile__avatar'
})

// Создаем секцию карточек
const cardSection = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);

  },
  containerSelector: '.elements'
})

// Создаем попапы
export const popupWithImage = new PopupWithImage('.popup_type_pic')

const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {

    api.addCard(formData.name, formData.link)
      .then((data) => {
        const cardElement = createCard(data);
        cardSection.addItem(cardElement);
      })
  }
});


const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.about);
    api.updateUserInfo(formData.name, formData.about)
  }
})



// Получаем информацию профиля с сервера
api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data.name, data.about)
    userInfo.setUserAvatar(data.avatar)
  })

// Рендерим секцию карточек
api.getInitialCards()
  .then((data) => {
    cardSection.renderItems(data)
  })

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  popupEdit.open();

  // Вставляем значение из имени и работы в поля формы
  const { about, name } = userInfo.getUserInfo()
  popupEdit.setInputValues({ about, name })

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
