let array = []

for(let i = 0; i < 5; i++){
    array[i] = prompt("Escribir los números enteros")

}

let mayor = array[0]
let menor = array[0]

for(let i = 0; i < 5; i++){

    if(array[i]>mayor){

        mayor = array[i]
       
    }
}
for(let i = 0; i < 5; i++){

    if(array[i]<menor){

        menor = array[i]

    }
}

const suma = array.reduce((valorAnterior, valorActual) => {
    return Number(valorAnterior) + Number(valorActual);
  }, 0);

  media = suma / array.length


console.log("El numero mayor es ", mayor)
console.log("El numero menor es ", menor)
console.log("La media de los números es ", media)
