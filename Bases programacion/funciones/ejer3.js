const { validarNumero } = require('../funciones');
let num1 = prompt("Digite primer numero para la operacion : ")
let num2 = prompt("Digite segundo numero para la operacion : ")

let tipo = +(prompt("Desea hacer una suma marque 1\nDesea hacer una resta marque 2\nDesea hacer una multiplicacion marque 3\nDesea hacer una divicion marque 4"));

if (!validarNumero(num1)) throw new Error('Número 1 no es un número')
if (!validarNumero(num2)) throw new Error('Número 2 no es un número')

function operacion(num1, num2, tipo) {

    let resultado
    if (tipo > 0 && tipo < 5) { 

        if (tipo == 1) {

            resultado = Number(num1) + Number(num2)

        } else if (tipo == 2) {

            resultado = num1 - num2

        } else if (tipo == 3) {

            resultado = num1 * num2

        } else {

            resultado = num1 / num2

        }

    } else {
        console.log("Ingresa un tipo de moto correcto")
    }
    return resultado
}

const resultado = operacion(num1, num2, tipo)

console.log(resultado)