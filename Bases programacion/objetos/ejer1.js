class Cuenta {

    constructor(saldo = 0) {
        this.saldo1 = saldo;

    }

    get saldo (){
        return this.saldo1

    }
    
    ingreso(cantidad) { 
        this.saldo1 = cantidad + this.saldo1;
    }
    reintegro(cantidad){
        this.saldo1 = cantidad - this.saldo1;

    }
    trasferencia(cantidad, cntDestino){
        this.trasferencia = cantidad
        this.ingreso = cantidad - this.saldo1
        cntDestino.ingreso(cantidad)
        
    }

    set saldo (cantidad){
        this.saldo1 = cantidad

    }

}

let usuario2 = new Cuenta(10)
let usuario = new Cuenta(100) 
console.log(usuario.saldo)
console.log(usuario)
usuario.trasferencia(90, usuario2)
console.log(usuario2)

