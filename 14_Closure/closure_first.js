


// function myFunk() {
//   var name = "Mozilla"; // name is a local variable created by myFunk
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// myFunk();


function show() {
    const info = {
        name: "Gaurav",
        age: 23
    };


    return function inner() {
        console.log(`Name is ${info.name} and Age is ${info.age}`);
    }

    inner();
}

let display =  show(); // show() katam hua

display(); //phir bhi info accessiible hai