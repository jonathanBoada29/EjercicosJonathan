const { validarNumero } = require('../funciones');

var par = prompt("Digita un numero para saber si es par o impar")
if (!validarNumero(par)) throw new Error('Número no es un número')

function SaberPar(par) {

    if (par % 2 === 0) {
        console.log("El numero ", par, " es par")
    } else {
        console.log("El numero ", par, " es impar")

    }

}

SaberPar(par);
