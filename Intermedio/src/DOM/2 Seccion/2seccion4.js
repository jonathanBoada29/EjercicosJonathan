let contadorCampos = 1; 

document.getElementById('agregarCampo').addEventListener('click', function () {
    contadorCampos++;
    const form = document.getElementById('dynamicForm');
    const newFormGroup = document.createElement('div');
    newFormGroup.classList.add('form-group');
    newFormGroup.id = `campo${contadorCampos}`;
    newFormGroup.innerHTML = `
        <label for="campo${contadorCampos}">Campo ${contadorCampos}:</label>
        <input type="text" id="campo${contadorCampos}" name="campo${contadorCampos}">
        <span class="removeBtn" onclick="removeField(${contadorCampos})">❌</span>
      `;
    form.appendChild(newFormGroup);
});

function removeField(id) {
    const campo = document.getElementById(`campo${id}`);
    campo.parentNode.removeChild(campo);
}

function submitForm() {
    const form = document.getElementById('dynamicForm');
    const formData = new FormData(form);

    for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
}