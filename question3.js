// Task array to store tasks
let tasks = [];

// Function to add a new task
function addTask(id, name, description) {
    const task = { id, name, description };
    tasks.push(task);
    console.log('Task added:', task);
}

// Function to view all tasks
function viewTasks() {
    console.log('All Tasks:', tasks);
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log('Task updated:', task);
    } else {
        console.log('Task not found');
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log('Task deleted');
    } else {
        console.log('Task not found');
    }
}

// Example Usage:
addTask(1, 'Learn JavaScript', 'Study basic JS concepts');
addTask(2, 'Learn Node.js', 'Understand how Node.js works');
viewTasks();
updateTask(1, 'Master JavaScript', 'Study more advanced concepts');
deleteTask(2);
viewTasks();
