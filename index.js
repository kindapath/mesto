let page = document.querySelector('.page');

// Находим попап в DOM
let popup = page.querySelector('.popup');

// Находим форму в DOM
let formElement = page.querySelector('.popup__container');

// Находим профиль в DOM
let profile = page.querySelector('.profile')

// Находим имя и работу в DOM
let profileName = profile.querySelector('.profile__name')
let profileJob = profile.querySelector('.profile__job')

// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')

//Вставляем значение из имени и работы в поля формы
function inputTextInsert() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Открываем форму
function popupOpen() {
  popup.classList.add('popup_opened');
}

// Закрываем форму
function popupClose() {
  popup.classList.remove('popup_opened');
  event.preventDefault();
}

// Находим кнопку редактирвания
let editButton = page.querySelector('.profile__edit-btn');

// Прикрепляем обработчик к кнопке редактирования
editButton.addEventListener('click', function () {
  popupOpen();
  inputTextInsert();
});

// Находим кнопку закрытия
let popupToggle = page.querySelector('.popup__toggle');

// Прикрепляем обработчик к кнопке закрытия
popupToggle.addEventListener('click', popupClose);

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();


  let profileName = profile.querySelector('.profile__name');
  let profileJob = profile.querySelector('.profile__job');

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupClose()
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
