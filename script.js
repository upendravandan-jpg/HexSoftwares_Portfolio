const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.onclick = function () {
        const newText = prompt("Edit task", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove";

    removeBtn.onclick = function () {
        taskDiv.remove();
    };

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(removeBtn);

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(buttonDiv);

    taskList.appendChild(taskDiv);

    taskInput.value = "";
}
