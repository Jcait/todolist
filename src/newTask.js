// Adds the whole thing to the DOM

import taskHeader from "./taskheader";

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task");
  div.append(taskHeader());
  return div;
}
