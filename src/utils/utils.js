import Card from "../components/Card";
import { popupWithImage } from "../pages";

function createCard (item, popup) {
  const card = new Card({
    data: item,
    templateSelector: '#element-template',
    handleCardClick: () => {
      popupWithImage.open(item.name, item.link)
    }
  });

  const cardElement = card.generateCard();

  return cardElement
}

export {
  createCard,
 }
