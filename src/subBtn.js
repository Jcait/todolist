export default function subBtn() {
  const btn = document.createElement("button");
  btn.classList.add("taskComplete");
  btn.innerText = "✔";
  subListen(btn);
  return btn;
}

const subListen = (btn) => {
  btn.addEventListener("click", () => {
    const test = document.createElement("h1");
    console.log("clicked");
    test.innerText = "TEST WORKS";
    btn.parentNode.firstChild.appendChild(test);
  });
};
