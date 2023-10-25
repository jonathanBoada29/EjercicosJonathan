class Cuenta {

    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
        if (cantidad < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad = cantidad;
        }
    }

    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    getCantidad() {
        return this.cantidad;
    }
    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 0) {
            this.cantidad = 0;
        } else {
            this.cantidad -= cantidad;
        }
    }
    toString() 
    { return "El titular " + titular + " tiene " + cantidad + " euros en la cuenta"; } 

}

let cuenta_1 = new Cuenta("Disco Duro de Roer", 200); 
let cuenta_2 = new Cuenta("Fernando", 300);

cuenta_1.ingresar(300); 
cuenta_2.ingresar(400);

cuenta_1.retirar(500);
cuenta_2.retirar(100);



console.log(cuenta_1.cantidad); 
console.log(cuenta_2.cantidad);