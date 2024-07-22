import subListen from "./subListen";

export default function subBtn() {
  const btn = document.createElement("button");
  btn.classList.add("taskComplete");
  btn.innerText = "+";
  subListen(btn);
  return btn;
}

const addSub = (text) => {
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
};
