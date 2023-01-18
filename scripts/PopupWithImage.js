import Popup from "./Popup";
import { popupImage, popupImageText } from "./utils.js";

export default class PopupWithImage extends Popup {
  open() {
    super.open();

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageText.textContent = this._name;
  }
}
