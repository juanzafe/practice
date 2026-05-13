class Car{
    constructor(brand){
        this.brand=brand;
        this.speed=0;

    }
    gas(quantity){
        this.speed= this.speed+quantity;
    }

    break(quantity){
        this.speed= this.speed-quantity;
    }

    showSpeed(){
        console.log (`${this.speed} va el ${this.brand}`)
    }
}

class Moto extends Car{

    constructor(brand, tipo){
        super(brand);
        this.tipo=tipo;
    }
    gas(quantity){
        super.gas(quantity);
        console.log("Broom")
    }
    wheelie(){
        console.log(`${this.brand} does wheelies`)
    }
}

let moto= new Moto("Honda", "sport");
moto.wheelie()
