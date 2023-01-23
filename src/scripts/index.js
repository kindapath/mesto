import '../pages/index.css'

// Импорт классов
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

// Импорт данных и утилитов
import { initialCards } from './data.js';
import {
  nameInput,
  jobInput,
  profileAddButton,
  profileEditButton,
  popupEditSelector,
  popupAddSelector,
  config
} from './utils.js';

// Валидатор формы редактирования профиля и добавления карточки
const validatorEditForm = new FormValidator(config, popupEditSelector);
const validatorAddForm = new FormValidator(config, popupAddSelector);

// Создаем класс инормации польователя
const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__job'
})

// Получаем информацию о пользователе
const userDataName = userInfo.getUserInfo().name;
const userDataJob = userInfo.getUserInfo().job;

// Создаем секцию карточек
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

// Создаем попапы
const popupWithImage = new PopupWithImage('.popup_type_pic')

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
    userInfo.setUserInfo()
  }
})

// Рендерим секцию карточек
cardSection.renderItems()

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  popupEdit.open();

  // Вставляем значение из имени и работы в поля формы
  nameInput.value = userDataName;
  jobInput.value = userDataJob;

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
