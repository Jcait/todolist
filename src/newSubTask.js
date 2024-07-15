export default function newSubTask(dom) {
    const div = document.createElement("div")
    const checkbox = document.createElement("input")
    const subText = document.createElement("input")
    div.classList.add("sub-list")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    subText.type = "text"
    subText.classList.add("sub-task", "text")
    subText.placeholder = "New Sub Task"
    dom.appendChild(div)
    div.appendChild(checkbox)
    div.appendChild(subText)
    console.log("CLICK")  
}


