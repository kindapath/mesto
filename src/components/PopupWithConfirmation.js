import Popup from "./Popup"

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this._submitButton = this._popup.querySelector('.popup__submit')
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmit();

      this.close();
    })

  }
}
