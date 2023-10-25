var matriz = [];
for (var i = 0; i < 5; i++) {
  matriz[i] = [];
  for (var j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}
function sumarFila(matriz, fila) {
  var suma = 0;
  for (var i = 0; i < matriz[fila].length; i++) {
    suma += matriz[fila][i];
  }
  return suma;
}
function sumarColumna(matriz, columna) {
  var suma = 0;
  for (var i = 0; i < matriz.length; i++) {
    suma += matriz[i][columna];
  }
  return suma;
}
console.log("Matriz:");
for (var i = 0; i < 5; i++) {
  console.table(matriz[i].join("\t"));
}

