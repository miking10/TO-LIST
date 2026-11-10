let todo = JSON.parse(localStorage.getItem("todo")) || [];
const addTask = document.getElementById("addTask");
let completedNum = 0;
let totalTask = document.getElementById("totalTask");
let completedTask = document.getElementById("completedTask");
let pandingTask = document.getElementById("pandingTask");

function addSection(todoTask, todoDay, index) {
  const section = document.querySelector(".tasks");
  const article = document.createElement("article");
  const checkBox = document.createElement("input");
  const taskContent = document.createElement("div");
  const taskInfo = document.createElement("div");
  const title = document.createElement("h3");
  const date = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const icon = document.createElement("img");
  const deleteIcon = document.createElement("img");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete");
  deleteIcon.classList.add("delete-icon");
  icon.src = "./ICON/calander-icon.png";
  icon.classList.add("icon");
  deleteIcon.src = "./ICON/delete.png";

  checkBox.type = "checkBox";
  checkBox.id = "checkbox";
  taskContent.classList.add("task-content");
  taskInfo.classList.add("task-info");

  article.classList.add("task");
  button.classList.add("delete");
  // console.log(taskContent);

  // collecting in to section
  deleteBtn.appendChild(deleteIcon);
  taskInfo.appendChild(icon);
  taskInfo.appendChild(date);
  article.appendChild(checkBox);
  // date.appendChild(icon);
  date.appendChild(p);
  taskContent.appendChild(title);
  taskContent.appendChild(taskInfo);
  article.appendChild(taskContent);
  article.appendChild(deleteBtn);
  section.appendChild(article);
  console.log(section);
  // check
  title.innerHTML = todoTask;
  p.innerHTML = todoDay;

  // ADD Event to delete
  deleteBtn.addEventListener("click", () => {
    todo.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todo));
    article.remove();

    totalTask.innerHTML = todo.length;
    completedTask.innerHTML = completedNum < 0 ? "0" : completedNum;
    pandingTask.innerHTML =
      todo.length - completedNum < 0 ? "0" : todo.length - completedNum;
    completedTask.innerHTML = todo.length == 0 ? "0" : completedNum;
  });

  // ADD event to checkbox
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      article.classList.add("completed-task");
      completedNum += 1;
    } else {
      article.classList.remove("completed-task");
      completedNum -= 1;
    }
    console.log(completedNum);
    completedTask.innerHTML = completedNum < 0 ? "0" : completedNum;
    pandingTask.innerHTML =
      todo.length - completedNum < 0 ? "0" : todo.length - completedNum;
  });
}

addTask.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput").value;
  const taskDate = document.getElementById("taskDate").value;

  const add = {
    task: taskInput,
    date: taskDate,
  };
  todo.push(add);

  localStorage.setItem("todo", JSON.stringify(todo)); // store in localStorege

  addSection(add.task, add.date);
  taskInput = "";
  console.log(todo);
  totalTask.innerHTML = todo.length;
  pandingTask.innerHTML = todo.length - completedTask.innerHTML;
});
totalTask.innerHTML = todo.length;
pandingTask.innerHTML =
  todo.length - completedNum < 0 ? "0" : todo.length - completedNum;
completedTask.innerHTML = completedNum;

todo.forEach((item, index) => {
  addSection(item.task, item.date, index);
});

// DAY
const date = document.querySelector(".date");
const greating = document.getElementById("greating");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const todate = new Date();
let day = todate.getDate();
let month = months[todate.getMonth()];
let year = todate.getFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const hour = todate.getHours();

if (hour >= 5 && hour < 12) {
  greating.innerHTML = `Good Morning`;
} else if (hour >= 12 && hour < 17) {
  greating.innerHTML = `Good Afternoon`;
} else if (hour >= 17 && hour < 21) {
  greating.innerHTML = `Good Evening`;
} else {
  greating.innerHTML = `Good Evening`;
}
