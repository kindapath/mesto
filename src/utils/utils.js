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
    handleLikeClick: (id, likesNumber) => {
      api.likeCard(id)
        .then((res) => {
          likesNumber.textContent = res.likes.length
        })
      // api.removeLike(id)
      //   .then((res) => {
      //     likesNumber.textContent = res.likes.length
      //   })
    },
    userId: userId
  });

  const cardElement = card.generateCard();

  return cardElement
}

export {
  createCard,
}
