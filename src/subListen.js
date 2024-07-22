import addSubTask from "./addSubTask";

export default function subListen(btn) {
  btn.addEventListener("click", () => {
    const subTask = btn.parentNode;
    const taskList = btn.parentNode.parentNode.firstChild;
    let text = subTask.querySelector("input");
    console.log(text);
    taskList.appendChild(addSubTask(text.value));
    text.value = "";
  });
}
