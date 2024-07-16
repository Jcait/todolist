import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import newBtn from "./newBtn"



export default function cardList(card){
    const div = divAdd()
    div.classList.add("card-list")
    listContent(card, div)
 }

 const listContent = (card, div) => {
   const subDiv = divAdd()
    const list = document.createElement("ul")
    subDiv.classList = "list-contents"
    div.appendChild(subDiv)

    subDiv.appendChild(list)
    card.appendChild(div)
    list.appendChild("New Task")
    div.appendChild(newBtn())
 }
