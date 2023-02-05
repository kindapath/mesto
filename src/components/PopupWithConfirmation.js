import Popup from "./Popup"

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector)
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form')
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._cardId, this._element);

      this.close();
    })

  }

  open(id, element) {
    super.open()
    this._cardId = id
    this._element = element
  }
}
