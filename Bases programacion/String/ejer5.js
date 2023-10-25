const frase = prompt("Por favor, introduce una frase:");
const letra = prompt("Introduce una letra: ")
let union
let mayúscula


function invertirFrase(frase, letra) {
 
     mayúscula = letra.toUpperCase();

     union = frase.concat(mayúscula);
    return union
  }
  invertirFrase(frase, letra)

  console.log("Frase y letra en mayúscula e introducida:", union);