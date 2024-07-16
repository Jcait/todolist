import newTask from "./newTask";
import "./style.css";

const list = document.querySelector(".list");

list.appendChild(newTask());

console.log("test");
