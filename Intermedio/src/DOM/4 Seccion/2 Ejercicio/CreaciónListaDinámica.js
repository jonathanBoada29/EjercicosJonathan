function agregarElemento(e) {
    e.preventDefault(); 

    var nuevoElementoTexto = document.getElementById('nuevoElemento').value;

    var nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = nuevoElementoTexto;

    document.getElementById('miLista').appendChild(nuevoElementoLista);

    document.getElementById('nuevoElemento').value = '';
  }

  document.getElementById('formulario').addEventListener('submit', agregarElemento);