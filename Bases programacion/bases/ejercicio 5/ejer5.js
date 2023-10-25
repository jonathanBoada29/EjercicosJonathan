var lon1 = parseFloat(prompt("Digite la longitud de la primera base: "));
var lon2 = parseFloat(prompt("Digite la longitud de la segunda base: "));
var h = parseFloat(prompt("Digite la altura del trapecio: "));

var trapecioS = (lon1 + lon2)* h;
var trapecio = trapecioS / 2;

console.log("El valor de la circunferencia es: ", trapecio);