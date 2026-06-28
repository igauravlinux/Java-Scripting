


class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} can eat`);
    }
    sleep(){
        console.log(`${this.name} can sleep`);
    }
}

class Dog extends Animal{

    constructor(name,age,color){
        super(name,age);
        this.color = color;
    }


    bark(){
        console.log(`${this.name} can barks`)
    }
}

let Dog1 = new Dog("Tommy",12,"white");
console.log(Dog1.name);
console.log(Dog1.age);
console.log(Dog1.color);

Dog1.eat();
Dog1.sleep();
Dog1.bark();