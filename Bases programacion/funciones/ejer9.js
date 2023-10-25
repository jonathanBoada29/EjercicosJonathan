const { validarNumero } = require('../funciones');

let numero = Number(prompt("Escriba el numero que deses : "))

if (!validarNumero(numero)) throw new Error('Número 1 no es un número')

function fibonacci(numero){
    const fib =[0,1]

    for(let i = 2; i <= numero; i++){

        fib[i] = fib[i - 2] + fib[i - 1]

    }

    return fib[numero]
}
fibonacci(numero)

console.log(fibonacci(numero))