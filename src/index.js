import "./style.css"

// DOM Selectors
const content = document.querySelector(".content")


const card = () => {
    const div = document.createElement("div")
    div.classList.add("card")
    content.appendChild(div)
    cardTitle(div, "Card Title")
 }

 const cardTitle = (card, text) => {
    const cardHeader = document.createElement("input")
    cardHeader.type = "text"
    cardHeader.placeholder = text
    const title = card.appendChild(cardHeader)
    title.innerText = text

 }

card() 
