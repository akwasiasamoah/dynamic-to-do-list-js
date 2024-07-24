// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Get the task text from the input field and trim it
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add an event listener to the remove button to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item, and the list item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Add event listener to the "Add Task" button to add tasks
  addButton.addEventListener("click", addTask);

  // Add event listener to the input field to add tasks on Enter key press
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
