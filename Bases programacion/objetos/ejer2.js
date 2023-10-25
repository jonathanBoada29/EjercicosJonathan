class Contador {

    constructor(cont){
        this.cont = 10
    }
    
    get _cont(){
        return this.cont
    }

    set _cont(nuevo_cont){
        this._cont = nuevo_cont
    }

    incrementar(){
        this._cont++
    }

    decremento(){
        this._cont--
    }
}

let Contador_ = new Contador()

console.log(Contador_._cont)