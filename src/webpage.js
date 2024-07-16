import newTask from "./newTask";

export default function webPage() {
  const sideBarBtns = document.querySelector(".side-buttons");
  const list = document.querySelector(".list");
  addBtn(sideBarBtns);
  list.appendChild(newTask());
}

const addBtn = (sideBtn) => {
  const btn = document.createElement("button");
  btn.innerText = "New Project";
  btnListen(btn);
  sideBtn.appendChild(btn);
};

const btnListen = (btn) => {
  const list = document.querySelector(".list");
  btn.addEventListener("click", () => {
    console.log("clicked");
    list.appendChild(newTask());
  });
};
