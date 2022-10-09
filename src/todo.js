// element
const listTodoForm = document.querySelector(".list-todo__form");
const listTodoInput = document.querySelector(".list-todo__input");
const listTodoUl = document.querySelector(".list-todo__ul");

// row value
const TODO_KEY = "Thing-to-do";

// variable
let todoArray = [];
const savedTodo = localStorage.getItem(TODO_KEY);

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function addTodo(obj) {
  const li = document.createElement("li");
  li.id = obj.ID;
  const span = document.createElement("span");
  span.innerText = obj.value;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", delteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  listTodoUl.appendChild(li);
}

function delteTodo(event) {
  const target = event.target.parentElement;
  target.remove();
  todoArray = todoArray.filter((item) => item.ID !== parseInt(target.id));
  saveTodo();
}

function loadTodo() {
  todoArray = JSON.parse(savedTodo);
  todoArray.forEach(addTodo);
}

function handleSubmit(event) {
  event.preventDefault();
  const input = listTodoInput.value;
  listTodoInput.value = "";
  const obj = {
    ID: Date.now(),
    value: input,
  };
  todoArray.push(obj);
  addTodo(obj);
  saveTodo();
}

listTodoForm.addEventListener("submit", handleSubmit);

if (savedTodo !== null) {
  loadTodo();
}
