function agregarNuevoParrafo() {
    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Este es un nuevo párrafo agregado dinámicamente.';

    let contenedor = document.getElementById('contenedor');

    contenedor.appendChild(nuevoParrafo);
  }

  document.getElementById('agregarParrafoBtn').addEventListener('click', agregarNuevoParrafo);

  function eliminarParrafoExistente() {
    let parrafoExistente = document.getElementById('parrafoExistente');

    if (parrafoExistente) {
      parrafoExistente.remove();
    }
  }

  setTimeout(eliminarParrafoExistente, 2000);