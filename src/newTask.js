// Adds the whole thing to the DOM

import taskDesc from "./taskDesc";
import taskHeader from "./taskheader";

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task");
  div.appendChild(taskHeader());
  div.appendChild(taskDesc());
  return div;
}
