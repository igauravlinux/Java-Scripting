

function greet(greeting){
    console.log(greeting + this.name);
}

let user = {name: "Gaurav"};

greet.call(user, "Hello");