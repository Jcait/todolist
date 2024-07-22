export default function taskDesc() {
  const p = document.createElement("textarea");
  p.placeholder = "Project Description";
  p.classList.add("task-desc");
  return p;
}
