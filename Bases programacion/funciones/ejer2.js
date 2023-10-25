const { validarNumero } = require('../funciones');
let num1 = prompt("Digita un numero para sacar la media aritmetica")
let num2 = prompt("Digita un numero para sacar la media aritmetica")


if (!validarNumero(num1)) throw new Error('Número 1 no es un número')
if (!validarNumero(num2)) throw new Error('Número 2 no es un número')


function MediaAritmetica(num1, num2) {

    let suma = Number(num1) + Number(num2)

    let resultado = suma / 2

    return resultado

}


const resultado = MediaAritmetica(num1, num2)