import newTask from "./newTask";

export default function webPage() {
  const sideBarBtns = document.querySelector(".side-buttons");
  const list = document.querySelector(".list");
  addBtn(sideBarBtns);
  list.appendChild(newTask());
}

const addBtn = (sideBtn) => {
  const btn = document.createElement("button");
  sideBtn.appendChild(btn);
  btn.innerText = "New Project";
};
