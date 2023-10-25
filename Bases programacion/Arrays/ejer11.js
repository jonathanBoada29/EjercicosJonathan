let tam, n
let array = []
let resp

    tam = +prompt('Indique el tamaño del arreglo: ')

    n = +prompt('Ingrese un número (múltiplos del número rellenan el arreglo): ')

    console.log("Múltiplos de ", n, ": ")

for (x = 1; x < tam; x++) {

    array = x * n

    console.log(array, " ")

}