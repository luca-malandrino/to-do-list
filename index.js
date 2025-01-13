const popup = document.getElementById("popup");
const newTaskName = document.getElementById("newTaskName");
const taskContainer = document.getElementById("taskContainer");
const task = document.getElementById("task");

const tasks = localStorage.getItem("tasks") || "";
taskContainer.innerHTML += tasks; 


function openPopup() {
    popup.classList.replace("closed", "open");pppp
}

function closePopup() {
    popup.classList.replace("open", "closed");
}

function addTask() {
    if (newTaskName.value === "") {
        alert("You must write something");
    }
    else {
        taskContainer.innerHTML += `<span id="task" class="openTask">
                                        <span>
                                            <input type="checkbox" id="checkbox">
                                            <label for="checkbox" class="task-name">${newTaskName.value}</label>
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-trash" onclick="deleteTask(event)"></i><br>
                                        </span>
                                    </span>`;
        popup.classList.replace("open", "closed");

        localStorage.setItem("tasks", taskContainer.innerHTML);
    }
    newTaskName.value = "";
}

function resetTasks() {
    taskContainer.innerHTML = "";

    localStorage.removeItem("tasks");
}

function deleteTask(event) {
    let button = event.target;
    button.parentElement.parentElement.remove();

    localStorage.setItem("tasks", taskContainer.innerHTML);
}