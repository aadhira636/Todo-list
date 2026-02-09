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
    window.alert("Please write your task");
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
    toDoList.innerHTML += `<li>${todos[i].title}<button id="delete">❌</button></li>`;
  }
}

showTodos();

function deleteToDo(){
    
}