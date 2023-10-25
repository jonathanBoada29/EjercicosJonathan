
class Calculadora {
    constructor(num1, num2) {
        this._num1 = num1
        this._num2 = num2
    }


    suma(_num1 , _num2) {
        let sumatoria = Number(this._num1) + Number(this._num2)
        console.log(sumatoria)
    }

    resta(_num1 , _num2) {
        let restar = this._num1 - this._num2
        console.log(restar)
    }

    multiplicación(_num1 , _num2) {
        let multiplicar = this._num1 * this._num2
        console.log(multiplicar)
    }


    division(_num1 , _num2) {
        let dividir = this._num1 / this._num2
        console.log(dividir)
    }

}


const nuevo = new Calculadora(5 ,5)

nuevo.suma()
nuevo.resta()
nuevo.multiplicación()
nuevo.division()
