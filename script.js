// Store tasks in an array
let tasks = [];

// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


// Add a new task
addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add task to array
    tasks.push(taskText);

    // Clear input
    taskInput.value = "";

    // Render updated list
    renderTasks();
});


// Allow Enter key to add task
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTaskBtn.click();
    }

});


// Render tasks from array
function renderTasks() {

    // Clear existing list
    taskList.innerHTML = "";

    // Create HTML for every task
    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.className = "task-item";

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}


// Event delegation for delete buttons
taskList.addEventListener("click", function (event) {

    // Check if clicked element is a delete button
    if (event.target.classList.contains("delete-btn")) {

        const index = event.target.dataset.index;

        // Remove task from array
        tasks.splice(index, 1);

        // Render updated list
        renderTasks();
    }

});