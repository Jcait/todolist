import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import newBtn from "./newBtn"



export default function cardList(card){
    const div = divAdd()
    const subDiv = divAdd()
    div.classList.add("card-list")
    listContent(card, div)
    div.appendChild(subDiv)
    card.appendChild(div)
 }

 const listContent = (card, div) => {
    const list = document.createElement("ul")
    const subDiv = divAdd()
    subDiv.classList.add("list-content")
    div.appendChild(subDiv)
    subDiv.appendChild(list)
    list.appendChild(cardTitle("New Task"))
    subDiv.appendChild(newBtn())
 }
