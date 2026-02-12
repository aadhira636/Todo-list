let todos = [
  {
    id: 1,
    title: "First To-Do",
  },
  {
    id: 2,
    title: "Second To-Do",
  },
];

function addToDo(event) {
  event.preventDefault();
  let input = document.getElementById("todo-input");
  InputValue = input.value;
  if (InputValue === "") {
    window.alert("Please write a task");
    return;
  }
  todos.push({ id: todos.length + 1, title: InputValue });
  input.value = "";
  showTodos();
}

function showTodos() {
  let toDoList = document.getElementById("todo-list");
  toDoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    toDoList.innerHTML += `<li>${todos[i].title}<button id="update-btn" onclick="updateToDos">✎</button><button onclick="deleteToDos(${todos[i].id})">❌</button></li>`;
  }
}

function deleteToDos(id) {
  console.log("hi");
  let filteredToDos = todos.filter(function (item) {
    if (id != item.id) {
      return item;
    }
  });
  console.log(filteredToDos);
  todos = filteredToDos;
  showTodos();
}

function updateToDos() {
  let updatedToDo = document.getElementById("updated-input");
}

showTodos();
