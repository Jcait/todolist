// Adds the whole thing to the DOM

import taskDesc from "./taskDesc";
import taskHeader from "./taskheader";

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task");
  div.appendChild(taskHeader());
  div.appendChild(taskDesc());
  div.appendChild(addSub());
  return div;
}

const addSub = () => {
  const div = document.createElement("div");
  const subTask = document.createElement("input");
  subTask.placeholder = "Task name";
  div.classList.add("subTask");
  div.appendChild(subTask);
  div.appendChild(subBtn());
  return div;
};

const subBtn = () => {
  const btn = document.createElement("button");
  btn.classList.add("taskComplete");
  btn.innerText = "✔";
  return btn;
};
