import "./style.css"

// DOM Selectors
const content = document.querySelector(".content")


const card = () => {
    const div = document.createElement("div")
    content.appendChild(div)
    cardTitle(div, "test")
 }

 const cardTitle = (card, text) => {
    const cardHeader = document.createElement("h3")
    const title = card.appendChild(cardHeader)
    title.innerText = text

 }

card() 
