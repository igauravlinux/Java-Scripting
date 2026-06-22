

// A function passed as an argument to another function.

function greet(name,callback){
    console.log(`Hello my name is ${name}`);
    callback();
}

function sayBye(){
    console.log("Good Bye");
}

greet("Gaurav",sayBye);