const { validarNumero } = require('../funciones'); 

var numero = prompt("Escriba un número entero:");

if (!validarNumero(numero)) throw new Error('Número 1 no es un número') 


function enteroABinario(n) {
    if (n == 0) {
      return"";
    }
    
    var resto = n % 2;
    return enteroABinario(Math.floor(n / 2)) + resto;
  }
  
  var resultado = enteroABinario(numero);
  
console.log(resultado);