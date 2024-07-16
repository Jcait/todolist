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
    const cardList = btn.parentNode.parentNode.parentNode.firstChild.firstChild;
    cardList.classList.add("subtask-done");
  });
};
