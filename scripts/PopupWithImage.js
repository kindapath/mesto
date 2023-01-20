import Popup from "./Popup.js";
import { popupImage, popupImageText } from "./utils.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  open() {
    super.open();

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageText.textContent = this._name;
  }
}
