export default function newSubTask(dom) {
    const div = document.createElement("div")

    const subText = document.createElement("input")
    div.classList.add("sub-list")
    // subText.type = "text"
    // subText.classList.add("sub-task", "text")
    // subText.placeholder = "New Sub Task"
    dom.appendChild(div)
    div.appendChild(checkbox())
    // div.appendChild(subText)
    // console.log("CLICK")  
}

const checkbox = () => {
    const newCheckbox = document.createElement("input")
    newCheckbox.type = "checkbox"
    newCheckbox.classList.add("checkbox")
    newCheckbox.addEventListener("click", () => {
        console.log("CLicked")
    })
    return newCheckbox
}

