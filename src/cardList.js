import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import newBtn from "./newBtn"



export default function cardList(card){
    const div = divAdd()
    div.classList.add("card-list")
    listContent(card, div)
 }

 const listContent = (card, div) => {
    const list = document.createElement("ul")
    div.appendChild(list)
    card.appendChild(div)
    list.appendChild(cardTitle("New Task"))
    div.appendChild(newBtn())
 }
