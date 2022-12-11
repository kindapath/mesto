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
const popupPic = page.querySelector('.popup_type_pic');

const popupImage = page.querySelector('.popup__image');
const popupImageText = page.querySelector('.popup__text_type_pic');

// Находим формы
const popupForm = page.querySelector('.popup__form');
const popupEditForm = page.querySelector('.popup__form_type_edit');
const popupAddForm = page.querySelector('.popup__form_type_add');

// Находим инпуты

const nameInput = popupEditForm.querySelector('.popup__input_field_name');
const jobInput = popupEditForm.querySelector('.popup__input_field_job');
const titleInput = popupAddForm.querySelector('.popup__input_field_title');
const linkInput = popupAddForm.querySelector('.popup__input_field_link');

// Находим кнопки закрытия
const popupCloseButtonsArr = page.querySelectorAll('.popup__close');
const popupEditCloseBtn = page.querySelector('.popup__close_type_edit');
const popupAddCloseBtn = page.querySelector('.popup__close_type_add');

// Находим блок elements
const elementsBlock = page.querySelector('.elements');

// Находим темплейт карточки
const cardTemplate = page.querySelector('#element-template').content;


//Вставляем значение из имени и работы в поля формы
function insertText() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Открываем форму
function openPopup(el) {
  el.classList.add('popup_opened');
  // Прикрепляем обработчик для закрытия попапа на кнопку Esc
  page.addEventListener('keydown', handleEscKey);

}

// Закрываем форму
function closePopup(el) {

  // Если в классе есть popup, то удаляем модификатор
  if (el.classList.contains('popup')) {
    el.classList.remove('popup_opened');
  }

  // Удаляем модификатор у близжайшего родительского попапа
  const closestPopup = el.closest('.popup');
  closestPopup.classList.remove('popup_opened');

  page.removeEventListener('keydown', handleEscKey);
}


// Закрываем попап на кнопку Esc
function handleEscKey(evt) {
  if (evt.key === 'Escape') {

    // Получаем елемент с открытым попапом
    const openedPopup = page.querySelector('.popup_opened');

    closePopup(openedPopup);

  };
};



// Обработчик «отправки» формы редактирования
function submitEditForm(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditCloseBtn);
}

// Обработчик «отправки» формы
function submitAddForm(evt) {
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value);
  closePopup(popupAddCloseBtn);
  popupAddForm.reset();
}

// Создаем карточку
function createCard(title, link) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardLikeBtn = card.querySelector('.element__like');
  const cardRemoveBtn = card.querySelector('.element__remove');
  const cardImage = card.querySelector('.element__image');

  card.querySelector('.element__title').textContent = title;
  card.querySelector('.element__image').alt = title;
  card.querySelector('.element__image').src = link;

  // Лайкаем карточку
  cardLikeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  // Удаляем карточку
  cardRemoveBtn.addEventListener('click', () => {
    card.remove();
  });

  // Открываем попап по клику на картинку
  cardImage.addEventListener('click', () => {
    openPopup(popupPic);
    popupImage.src = link;
    popupImage.alt = title;
    popupImageText.textContent = title;

  });

  return readyCard = card;
}

// Вставляем карточку в ДОМ
function renderCard(title, link) {
  createCard(title, link);
  elementsBlock.prepend(readyCard);
}

// Вставляем начальные карточки
initialCards.forEach((item) => {
  renderCard(item.name, item.link);
});

// Прикрепляем обработчик к кнопке редактирования
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  insertText();
});

// Прикрепляем обработчик к кнопке добавления
profileAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

// Прикрепляем обработчик ко всем кнопкам закрытия

popupCloseButtonsArr.forEach((button) => {

  button.addEventListener('click', () => {
    closePopup(button);
  });

})

// Прикрепляем обработчик к кнопке "Сохранить"
popupEditForm.addEventListener('submit', submitEditForm);

// Прикрепляем обработчик к кнопке "Создать"
popupAddForm.addEventListener('submit', submitAddForm);



// Прикрепляем обработчик для закрытия попапа на оверлэй
popups.forEach((popup) => {

  popup.addEventListener('mousedown', (evt) => {

    // Если кликаем на контейнер, то ничего, иначе закрываем попап
    if (evt.target.closest('.popup__container')) return
    closePopup(popup);
  });

});



