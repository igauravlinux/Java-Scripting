


class Vehicle{

    constructor(type){
        this.type = type;
    }

    showtype(){
        console.log(`This is a ${this.type}`);
    }
}

class Bike extends Vehicle{

    constructor(type, brand){
        super(type);
        this.brand = brand;
    }

    showBrand(){
        console.log(`This bike is made by ${this.brand}`);
    }
}

let b1 = new Bike("Two-wheeler","yamaha");
b1.showtype();
b1.showBrand();
