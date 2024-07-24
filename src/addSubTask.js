import { compareAsc, format } from "date-fns";
import { te } from "date-fns/locale";
import divAdd from "./divAdd";

export default function addSubTask(text, date) {
  if (text.trim() == "" && date != " ") {
    return;
  } else {
    console.log(date);
    const div = document.createElement("div");
    const subTaskBtns = divAdd();
    const task = document.createElement("p");
    div.classList.add("subTask-item");
    subTaskBtns.classList.add("subTask-buttons");
    task.innerText = text;
    div.appendChild(task);
    div.appendChild(addDue(date));
    div.appendChild(subTaskBtns);
    checkBtns(subTaskBtns);
    return div;
  }
}

const addDue = (date) => {
  let newDate = format(new Date(date), "do MMMM y");
  const p = document.createElement("p");
  p.innerText = `Task Due: ${newDate}`;
  return p;
};

const checkBtns = (div) => {
  for (let i = 0; i < 2; i++) {
    const btn = document.createElement("button");
    if (i == 0) {
      btn.classList.add("subtask-complete");
      btn.innerText = "✓";
      completeBtn(btn);
    } else {
      btn.classList.add("subtask-delete");
      btn.innerText = "X";
      deleteBtn(btn);
    }
    div.appendChild(btn);
  }
};

const completeBtn = (btn) => {
  btn.addEventListener("click", () => {
    let taskList = btn.parentNode.querySelectorAll("p");
    taskList.forEach((task) => {
      task.classList.toggle("checked");
    });
  });
};

const deleteBtn = (btn) => {
  btn.addEventListener("click", () => {
    let taskList = btn.parentNode;
    taskList.remove();
  });
};
