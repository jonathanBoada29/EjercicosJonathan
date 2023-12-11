function addTask() {

    const DateInput = document.getElementById('taskInputFec');
    const taskList = document.getElementById('taskList');

    if (DateInput.value !== '') {

        const feDate = DateInput.value;

        const newTask = document.createElement('li');
        newTask.innerHTML = `
        <p>Fecha límite: ${feDate}</p>
        <button onclick="completeTask(this)">Completada</button>
        <button onclick="deleteTask(this)">Eliminar</button>
      `;
        taskList.appendChild(newTask);

        DateInput.value = '';
    }
}

function completedTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}