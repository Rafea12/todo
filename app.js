const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const textTitle = taskInput.value;
    console.log(textTitle);

    if (textTitle === "") { // Fix the variable name here: taskTitle to textTitle
        alert("Please enter a task");
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = textTitle;
        taskList.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = `&times;`;
        listItem.appendChild(span);
        taskInput.value = "";
        saveListData();
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveListData();
    }
    if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement;
        li.remove();
        saveListData();
    }
});

function showListData() {
    taskList.innerHTML = localStorage.getItem("listItem");
}

function saveListData() {
    localStorage.setItem('listItem', taskList.innerHTML);
}

showListData();