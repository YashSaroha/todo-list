const textBox = document.getElementById("text-box");
const taskContainer = document.getElementById("task-container");
const addButton = document.querySelector("button");

// Add task when "Enter" key is pressed in the input box
textBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default "Enter" key behavior
    addButton.click(); // Trigger the click event on the "Add" button
  }
});

function addTask() {
  if (textBox.value === "") {
    alert("You must enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML =
      textBox.value +
      '<span class="edit">\u270E</span><span class="delete">\u274C</span>';
    taskContainer.appendChild(li);
    textBox.value = "";
    saveData();
  }
}

taskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("edit")) {
      editTask(e.target.parentElement);
    } else if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function editTask(taskItem) {
  const text = taskItem.firstChild.textContent;
  const newText = prompt("Edit the task:", text);
  if (newText !== null) {
    taskItem.firstChild.textContent = newText;
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showData();
