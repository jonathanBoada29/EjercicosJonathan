var gasto1 = 1.2;
var gasto2 = 1.0;
var gasto3 = 0.9;
var tarifa = parseFloat(prompt("Digite el gasto de la luz de este mes: "));

if (tarifa <= 1000){
    console.log("La tarifa de la luz es de: " ,gasto1)

}else if (tarifa >= 1001 && tarifa<=1850){
    console.log("La tarifa de la luz es de: " ,gasto2)

}else if(tarifa >= 1851){
    console.log("La tarifa de la luz es de: " ,gasto3)

}
