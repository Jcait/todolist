import newTask from "./newTask";

export default function webPage() {
  const list = document.querySelector(".list");
  list.appendChild(newTask());
}
