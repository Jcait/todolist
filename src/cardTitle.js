export default function cardTitle(card, text)  {
    const cardHeader = document.createElement("input")
    cardHeader.type = "text"
    cardHeader.placeholder = text
    const title = card.appendChild(cardHeader)
    title.innerText = text

 }