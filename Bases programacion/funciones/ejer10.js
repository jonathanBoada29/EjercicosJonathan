const { validarNumero } = require('../funciones');

let numero = Number(prompt("Escriba el numero que deseas hacer el decremento: "))

if (!validarNumero(numero)) throw new Error('Número 1 no es un número')

function imprimirNúmeros(n) {
    if (n == 1) {
      console.log(n);
      return;
    }
    
    console.log(n);
    imprimirNúmeros(n - 1);
  }
  
  imprimirNúmeros(numero)