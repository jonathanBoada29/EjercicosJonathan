let peli1 = prompt("Digita el precio de la 1 pelicula")
let peli2 = prompt("Digita el precio de la 2 pelicula")
let peli3 = prompt("Digita el precio de la 3 pelicula")

if(peli1>peli2 && peli1>peli3){

    suma=Number(peli2)+Number(peli3);

    console.log("El precio de las 3 peliculas es de ", suma)

}else if(peli2>peli1 && peli2>peli3){

    suma=Number(peli1)+Number(peli3);

    console.log("El precio de las 3 peliculas es de ", suma)

}else if(peli3>peli1 && peli3>peli2){

    suma=Number(peli1)+Number(peli2);

    console.log("El precio de las 3 peliculas es de ", suma)

}
