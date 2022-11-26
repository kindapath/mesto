const page = document.querySelector('.page');

// Находим форму в DOM
const formElement = page.querySelector('.popup__container');

// Находим профиль в DOM
const profile = page.querySelector('.profile')

// Находим имя и работу в DOM
const profileName = profile.querySelector('.profile__name')
const profileJob = profile.querySelector('.profile__job')

// Находим кнопку добавления карточки
const profileAddButton = profile.querySelector('.profile__add-btn');

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_field_name')
const jobInput = formElement.querySelector('.popup__input_field_job')

// Находим попап в DOM
const popup = page.querySelector('.popup');

// Находим попап с картинкой в дом
const popupPic = page.querySelector('.popup-pic');

// Находим попап формы добавления
const popupAdd = page.querySelector('.popup-add');

// Находим изображение в блоке попапа с картинкой
const popupPicImage = popupPic.querySelector('.popup-pic__image');

// Находим название в блоке попапа с картинкой
const popupPicTitle = popupPic.querySelector('.popup-pic__title');

// Находим кнопку редактирвания
const editButton = page.querySelector('.profile__edit-btn');

// Находим кнопку закрытия
const popupToggle = page.querySelector('.popup__toggle');

// Находим кнопку закрытия попапа с картинкой
const popupPicToggle = popupPic.querySelector('.popup-pic__toggle')

// Находим кнопку закрытия попапа добавления карточки
const popupAddToggle = popupAdd.querySelector('.popup-add__toggle')

// Находим блок elements
const elementsBlock = page.querySelector('.elements');

// Находим темплейт карточки
const cardTemplate = page.querySelector('#element-template').content;


// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Судак',
    link: 'https://images.unsplash.com/photo-1565342403875-07a8dc5ed13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//Вставляем значение из имени и работы в поля формы
function inputTextInsert() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Открываем форму изменения профиля
function popupOpen() {
  popup.classList.add('popup_opened');
  inputTextInsert()
}

// Открываем попап с картинкой
function popupPicOpen() {
  popupPic.classList.add('popup-pic_opened');
}

// Открываем попап добавления карточки
function popupAddOpen() {
  popupAdd.classList.add('popup-add_opened');
}

// Закрываем форму
function popupClose() {
  popup.classList.remove('popup_opened');
}

// Закрываем попап с картинкой
function popupPicClose() {
  popupPic.classList.remove('popup-pic_opened');
}

// Закртываем попап добавления карточки
function popupAddClose() {
  popupAdd.classList.remove('popup-add_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupClose()
}

// Операции с карточкой
initialCards.forEach(function (card) {

  // Копируем содержимое
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  // Находим кнопки лайка,удаления и изображение
  const cardLikeButton = cardElement.querySelector('.element__like');
  const cardRemoveButton = cardElement.querySelector('.element__remove');
  const cardImage = cardElement.querySelector('.element__image');

  // Добавляем карточки из массива
  cardElement.querySelector('.element__title').textContent = card.name;
  cardElement.querySelector('.element__image').alt = card.name;
  cardElement.querySelector('.element__image').src = card.link;

  elementsBlock.append(cardElement);

  // Лайкаем карточку
  cardLikeButton.addEventListener('click', function(event){
    event.target.classList.toggle('element__like_active')
  });

  // Удаляем карточку
  cardRemoveButton.addEventListener('click', function(){
    cardElement.remove()
  });

  // Прикрепляем обработчик к картинке
  cardImage.addEventListener('click', function () {
    popupPicOpen();
    popupPicImage.src = card.link;
    popupPicTitle.textContent = card.name;
  });

});


// Прикрепляем обработчик к кнопке редактирования
editButton.addEventListener('click', popupOpen);

// Прикрепляем обработчик к кнопке доавления карточки
profileAddButton.addEventListener('click', popupAddOpen);

// Прикрепляем обработчик к кнопке закрытия
popupToggle.addEventListener('click', popupClose);

// Прикрепляем обработчик к кнопке закрытия попапа с картинкой
popupPicToggle.addEventListener('click', popupPicClose);

// Прикрепляем обработчик к кнопке закрытия попапа добавления карточки
popupAddToggle.addEventListener('click', popupAddClose);

// Прикрепляем обработчик к кнопке сохранения
formElement.addEventListener('submit', formSubmitHandler);







