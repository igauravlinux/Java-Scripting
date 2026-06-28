

class Student{

    constructor(name,age){
        this.name = name; // properties
        this.age = age;
    }

    display(){
        console.log(`Student name is ${this.name} and age is ${this.age}`);
    }
}

let Gaurav = new Student("Gaurav Kumar",23);
let Soni = new Student("Soni Sharma",21);
let Divya = new Student("Divya Shrivastava",22);

Soni.display();
Gaurav.display();