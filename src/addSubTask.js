import { compareAsc, format } from "date-fns";

export default function addSubTask(text, date) {
  if (text.trim() == "" && date != " ") {
    return;
  } else {
    console.log(date);
    const div = document.createElement("div");
    const task = document.createElement("p");
    div.classList.add("subTask-item");
    task.innerText = text;
    div.appendChild(task);
    div.appendChild(addDue(date));
    checkBtns(div);
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
    } else {
      btn.classList.add("subtask-delete");
      btn.innerText = "X";
    }
    div.appendChild(btn);
  }
};
