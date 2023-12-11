const opciones = document.querySelectorAll('input[type="radio"]');
const resultadosElement = document.getElementById('resultados');

const votos = {
    rojo: 0,
    azul: 0,
    verde: 0
};

function manejarSeleccion(e) {
    const opcionSeleccionada = e.target.value;

    votos[opcionSeleccionada]++;

    resultadosElement.textContent = `Rojo: ${votos.rojo}, Azul: ${votos.azul}, Verde: ${votos.verde}`;
}

opciones.forEach(opcion => {
    opcion.addEventListener('change', manejarSeleccion);
});