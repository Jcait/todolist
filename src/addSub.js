import subBtn from "./subBtn";

export default function addSub() {
  const div = document.createElement("div");
  const subDiv = document.createElement("div");
  const buttons = document.createElement("div");
  const subTask = document.createElement("input");
  subDiv.classList.add("task-list");
  subTask.placeholder = "Task name";
  div.classList.add("subTask");
  div.appendChild(subDiv);
  div.appendChild(buttons);
  buttons.appendChild(subTask);
  buttons.appendChild(subBtn());
  return div;
}
