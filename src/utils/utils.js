import Card from "../components/Card";
import {
  popupWithImage,
  popupConfirm,
  api,
  userId
} from "../pages/index";

// Создаем карточку
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
      if (card.isLiked()) {
        api.removeLike(id)
          .then((res) => {
            card.setLikesNumber(res)
            card.toggleLike()
          })
      } else {
        api.likeCard(id)
          .then((res) => {
            card.setLikesNumber(res)
            card.toggleLike()
          })
      }
    },
    userId: userId
  });

  const cardElement = card.generateCard();

  return cardElement
}

export {
  createCard,
}
