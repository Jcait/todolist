// Adds the whole thing to the DOM

import taskHeader from "./taskheader";

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task");
  div.appendChild(taskHeader());
  div.appendChild(taskDesc());
  return div;
}

const taskDesc = () => {
  const p = document.createElement("textarea");
  p.innerText = "Project Description";
  p.classList.add("task-desc");
  return p;
};
