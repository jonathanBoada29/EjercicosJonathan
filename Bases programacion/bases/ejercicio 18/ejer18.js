let nombre = (prompt("Digita tu nombre: "));
var cedula = Number(prompt("Digita tu cedula: "));
let precio = Number(prompt("Ingresa el precio de la moto"))
let tipo = (prompt("Desea llevar la marca Honda marque 1\nDesea llevar la marca Yamaha marque 2\nDesea llevar la marca susuki marque 3\nDesea llevar otra referencia marque 4"));


if (tipo > 0 && tipo < 5) {
    
    if (tipo == 1) {

        descuento = precio * .05

    } else if (tipo == 2) {

        descuento = precio * .08

    } else if (tipo == 3) {

        descuento = precio * .10

    } else {
        descuento = precio * .02
    }
    console.log("El precio a pagar es de $.", precio - descuento)
    console.log("El descuento es de $.", descuento)


} else {
    console.log("Ingresa un tipo de moto correcto")
}


