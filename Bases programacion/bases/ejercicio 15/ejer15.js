var numero = Number(prompt("Digite un numero"));

if(numero>1){
   var numeroR = Math.sqrt(numero);
    console.log("El resultado de la raiz cuadrada es: ", numeroR)

}else if (numero<1){
    console.log("Tiene raíz imaginaria")

}