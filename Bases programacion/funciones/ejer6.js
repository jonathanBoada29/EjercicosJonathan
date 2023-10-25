const { validarNumero } = require('../funciones');

let numero = +(prompt("Escriba el numero que desee ser multiplicado en la tabla "));

if (!validarNumero(numero)) throw new Error('Número 1 no es un número')

console.log( "\n La tabla de multiplicar ", numero ," es:\n" );

function procedimiento (numero){

        for ( i = 1 ; i <= 10 ; i++ ){

            console.log( `${numero} x  ${i} = ${i * numero}`);

        }

        return 0
}

procedimiento(numero)

