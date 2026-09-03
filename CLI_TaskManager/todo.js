const {listTasks, addTask, toggleTask, deleteTask} = require('./taskController');
const [, ,command, ...args] = process.argv;


   
switch (command) {
  case 'list':
    listTasks();
    break;
  case 'add':
    addTask(args.join(' '));
    break;
  case 'toggle':
    toggleTask(args);
    break;
  case 'delete':
    deleteTask(args); 
    break;
  default:
    console.log('Invalid command. Usage:');
    console.log('  node todo.js list');
    console.log('  node todo.js add "Task description"');
    console.log('  node todo.js toggle <id>');
    console.log('  node todo.js delete <id>');
}

