export default function cardTitle(text)  {
    const cardHeader = document.createElement("input")
    cardHeader.type = "text"
    cardHeader.placeholder = text
    cardHeader.classList.add("card-title")
    cardHeader.innerText = text
    return cardHeader

 }