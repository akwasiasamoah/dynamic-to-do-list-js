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
    if (taskText !== "") {
      // Create a new list item for the task
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create a remove button for the task
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";

      // Add a class to the remove button using classList.add
      removeButton.classList.add("remove-btn");

      // Assign an onclick event to the remove button that removes the li element from taskList
      removeButton.onclick = () => {
        taskList.removeChild(li);
      };

      // Append the remove button to the list item, then append the list item to taskList
      li.appendChild(removeButton);
      taskList.appendChild(li);

      // Clear the task input field by setting taskInput.value to an empty string
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }

  // Add an event listener to addButton that calls addTask when the button is clicked
  addButton.addEventListener("click", addTask);

  // Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
