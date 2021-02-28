const input = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const filterOption = document.querySelector(".filter_todo");
const todoList = document.querySelector(".todo_list");

//adding click event with the add event listener

todoButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoListems = document.createElement("li");
  todoListems.innerText = input.value;
  todoListems.classList.add("todo_item");
  todoDiv.appendChild(todoListems);

  if (input.value === "") {
    return null;
  }
  console.log("click");

  //adding a delete btn

  const deletebtn = document.createElement("button");
  deletebtn.innerHTML = `<i class="fas fa-trash"></i>`;
  deletebtn.classList.add("delete_btn");
  todoDiv.appendChild(deletebtn);

  const completebtn = document.createElement("button");
  completebtn.innerHTML = `<i class="fas fa-check"></i>`;
  completebtn.classList.add("complete_btn");
  todoDiv.appendChild(completebtn);

  todoList.appendChild(todoDiv);
  input.value = "";
}

function deleteTodo(event) {
  const item = event.target;
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    todo.classList.add("fall__two");

    todo.addEventListener("click", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.add("completedItem");
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  for (let i = 1; i < todos.length; i++) {
    switch (event.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains("complete_btn")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todos[i].classList.contains("complete_btn")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = none;
        }
        break;
    }
  }
}
