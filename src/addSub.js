import subBtn from "./subBtn";

export default function addSub() {
  const div = document.createElement("div");
  const subDiv = document.createElement("div");
  const subTask = document.createElement("input");
  subDiv.classList.add("Test");
  subTask.placeholder = "Task name";
  div.classList.add("subTask");
  div.appendChild(subDiv);
  div.appendChild(subTask);
  div.appendChild(subBtn());
  return div;
}
