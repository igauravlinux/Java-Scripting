

class Car{

    constructor(company,model,price){
        this.company = company;
        this.model = model;
        this.price = price;
    }

    details(){
        console.log(`Company : ${this.company}`);
        console.log(`Model : ${this.model}`);
        console.log(`Price : ${this.price}`);
    }
}

let c1 = new Car("Porsche","X5",900000);

c1.details();