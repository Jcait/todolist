import divAdd from "./divAdd";
import subBtn from "./subBtn";

export default function addSub() {
  const div = divAdd();
  const subDiv = divAdd();
  const buttons = divAdd();
  const subTask = document.createElement("input");
  const subDate = document.createElement("input");
  subDiv.classList.add("task-list");
  subTask.placeholder = "Task name";
  div.classList.add("subTask");
  buttons.classList.add("buttons");
  div.appendChild(subDiv);
  div.appendChild(buttons);
  buttons.appendChild(subTask);
  subDate.type = "date";
  subDate.id = "duedate";
  buttons.appendChild(subDate);
  buttons.appendChild(subBtn());
  return div;
}
