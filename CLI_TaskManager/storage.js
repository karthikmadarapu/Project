const fs = require("fs");
const FILE_PATH  = './tasks.json';

function loadTasks(){

    try{
    
        const dataBuffer = fs.readFileSync(FILE_PATH );
        return JSON.parse(dataBuffer.toString());
    }
    catch(error){
        return [];
    }

}

function saveTasks(tasks){
    try{ 
        const dataJSON = JSON.stringify(tasks, null, 2);
        fs.writeFileSync(FILE_PATH , dataJSON);
    } 
    catch(error) {
        console.error('Error saving tasks to file:', error.message);
    }

}

module.exports = { loadTasks, saveTasks };
