import Popup from "./Popup.js";

// Класс PopupWithForm
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  // Получаем значения инпутов
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');

    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

  // Устанавливаем слушатели родительского класса и сабмита
  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
    })

  }

  // Закрываем попап и сбрасываем форму
  close() {
    super.close();
    this._form.reset();
  }
}