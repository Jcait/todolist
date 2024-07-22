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
  div.classList.add("subTask");
  div.appendChild(subTask);
  return div;
};
