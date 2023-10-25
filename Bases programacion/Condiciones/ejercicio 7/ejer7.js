let cal1 = prompt("Digita su primera calificacion")
let cal2 = prompt("Digita su segunda calificacion")
let cal3 = prompt("Digita su tercera calificacion")
let cal4 = prompt("Digita su cuarta calificacion")

suma=Number(cal1)+ Number(cal2)+ Number(cal3)+ Number(cal4);

resultado = suma / 4

console.log("El promedio del estudiante es: ", resultado )


console.log("Calificacion minima", Math.min(cal1,cal2,cal3,cal4))
console.log("Calificacion maxima", Math.max(cal1,cal2,cal3,cal4))