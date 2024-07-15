export default function cardTitle(card, text)  {
    const cardHeader = document.createElement("input")
    cardHeader.type = "text"
    cardHeader.placeholder = text
    cardHeader.classList.add("card-title")
    const title = card.appendChild(cardHeader)
    title.innerText = text

 }