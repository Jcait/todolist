import addSubTask from "./addSubTask";
import divAdd from "./divAdd";

export default function subListen(btn) {
  btn.addEventListener("click", () => {
    const subTask = btn.parentNode;
    const taskList = btn.parentNode.parentNode.firstChild;
    let date = subTask.querySelector("#duedate");
    let text = subTask.querySelector("input");
    console.log(text);
    taskList.appendChild(addSubTask(text.value, date.value));
    text.value = "";
  });
}
