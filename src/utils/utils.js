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
    handleRmvBtnClick: (id, element) => {
      popupConfirm.open(id, element)
    },
    handleLikeClick: (id) => {
      api.likeCard(id)
    },
    handleRemoveLike: (id) => {
      api.removeLikeCard(id)
    },
    userId: userId
  });

  const cardElement = card.generateCard();

  return cardElement
}

export {
  createCard,
}
