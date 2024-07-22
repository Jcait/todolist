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
  const subDiv = document.createElement("div");
  const subTask = document.createElement("input");
  subDiv.classList.add("Test");
  subTask.placeholder = "Task name";
  div.classList.add("subTask");
  div.appendChild(subDiv);
  div.appendChild(subTask);
  div.appendChild(subBtn());
  return div;
};

const subBtn = () => {
  const btn = document.createElement("button");
  btn.classList.add("taskComplete");
  btn.innerText = "✔";
  subListen(btn);
  return btn;
};

const subListen = (btn) => {
  btn.addEventListener("click", () => {
    const test = document.createElement("h1");
    console.log("clicked");
    test.innerText = "TEST WORKS";
    btn.parentNode.firstChild.appendChild(test);
  });
};
