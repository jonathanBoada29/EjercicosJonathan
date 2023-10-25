const { validarNumero } = require('../funciones');

var numero = prompt("Escribe un numero entero: ");

if (!validarNumero(numero)) throw new Error('Número 1 no es un número')

function invertirNumero(num) {
   
    if (num < 10) {
 
      return num;
    }
    
    var ultimoDígito = num % 10;
 
    var restoDígitos = Math.floor(num / 10);
 
    return (ultimoDígito * Math.pow(10, Math.floor(Math.log10(restoDígitos) + 1))) + invertirNumero(restoDígitos);
  }
 
  var numeroInvertido = invertirNumero(numero);
  console.log(numeroInvertido);
