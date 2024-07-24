// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage and display them
  function loadTasks() {
    // Get tasks from Local Storage
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      // Parse JSON data to array
      const taskArray = JSON.parse(tasks);

      // Create task elements for each task in the array
      taskArray.forEach((taskText) => {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = () => {
          removeTask(li, taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
      });
    }
  }

  // Save tasks to Local Storage
  function saveTasks() {
    // Get all task items
    const taskItems = Array.from(taskList.children);

    // Map each task item's text content to an array
    const taskArray = taskItems.map((li) =>
      li.textContent.replace("Remove", "").trim()
    );

    // Save the array to Local Storage
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.onclick = () => {
        removeTask(li, taskText);
      };

      li.appendChild(removeButton);
      taskList.appendChild(li);

      taskInput.value = "";

      // Save tasks to Local Storage
      saveTasks();
    } else {
      alert("Please enter a task.");
    }
  }

  // Function to remove a task
  function removeTask(li, taskText) {
    taskList.removeChild(li);

    // Remove task from Local Storage
    saveTasks();
  }

  // Add event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add event listener to the input field for the 'keypress' event
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks when the page loads
  loadTasks();
});
