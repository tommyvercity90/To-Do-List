# 📝 Simple To-Do List

A basic **To-Do List web application** built using **HTML5, CSS3, and JavaScript**.

This project allows users to add and remove tasks. Tasks are stored only in a JavaScript array, so they are **not saved permanently** and will disappear when the page is refreshed.

---

## 📌 Description

The Simple To-Do List is a beginner-friendly project designed to practice:

* JavaScript arrays
* DOM manipulation
* Event handling
* Event delegation
* Dynamic list rendering
* Basic HTML and CSS

---

## 🎯 Objective

The main objective of this project is to understand how JavaScript can be used to:

1. Store data inside an array.
2. Add new tasks to the array.
3. Display array data dynamically on the webpage.
4. Remove tasks from the array.
5. Re-render the webpage whenever the data changes.
6. Use event delegation to handle delete buttons.

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript** – Application logic and DOM manipulation

---

## 📂 Project Structure

```text
todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the To-Do List, including:

* Heading
* Task input field
* Add Task button
* Task list

### `style.css`

Contains all the styling for:

* Page layout
* To-Do container
* Input field
* Buttons
* Task items
* Delete buttons

### `script.js`

Contains the application logic:

* Task array
* Adding tasks
* Rendering tasks
* Removing tasks
* Event delegation

---

## ✨ Features

### ➕ Add Tasks

Users can type a task into the input field and click **Add Task**.

Example:

```text
Complete JavaScript assignment
```

The task is then added to the task array and displayed on the page.

---

### 🗑️ Delete Tasks

Every task has a **Delete** button.

Clicking the button removes the corresponding task from the array and updates the displayed list.

---

### ⌨️ Enter Key Support

Users can also press the **Enter** key after typing a task to add it to the list.

---

### 🚫 Empty Task Validation

Empty tasks are not added.

If the input field is empty, the application displays an alert asking the user to enter a task.

---

## 🧠 How It Works

Tasks are stored in a JavaScript array:

```javascript
let tasks = [];
```

When the user adds a task, the task is pushed into the array:

```javascript
tasks.push(taskText);
```

The `renderTasks()` function then displays all tasks on the webpage.

```javascript
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        // Create and display task
    });
}
```

---

## 🔄 Delete Functionality

When a delete button is clicked, the task's index is retrieved using a `data-index` attribute.

The task is then removed using the JavaScript `splice()` method:

```javascript
tasks.splice(index, 1);
```

After deletion, the list is rendered again:

```javascript
renderTasks();
```

---

## 🎯 Event Delegation

Instead of adding a separate event listener to every delete button, the project uses **event delegation**.

The event listener is attached to the task list:

```javascript
taskList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {
        // Delete task
    }

});
```

This makes the code simpler and allows dynamically created buttons to work correctly.

---

## 💾 Data Persistence

This project **does not use localStorage, a database, or any backend**.

Tasks are stored only in memory:

```javascript
let tasks = [];
```

Therefore:

> ⚠️ All tasks will be lost when the webpage is refreshed or closed.

---

## 🚀 How to Run

### Step 1

Clone or download the project.

### Step 2

Open the project folder.

### Step 3

Make sure these files are present:

```text
index.html
style.css
script.js
```

### Step 4

Open `index.html` in any modern web browser.

That's it! 🎉

No server or additional installation is required.

---

## 📚 Learning Resources

For further learning, explore:

* JavaScript Array methods
* DOM Manipulation
* Event Listeners
* Event Delegation
* `forEach()`
* `push()`
* `splice()`
* `dataset`

Useful documentation can be found on **MDN Web Docs**.



## 🔮 Future Improvements

Some features that could be added later:

* ✅ Mark tasks as completed
* 💾 Save tasks using `localStorage`
* ✏️ Edit existing tasks
* 🔍 Search tasks
* 🗑️ Delete all tasks
* 📊 Task counter
* 🌙 Dark mode
* 📱 Improved mobile responsiveness


