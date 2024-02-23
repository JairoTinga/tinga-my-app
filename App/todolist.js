document.addEventListener("DOMContentLoaded", function () {
	const newTaskInput = document.getElementById("new-task");
	const addTaskButton = document.getElementById("add-task");
	const incompleteTasksList = document.getElementById("incomplete-tasks");
	const completedTasksList = document.getElementById("completed-tasks");
  
	// Function to create a new task item
	function createNewTaskElement(taskString) {
	  const listItem = document.createElement("li");
	  const checkBox = document.createElement("input");
	  const label = document.createElement("label");
	  const editInput = document.createElement("input");
	  const editButton = document.createElement("button");
	  const deleteButton = document.createElement("button");
  
	  checkBox.type = "checkbox";
	  editInput.type = "text";
	  editButton.className = "edit";
	  editButton.innerText = "Edit";
	  deleteButton.className = "delete";
	  deleteButton.innerText = "Delete";
	  label.innerText = taskString;
  
	  listItem.appendChild(checkBox);
	  listItem.appendChild(label);
	  listItem.appendChild(editInput);
	  listItem.appendChild(editButton);
	  listItem.appendChild(deleteButton);
  
	  return listItem;
	}
  
	// Function to add a new task
	function addTask() {
	  const taskString = newTaskInput.value.trim();
	  if (taskString === "") return;
  
	  const listItem = createNewTaskElement(taskString);
	  incompleteTasksList.appendChild(listItem);
	  bindTaskEvents(listItem, completeTask);
  
	  newTaskInput.value = "";
	}
  
	// Function to complete a task
	function completeTask() {
	  const listItem = this.parentNode;
	  completedTasksList.appendChild(listItem);
	  bindTaskEvents(listItem, incompleteTask);
	}
  
	// Function to incomplete a task
	function incompleteTask() {
	  const listItem = this.parentNode;
	  incompleteTasksList.appendChild(listItem);
	  bindTaskEvents(listItem, completeTask);
	}
  
	// Function to edit a task
	function editTask() {
	  const listItem = this.parentNode;
	  const label = listItem.querySelector("label");
	  const editInput = listItem.querySelector("input[type=text]");
	  const containsClass = listItem.classList.contains("editMode");
  
	  if (containsClass) {
		label.innerText = editInput.value;
		this.innerText = "Edit";
	  } else {
		editInput.value = label.innerText;
		this.innerText = "Save";
	  }
  
	  listItem.classList.toggle("editMode");
	}
  
	// Function to delete a task
	function deleteTask() {
	  const listItem = this.parentNode;
	  const ul = listItem.parentNode;
	  ul.removeChild(listItem);
	}
  
	// Function to bind task events
	function bindTaskEvents(taskItem, checkboxEventHandler) {
	  const checkBox = taskItem.querySelector("input[type=checkbox]");
	  const editButton = taskItem.querySelector("button.edit");
	  const deleteButton = taskItem.querySelector("button.delete");
  
	  checkBox.onchange = checkboxEventHandler;
	  editButton.onclick = editTask;
	  deleteButton.onclick = deleteTask;
	}
  
	// Event listener for adding a new task
	addTaskButton.addEventListener("click", addTask);
  
	// Initialize existing tasks
	const existingTasks = document.querySelectorAll("#incomplete-tasks li");
	existingTasks.forEach(function (task) {
	  bindTaskEvents(task, completeTask);
	});
  
	const completedTasks = document.querySelectorAll("#completed-tasks li");
	completedTasks.forEach(function (task) {
	  bindTaskEvents(task, incompleteTask);
	});
  });
  