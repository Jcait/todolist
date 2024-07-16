// Adds the whole thing to the DOM

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task!");
  return div;
}
