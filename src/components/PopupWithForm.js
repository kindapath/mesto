import Popup from "./Popup.js";

// Класс PopupWithForm
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__submit')
  }

  // Получаем значения инпутов
  _getInputValues() {

    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {

      input.value = data[input.name];
    });
  }

  setButtonText(text) {
    this._submitButton.textContent = text
  }

  // Устанавливаем слушатели родительского класса и сабмита
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._submitButton.textContent;

      this._submitButton.textContent = 'Сохранение...';

      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          setTimeout(() => {
            this._submitButton.textContent = 'Выполнено успешно!';
          }, 1000);
          setTimeout(() => {
            this.close()
          }, 2000);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setTimeout(() => {
            this._submitButton.textContent = initialText;
          }, 3000);
        })
    })

  }

  // Закрываем попап и сбрасываем форму
  close() {
    super.close();
    this._form.reset();
  }
}
