let personas = [];
let persona = {
    nombre: '',
    edad: 0
}
do {
    persona.nombre = prompt("Escribe el nombre: ")
    if (persona.nombre !== "*") {
        persona.edad = +prompt("Escribe tu edad: ")
        personas.push({...persona});
    }

} while (persona.nombre !== "*");


console.table(personas);

const personaConMayorEdad = personas.reduce((valorAnterior, valorActual) => {
    let personaMayor = valorAnterior
    if (valorActual.edad > valorAnterior.edad) personaMayor = valorActual;
    return personaMayor;
  });

console.log(personaConMayorEdad);

const edadMAyor = personas.filter((persona) => persona.edad >= 18);

console.log(edadMAyor);