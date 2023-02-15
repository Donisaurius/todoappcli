require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("========================".green);
    console.log(" Selecciones una opción".green);
    console.log("========================".green);

    console.log(`${"1".green} Crear tarea`);
    console.log(`${"2".green} Listar tareas`);
    console.log(`${"3".green} Listar tareas completas`);
    console.log(`${"4".green} Listar tareas pendientes`);
    console.log(`${"5".green} Completar tarea(s)`);
    console.log(`${"6".green} Borrar tarea`);
    console.log(`${"0".green} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (opt) => {
      resolve(opt);
      readLine.close();
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      resolve(opt);
      readLine.close();
    });
  });
};

module.exports = {
  showMenu,
  pausa,
};
