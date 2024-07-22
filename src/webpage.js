import addBtn from "./addBtn";
import newTask from "./newTask";

export default function webPage() {
  const sideBarBtns = document.querySelector(".side-buttons");
  const list = document.querySelector(".list");
  sideBarBtns.appendChild(addBtn());
  list.appendChild(newTask());

  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}
