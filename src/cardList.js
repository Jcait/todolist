import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import newBtn from "./newBtn"

export default function cardList(card){
    const div = divAdd()
    div.classList.add("card-list")
    const list = document.createElement("li")
    div.appendChild(list)
    card.appendChild(div)
    cardTitle(list, "Task 1 goes here")
    div.appendChild(newBtn())

 }