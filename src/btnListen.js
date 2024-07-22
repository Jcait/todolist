import newTask from "./newTask";

export default function btnListen(btn) {
  const list = document.querySelector(".list");
  btn.addEventListener("click", () => {
    console.log("clicked");
    list.appendChild(newTask());
  });
}
