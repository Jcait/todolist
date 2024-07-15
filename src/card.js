import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import cardList from "./cardList"

export default function card(content) {
    const newCard = divAdd()
    const cardTop = divAdd()
    newCard.classList.add("card")
    cardTop.classList.add("card-top")
    content.appendChild(newCard)
    newCard.appendChild(cardTop)
    cardTitle(cardTop, "Card Title")
    cardList(newCard)
 }

 