import divAdd from "./divAdd"

export default function newSubTask() {
    const div = divAdd()

    div.classList.add("sub-list")

    div.appendChild(checkbox())
    div.appendChild(subTaskText())
    return div

}

const checkbox = () => {
    const newCheckbox = document.createElement("input")
    newCheckbox.type = "checkbox"
    newCheckbox.classList.add("checkbox")
    newCheckbox.addEventListener("change", () => {
        const taskText = newCheckbox.parentNode.childNodes[1]
        if(newCheckbox.checked == true) {
            // console.log("checkbox has been checked")
            taskText.classList.add("subtask-done")
        } else {
            // console.log("checkbox has not been checked")
            taskText.classList.remove("subtask-done")
        }

    })
    return newCheckbox
}

const subTaskText = () => {
    const subText = document.createElement("input")
    subText.type = "text"
    subText.classList.add("sub-task", "text")
    subText.placeholder = "New Sub Task"
    return subText
}
