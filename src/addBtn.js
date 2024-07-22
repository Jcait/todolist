import btnListen from "./btnListen";

export default function addBtn() {
  const btn = document.createElement("button");
  btn.innerText = "New Project";
  btnListen(btn);
  return btn;
}
