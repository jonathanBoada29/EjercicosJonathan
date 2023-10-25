const { validarNumero } = require('../funciones');
let temperatura = +(prompt("Escriba una temperatura en grados Celsius para hacer la conversion "));

let tipo = +(prompt("En que temperatura deseas hacer la conversión \nMarque 1 Fahrenheit  \nMarque 2 Kelvin "));

if (!validarNumero(temperatura)) throw new Error('Número 1 no es un número')
if (!validarNumero(tipo)) throw new Error('Número 2 no es un número')

function grados (temperatura, tipo){

    if (tipo > 0 && tipo < 5) { 

        if (tipo == 1) {
    
            let F = (9*temperatura)/5 + 32
    
            console.log("La conversión de temperatura a Fahrenheit", F)
    
        } else if (tipo == 2) {
    
            let K = temperatura + 273.15;
    
            console.log("La conversión de temperatura a Kelvin", K)
        }
    } else {
        console.log("Ingresa las opciones correctas")
    }

}
grados(temperatura, tipo)

