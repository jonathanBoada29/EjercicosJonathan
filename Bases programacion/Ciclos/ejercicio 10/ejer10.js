var i = 1
var Xaño = 0

while(i <= 12){

    var ahorro = prompt("Digita La cantidad de dinero que ahorras por mes: ")
    Xaño=Number(Xaño)+Number(ahorro);
    console.log("El ahorro acumulado hasta el mes de ",i,"es de $",Xaño)
    i++
}
console.log("El ahorro total de 2 años es: ", Xaño)




