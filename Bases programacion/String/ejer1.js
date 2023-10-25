let nombre 
let apellido

nombre = prompt("Escriba sus nombres: ")
apellido = prompt("Escriba sus apellidos: ")

let nombreCompleto = nombre.concat(" ", apellido);

for(let i = 0;i < 3; i++){
    console.log(nombreCompleto)
}
let minúsculas = nombreCompleto.toLowerCase();

console.log(minúsculas)

let mayúsculas = nombreCompleto.toUpperCase();

console.log(mayúsculas)

let mayúscula = nombre[0].toUpperCase() + nombre.substring(1) +" "+ apellido[0].toUpperCase() + apellido.substring(1)

console.log(mayúscula)
