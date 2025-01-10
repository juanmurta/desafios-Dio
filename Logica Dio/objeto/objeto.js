class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log("Um delicioso bolo de " + this.saborDaMassa, "com " + this.saborRecheio)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
console.log(boloFesta)
console.log(boloFesta.saborRecheio)
boloPremium.escrever()
boloPremium.assar()