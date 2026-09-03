const {loadTasks, saveTasks} = require('./storage');

function listTasks(){
    const tasks = loadTasks();

    if(tasks.length === 0) {
        console.log("no tasks found!");
    return;
    }

  console.log('\n--- Your Task List ---');
   tasks.forEach(({ id, title, completed }) => {
    const status = completed ? '[✓]' : '[ ]';
    console.log(`${id}. ${status} ${title}`);
  });
  console.log('----------------------\n');


}

function addTasks(){
    if(!title){
        console.log('Error: Task title cannot be empty.');
        return;
    }
    const tasks = loadTasks();
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Success: Added task "${title}" (ID: ${newTask.id})`);

}


function toggleTasks(id){
    const tasks = loadTasks();
    let found = false;

    const updatedTasks = tasks.map( task => {

        if(task.id === parseInt(id)){
               found = true;
            return { ...task, completed: !task.completed };
        }
        return task;
     });
     

     if(!found){
        console.log(`Error: Task with ID ${id} not found.`);
        return;
     }

     saveTasks(updatedTasks);
     console.log(`Success: Toggled status for task ID ${id}`);
}

function deleteTasks(id){
    const tasks = loadTasks();
    const parsedId = parseInt(id);
    const filteredTasks = tasks.filter(task => task.id !== parsedId);

    if(tasks.length === filteredTasks.length){
        console.log(`Error: Task with ID ${id} not found.`);
        return;
    }

    saveTasks(filteredTasks);
    console.log(`Deleted task with ID ${id} successfully.`);

}

module.exports = {listTasks, addTasks, toggleTasks, deleteTasks};