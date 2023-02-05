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

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    })

  }

  // Закрываем попап и сбрасываем форму
  close() {
    super.close();
    this._form.reset();
  }
}
