document.addEventListener("DOMContentLoaded", () => {
  const elementIds = ["create-task-form", "new-task-description", "new-task-priority", "tasks"];
  const [taskForm, taskInput, taskPriority, taskUl] = elementIds.map(id => document.getElementById(id));

  const addTask = () => {
    const task = taskInput.value.trim();
    if (task) {
      const li = document.createElement("li");
      li.textContent = task;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.addEventListener("click", () => li.remove());

      li.appendChild(deleteButton);
      taskUl.appendChild(li);
      taskInput.value = "";
    }
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });
});