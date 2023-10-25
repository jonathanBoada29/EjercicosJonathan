let arrayMedia = []
let media = 0

for (let i = 0; i < 10; i++){
    arrayMedia[i] = prompt("Escriba los números para calcular la media aritmética: ")

}

const suma = arrayMedia.reduce((valorAnterior, valorActual) => {
    return Number(valorAnterior) + Number(valorActual);
  }, 0);

  media = suma / arrayMedia.length
  
  console.log(media);

