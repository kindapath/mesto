// Открываем попап
export function openPopup(el) {
  el.classList.add('popup_opened');
  // Прикрепляем обработчик для закрытия попапа на кнопку Esc
  document.addEventListener('keydown', handleEscKey);
}

// Закрываем попап
export function closePopup(el) {
  el.classList.remove('popup_opened');
// Удаляем обработчик для закрытия попапа на кнопку Esc
  document.removeEventListener('keydown', handleEscKey);
}

// Закрываем попап на кнопку Esc
function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
