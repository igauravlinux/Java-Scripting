
class Animal{

    makeSound(){
        console.log("Animal makes sound");
    }

}

class Dog extends Animal{
    makeSound(){
        console.log("Dog barks");
    }
}

let d = new Dog();
d.makeSound();