import newSubTask from "./newSubTask"

export default function newBtn() {
    const btn = document.createElement("button")
    btn.innerText = "Add sub-task"
    btn.classList.add("sub-task")
    btn.addEventListener("click", () => {
        const test = btn.parentNode.firstChild
        newSubTask(test)

    })
    return btn
 }


