const { validarNumero } = require('../funciones');

let a = Number(prompt("Escriba el numero que deses : "))
let b = Number(prompt("Escriba el numero que deses : "))
let c = Number(prompt("Escriba el numero que deses : "))

if (!validarNumero(a)) throw new Error('Número 1 no es un número')
if (!validarNumero(b)) throw new Error('Número 2 no es un número')
if (!validarNumero(c)) throw new Error('Número 3 no es un número')


function ordenar(a, b, c) {
    if (a > b) {
        if (a > c) {
            if (b > c) {
                console.log("Los valores ordenados de mayor a menor son: \n\n", a, b, c);
            }
            else {
                console.log("Los valores ordenados de mayor a menor son: \n\n", a, c, b);
            }
        } else {
            console.log("Los valores ordenados de mayor a menor son: \n\n", c, a, b);
        }
    } else {

        if (a > c) {
            console.log("Los valores ordenados de mayor a menor son: \n\n", b, a, c);
        } else {

            if (c > b) {
                console.log("Los valores ordenados de mayor a menor son: \n\n", c, b, a);
            } else {
                console.log("Los valores ordenados de mayor a menor son: \n\n", b, c, a);
            }
        }

    }

    return 0
}

ordenar(a,b,c)

