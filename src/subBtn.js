import subListen from "./subListen";

export default function subBtn() {
  const btn = document.createElement("button");
  btn.classList.add("addTask");
  btn.innerText = "+";
  subListen(btn);
  return btn;
}
