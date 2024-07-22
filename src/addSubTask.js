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
    return div;
  }
}

const addDue = (date) => {
  let newDate = format(new Date(date), "do LLLL");
  const p = document.createElement("p");
  p.innerText = `Task Due: ${newDate}`;
  return p;
};
