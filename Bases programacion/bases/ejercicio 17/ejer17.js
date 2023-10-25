let nombre = (prompt("Digita tu nombre: "));
let edad = (prompt("Digita tu edad: "));
let sexo = (prompt("Digita tu sexo: "));

if(edad>18 && sexo == 'masculino'){

    console.log(nombre," tienes ", edad , "y eres de sexo", sexo, "puedes entrar al establecimiento")
    
}else {
    console.log("Eres mujer o menor de edad, no tienes autorizado entrar al establecimiento")

}

