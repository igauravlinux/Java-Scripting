
const user ={
    name : "Gaurav"
};

function greet(greeting , emoji){
    console.log(greeting + " "+ this.name+ " "+emoji);
}

greet.apply(user,["Hi","💀"]);