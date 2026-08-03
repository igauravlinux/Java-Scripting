
// Example 1: function as Argument

function greet(name){
    return "Hello ," + name;
}

function process(callback){
    console.log(callback("Gaurav"));
}

process(greet);