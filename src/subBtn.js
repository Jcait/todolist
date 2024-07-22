export default function subBtn() {
  const btn = document.createElement("button");
  btn.classList.add("taskComplete");
  btn.innerText = "✔";
  subListen(btn);
  return btn;
}

const subListen = (btn) => {
  const subTask = btn.parentNode;
  btn.addEventListener("click", () => {
    const subTask = btn.parentNode;
    console.log(subTask.querySelector("input").value);
    subTask.querySelector("input").value = "";
    btn.parentNode.firstChild.appendChild(addSub());
  });
};

const addSub = () => {
  const div = document.createElement("div");
  div.classList.add("subTask-item");
  return div;
};
