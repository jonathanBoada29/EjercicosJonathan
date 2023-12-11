function agregarFila() {
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = `<input type="text" placeholder="Nombre">`;
    cell2.innerHTML = `<input type="text" placeholder="Edad">`;
    cell3.innerHTML = `<button onclick="eliminarFila(this)" class="btn">Eliminar</button>`;
  }

  function eliminarFila(btn) { 
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }