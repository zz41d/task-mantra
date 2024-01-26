const dateInp = document.getElementById("taskDate");

dateInp.addEventListener("input", () => {
    const dateValue = dateInp.value;
    const selectedDate = new Date(dateValue);
    const dayOfWeek = selectedDate.getDay();

    document.querySelectorAll('#days li').forEach(item => {
        item.style.backgroundColor = 'white';
    });

    const daysList = document.getElementById('days');
    daysList.children[dayOfWeek].style.backgroundColor = 'grey';
});



function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const date = document.getElementById('taskDate').value;
    const day = new Date(date).getDay();

    if (!title || !date) {
        alert("Title and date are mandatory fields");
        return;
    }
    const newTask = {
        title: title,
        description: description,
        date: date,
        day: day
    };

    appendTask(newTask);

    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDate').value = '';
    // document.getElementById('tagList').value ='';

    document.querySelectorAll('#days li').forEach(item => {
        item.style.backgroundColor = 'white'
    })
    // updateMinDate();

}
function appendTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('taskItem');
    let taskCount = ++(document.getElementById('taskList').children.length)
    taskElement.innerHTML = `
        <p><strong>Task :</strong>${taskCount}</p>
        <p><strong>Title:</strong> ${task.title}</p>
        <p><strong>Description:</strong> ${task.description || 'N/A'}</p>
        <p><strong>Date:</strong> ${task.date}</p>

        <button onclick="deleteTask(this)" class='delete-btn'>Delete</button>
        
    `;
    document.getElementById('taskList').appendChild(taskElement);
}
function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();

}
