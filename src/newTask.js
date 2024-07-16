// Adds the whole thing to the DOM

export default function newTask() {
  const div = document.createElement("div");
  div.classList.add("task");
  div.append(taskHeader());
  return div;
}

const taskHeader = () => {
  const header = document.createElement("h3");
  header.innerText = "NEW TASK";
  return header;
};
