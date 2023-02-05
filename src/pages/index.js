import '../pages/index.css'

// Импорт классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';

// Импорт данных и утилитов
import {
  profileAddButton,
  profileEditButton,
  profileAvatarHover,
  popupEditElement,
  popupAddElement,
  popupAvatarElement,
  config
} from '../utils/constants.js';

import {
  createCard
} from '../utils/utils';

export {
  popupWithImage,
  popupConfirm,
  api,
  userId
}

/// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'fe2bb06d-e8a5-45a9-845b-99af7f5ece9e'
  },
});

// Переменная с айди юзера
let userId

// Валидатор формы редактирования профиля и добавления карточки
const validatorEditForm = new FormValidator(config, popupEditElement);
const validatorAddForm = new FormValidator(config, popupAddElement);
const validatorAvatarForm = new FormValidator(config, popupAvatarElement)

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

// Попап с картинкой
const popupWithImage = new PopupWithImage('.popup_type_pic');

// Попап подтверждения
const popupConfirm = new PopupWithConfirmation({
  popupSelector: '.popup_type_confirm',
  handleSubmit: (id, element) => {
    api.removeCard(id)
      .then(() => {
        element.remove()
      })
      .catch(err => console.log(err))
  }
});


// Попап добавления карточки
const popupAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {
    popupAdd.setButtonText('Создание...')

    api.addCard(formData.name, formData.link)
      .then((data) => {
        const cardElement = createCard(data);
        cardSection.prependItem(cardElement);
        popupAdd.setButtonText('Выполнено успешно!');
        setTimeout(() => {
          popupAdd.close()
        }, 1500);

      })
      .catch(() => popupAdd.setButtonText('Ошибка запроса!'))
      .finally(() => {
        setTimeout(() => {
          popupAdd.setButtonText('Cоздать')
        }, 2000);
      })
  }
});

// Попап редактирования профиля
const popupEdit = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (formData) => {
    popupEdit.setButtonText('Сохранение...')

    api.updateUserInfo(formData.name, formData.about)
      .then(() => {
        userInfo.setUserInfo(formData.name, formData.about);

        popupEdit.setButtonText('Выполнено успешно!');
        setTimeout(() => {
          popupEdit.close()
        }, 1500);

      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          popupEdit.setButtonText('Сохранить')
        }, 2000);
      })
  }
})

// Попап редактирования аватара
const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (formData) => {
    popupAvatar.setButtonText('Сохранение...')

    api.updateAvatar(formData.link)
      .then(() => {
        userInfo.setUserAvatar(formData.link)

        popupAvatar.setButtonText('Выполнено успешно!');
        setTimeout(() => {
          popupAvatar.close()
        }, 1500);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          popupAvatar.setButtonText('Сохранить')
        }, 2000);
      })
  }
})

// Вызовы функций

// Получаем изачальную информацию с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then((data) => {
    userId = data[0]._id

    // Получаем информацию профиля с сервера
    userInfo.setUserInfo(data[0].name, data[0].about)
    userInfo.setUserAvatar(data[0].avatar)

    // Рендерим секцию карточек
    cardSection.renderItems(data[1])
  })
  .catch(err => console.log(err))


// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  popupEdit.open();

  // Вставляем значение из имени и работы в поля формы
  const { about, name } = userInfo.getUserInfo()
  popupEdit.setInputValues({ about, name })

  validatorEditForm.resetValidation();
});

// Слушатели и обработчики

// Прикрепляем обработчик к кнопке добавления карточки
profileAddButton.addEventListener('click', () => {
  popupAdd.open();
  validatorAddForm.resetValidation();
});

// Прикрепляем слушатель к аватару
profileAvatarHover.addEventListener('click', () => {
  popupAvatar.open()
})

// Активируем валидацию для форм
// редактирования профиля и добавления карточки
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();
validatorAvatarForm.enableValidation();

// Включаем слушатели для попапов
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupWithImage.setEventListeners();
popupConfirm.setEventListeners();
popupAvatar.setEventListeners();
