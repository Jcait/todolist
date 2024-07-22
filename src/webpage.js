import addBtn from "./addBtn";
import newTask from "./newTask";

export default function webPage() {
  const sideBarBtns = document.querySelector(".side-buttons");
  const list = document.querySelector(".list");
  sideBarBtns.appendChild(addBtn());
  list.appendChild(newTask());
}
