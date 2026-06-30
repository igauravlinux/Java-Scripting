

class Animal{

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} can eat`)
    }
    run(){
        console.log(`${this.name} can run`)
    }

}

class Cat extends Animal{

    constructor(name,color){
        super(name);
        this.color = color;
    }

    sound(){
        super.eat();
        super.run();

        console.log(`${this.name} can speak`);

    }

}

let c1 = new Cat("Whitey","brown");
c1.sound();
