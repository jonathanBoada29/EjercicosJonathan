class Persona {

    constructor(nombre) {
        this._nombre = nombre;
        this._edad;
    }

    get edad(){
        return this.edad
    }

    set edad (edad) {
        this._edad = edad;
        if(edad > 18){
            
            console.log('La persona ', this._nombre, ' es mayor de edad con : ',this._edad)

        }else{
            console.log('La persona  ', this._nombre, ' es menor de edad con: ', this._edad)
        }
        
    }
    
}


let primerPersona = new Persona("Jonathan"); 
primerPersona.edad = 48;

let segundoPersona = new Persona("Fernando");
segundoPersona.edad = 14;
