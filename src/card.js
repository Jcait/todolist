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
    cardTop.appendChild(newTaskButton(newCard))
 }

const newTaskButton = (newCard) => {
    const btn = document.createElement("btn")
    btn.innerText = "New Task"
    btn.classList.add("new-task-btn")
    btn.addEventListener("click", () => {
        cardList(newCard)
        
    })
    return btn
}