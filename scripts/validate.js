
const formError = popupForm.querySelector(`.${popupInput.id}-error`)

const showInputError = (el) => {
  el.classList.add('popup__input_type_error');
  formError.classList.add('popup__input-error_active');
};

const hideInputError = (el) => {
  el.classList.remove('popup__input_type_error');
  formError.classList.remove('popup__input-error_active');
};

const checkInputValidity = () => {
    if (!popupInput.validity.valid){
        showInputError(popupInput)

    } else {
        hideInputError(popupInput)
    }
};

popupInput.addEventListener('input', checkInputValidity)

const setEventListeners = () => {

};
