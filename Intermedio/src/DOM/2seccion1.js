function addTask() {
    const NameInput = document.getElementById('taskInputName');
    const MatenInput = document.getElementById('taskInputMate');
    const DateInput = document.getElementById('taskInputFec');
    const taskList = document.getElementById('taskList');

    if (NameInput.value !== '') {
      const name = NameInput.value;
      const mate = MatenInput.value;
      const feDate = DateInput.value;

      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <h3>${name}</h3>
        <p>${mate}</p>
        <p>Fecha límite: ${feDate}</p>
        <button onclick="completeTask(this)">Editar</button>
        <button onclick="deleteTask(this)">Eliminar</button>
      `;
      taskList.appendChild(newTask);

      NameInput.value = '';
      MatenInput.value = '';
      DateInput.value = '';
    }
  }

  function EditarTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
  }

  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }