const page = document.querySelector('.page');

// Находим форму в DOM
const formElement = page.querySelector('.popup__container');

// Находим профиль в DOM
const profile = page.querySelector('.profile')

// Находим имя и работу в DOM
const profileName = profile.querySelector('.profile__name')
const profileJob = profile.querySelector('.profile__job')

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_field_name')
const jobInput = formElement.querySelector('.popup__input_field_job')

// Находим попап в DOM
const popup = page.querySelector('.popup');

// Находим кнопку редактирвания
const editButton = page.querySelector('.profile__edit-btn');

// Находим кнопку закрытия
const popupToggle = page.querySelector('.popup__toggle');


//Вставляем значение из имени и работы в поля формы
function inputTextInsert() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Открываем форму
function popupOpen() {
  popup.classList.add('popup_opened');
  inputTextInsert()
}

// Закрываем форму
function popupClose() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupClose()
}


// Прикрепляем обработчик к кнопке редактирования
editButton.addEventListener('click', popupOpen);

// Прикрепляем обработчик к кнопке закрытия
popupToggle.addEventListener('click', popupClose);

// Прикрепляем обработчик к кнопке сохранения
formElement.addEventListener('submit', formSubmitHandler);
