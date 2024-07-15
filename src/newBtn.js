export default function newBtn() {
    const btn = document.createElement("button")
    btn.innerText = "Add sub-task"
    btn.classList.add("sub-task")
    btn.addEventListener("click", () => {
        console.log("CLICK")
    })
    return btn
 }
