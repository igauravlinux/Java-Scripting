
const user ={
    name: "Gaurav"
};

function greet(){
    console.log("Hello" + this.name);
}

const newFunction = greet.bind(user);

newFunction();

