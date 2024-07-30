export default function taskHeader() {
  const header = document.createElement("h3");
  header.innerText = document.getElementById("projectName").value;
  return header;
}
