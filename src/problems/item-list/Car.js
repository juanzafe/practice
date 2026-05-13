class Car{
    constructor(brand, speed){
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
