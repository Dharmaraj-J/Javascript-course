const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    </p>
    `;
    todoListHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dataInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dataInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
