// const page = document.querySelector('.page');

// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
// };

// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = '';
// };

// const isValid = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
// };

// const toggleButtonState = (inputList, buttonElement, config) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(config.inactiveButtonClass);
//     buttonElement.disabled = 'disabled';
//   } else {
//     buttonElement.classList.remove(config.inactiveButtonClass);
//     buttonElement.disabled = '';
//   }
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid
//   });
// };

// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);

//   toggleButtonState(inputList, buttonElement, config);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       isValid(formElement, inputElement, config);

//       toggleButtonState(inputList, buttonElement, config);
//     });
//   });
// };

// const enableValidation = (config) => {

//   const formList = Array.from(page.querySelectorAll(config.formSelector));

//   formList.forEach((formElement) => {

//     setEventListeners(formElement, config);

//   });

// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__submit',
//   inactiveButtonClass: 'popup__submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_active'
// });


/////////////////////////

export class FormValidator {
  // Селекторы
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }
  // Проверка валидности инпута
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Показать ошибку
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Скрыть ошибку
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // Переключение состояния кнопки
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = '';
    }
  }

  // Проверка всех валидности инпут листа
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    });
  };

  // Обработчики событий
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);

        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  // Включение валидации
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach(() => {

      this._setEventListeners();

    });
  }
}


