import {
  confirm,
  inquirerMenu,
  listTodoDelete,
  pause,
  readInput,
  showChecklist,
} from "./helpers/inquirer.js";

import "colors";
import { Todos } from "./models/todos.js";
import { saveFile, readDb } from "./helpers/saveFile.js";

console.clear();

const main = async () => {
  let opt = "";
  const todos = new Todos();

  const docs = readDb();

  if (docs) {
    todos.loadTodosFromArr(docs);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        todos.makeTodo(desc);
        break;

      case "2":
        //Listado
        todos.listComplete();
        break;

      case "3":
        todos.listTodoFinished(true);
        break;
      case "4":
        todos.listTodoFinished(false);
        break;
      case "5":
        const ids = await showChecklist(todos.todoListArr);
        todos.toggleTodos(ids);
        break;
      case "6":
        const id = await listTodoDelete(todos.todoListArr);
        if (id !== "0") {
          const ok = await confirm("¿Estás seguro?");
          if (ok) {
            todos.deleteTodo(id);
          }
        }

        break;
    }

    saveFile(JSON.stringify(todos.todoListArr));

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
