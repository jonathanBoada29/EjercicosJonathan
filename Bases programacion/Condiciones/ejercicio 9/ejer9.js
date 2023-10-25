let num1 = Number(prompt("Digita un numero"))
let num2 = Number(prompt("Digita otro numero"))
let num3 = Number(prompt("Digita otro numero"))


let mayor = Math.max(num1,num2,num3)
let menor = Math.min(num1,num2,num3)

let resultado = num1 + num2 + num3

let medio = resultado - (mayor + menor)

console.log("El estudiante 1 es mayor ", mayor)
console.log("El estudiante 2 es el del medio ", medio)
console.log("El estudiante 3 es el menor ", menor)



