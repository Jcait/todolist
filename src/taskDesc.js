export default function taskDesc() {
  const p = document.createElement("textarea");
  p.innerText = "Project Description";
  p.classList.add("task-desc");
  return p;
}
