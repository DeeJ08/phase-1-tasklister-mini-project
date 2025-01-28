document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-description");
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  const addTask = () => {
      const task = taskInput.value.trim();
      if (task) {
          const li = document.createElement("li");
          li.textContent = task;

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "x";
          deleteButton.addEventListener("click", () => li.remove());

          li.appendChild(deleteButton);
          taskList.appendChild(li);
          taskInput.value = "";
      }
  };

  taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTask();
  });
});

  