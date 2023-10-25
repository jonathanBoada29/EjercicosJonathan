class Alumno {

    constructor(nombre) {
        this._nombre = nombre;
        this._nota;
    }

    get Nota(){
        return this.nota
    }

    set Nota (not) {
        this._nota = not;
        if(not > 5){
            
            console.log('El alumno ', this._nombre, ' ha aprobado la materia con : ',this._nota)

        }else{
            console.log('El alumno ', this._nombre, ' ha reprobado la materia: ', this._nota)
        }
        
    }
    
}


let primerAlumno = new Alumno("Jonathan"); 
primerAlumno.Nota=8;

let segundoAlumno = new Alumno("Fernando");
segundoAlumno.Nota=4;


console.log(primerAlumno._nota);
console.log(segundoAlumno._nota);