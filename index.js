function addTask() {
   
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;

    
    if (!title || !date) {
        alert("Title and date are mandatory fields");
        return;
    }
    const newTask = {
        title: title,
        description: description,
        date: date
    };
  
    appendTask(newTask);
  
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDate').value = '';
    updateMinDate();
}
function appendTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('taskItem');
    taskElement.innerHTML = `
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Description:</strong> ${task.description || 'N/A'}</p>
        <p><strong>Date:</strong> ${task.date}</p>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('taskList').appendChild(taskElement);
}
function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
   
}