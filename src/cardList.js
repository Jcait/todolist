import divAdd from "./divAdd"
import cardTitle from "./cardTitle"
import newBtn from "./newBtn"



export default function cardList(card){
    const div = divAdd()
   //  const subDiv = divAdd()
   //  subDiv.classList.add("task-btns")
    div.classList.add("card-list")
    listContent(card, div)
    div.appendChild(taskBtns())
    card.appendChild(div)
 }

const taskBtns = () => {
   const div = divAdd()
   div.classList = "task-btns"
   return div
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
