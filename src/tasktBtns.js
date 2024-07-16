import divAdd from "./divAdd";

export default function taskBtns() {
  const div = divAdd();
  addBtns(div);
  div.classList = "task-btns";
  return div;
}

const addBtns = (div) => {
  for (let i = 0; i < 2; i++) {
    const btn = document.createElement("button");
    if (i == 0) {
      btn.classList.add("complete-button");
      btn.innerText = "Task Complete";
      completeBtn(btn);
    } else {
      btn.classList.add("delete-button");
      btn.innerText = "Delete Task";
    }
    div.appendChild(btn);
  }
};

const completeBtn = (btn) => {
  btn.addEventListener("click", () => {
    // const cardList = btn.parentNode.parentNode.parentNode.firstChild.firstChild;
    const title = btn.parentNode.parentNode.querySelector("input");
    const text =
      btn.parentNode.parentNode.parentNode.querySelectorAll(".sub-task.text");
    const checkbox =
      btn.parentNode.parentNode.parentNode.querySelectorAll(".checkbox");
    console.log(title);
    if (text.length > 0) {
      console.log("The list has items");
      text.forEach((input) => input.classList.add("subtask-done"));
      checkbox.forEach((input) => (input.checked = true));
      title.classList.add("subtask-done");
    } else {
      console.log("The LIst doesn't have items");
    }
  });
};
