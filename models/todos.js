import { Todo } from "./todo.js";

export class Todos {
  _todoList = {};

  constructor() {
    this._todoList = {};
  }

  makeTodo(description = "") {
    const todo = new Todo(description);

    this._todoList[todo.id] = todo;
  }

  loadTodosFromArr(todos = []) {
    todos.forEach((todo) => {
      this._todoList[todo.id] = todo;
    });
  }

  listComplete() {
    console.log();
    this.todoListArr.forEach((todo, index) => {
      const i = String(index + 1).green;
      const { description, finishedAt } = todo;
      const isFinished = finishedAt ? "Finished".green : "Pending".red;

      const todoStr = `${i}. ${description} <> ${isFinished}`;

      console.log(todoStr);
    });
  }

  listTodoFinished(finished = true) {
    let i = 0;
    this.todoListArr.filter((todo, index) => {
      const { description, finishedAt } = todo;

      if (finished) {
        if (finishedAt) {
          i++;
          const todoStr = `${
            i.toString().green
          }. ${description} <> ${finishedAt}`;
          console.log(todoStr);
        }
      } else {
        if (!finishedAt) {
          i++;
          const isFinished = "Pending".red;
          const todoStr = `${
            i.toString().green
          }. ${description} <> ${isFinished}`;
          console.log(todoStr);
        }
      }
    });
  }

  deleteTodo(id = "") {
    if (this._todoList[id]) {
      delete this._todoList[id];
    }
  }

  toggleTodos(ids = []) {
    ids.forEach((id) => {
      const tarea = this._todoList[id];

      if (!tarea.finishedAt) {
        tarea.finishedAt = new Date().toISOString().green;
      }
    });

    this.todoListArr.forEach((todo) => {
      if (!ids.includes(todo.id)) {
        this._todoList[todo.id].finishedAt = null;
      }
    });
  }

  get todoListArr() {
    const list = [];

    Object.keys(this._todoList).forEach((todo) => {
      list.push(this._todoList[todo]);
    });

    return list;
  }
}
