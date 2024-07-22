export default function addSubTask(text) {
  if (text.trim() == "") {
    return;
  } else {
    const div = document.createElement("div");
    const task = document.createElement("p");
    div.classList.add("subTask-item");
    task.innerText = text;
    div.appendChild(task);
    return div;
  }
}
