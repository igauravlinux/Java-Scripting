

// Create a Person class and extend it into Teacher.

class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    intro(){
        console.log(`My name is ${this.name} and I am ${this.age} year old.`);
    }

}

class Teacher extends Person{

    constructor(name,age,salary,subject){
        super(name,age);
        this.salary = salary;
        this.subject = subject;
    }

    teach(){
        console.log(`${this.name} teaches ${this.subject}`);
    }

}

let t1 = new Teacher("Soni Sharma",21,10000,"Java");
t1.intro();
t1.teach();

