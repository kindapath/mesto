import Card from "../components/Card";
import {
  popupWithImage,
  popupConfirm,
  api,
  userId
} from "../pages/index";


function createCard(item) {
  const card = new Card({
    data: item,
    templateSelector: '#element-template',
    handleCardClick: () => {
      popupWithImage.open(item.name, item.link)
    },
    handleRmvBtnClick: () => {
      popupConfirm.open()
    },
    userId: userId
  });

  const cardElement = card.generateCard();

  return cardElement
}

export {
  createCard,
}
