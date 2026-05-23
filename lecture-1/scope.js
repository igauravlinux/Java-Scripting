// functional scope >>>>>>>>>>>>

// function show(){
//     let a = 20;
// }
// console.log(a);

// Note :- variable ko kisi function ke andar declare krte hai to us variable ko ham ,us function se bahar accsse nahi kr skte hai








// Global Scope Variable >>>>>>>>>>>>>
// var name = "Gaurav Kumar";

// function myFunk() {
//   if (true) {
//   }
//     console.log(name);

// }

// myFunk();


// Block Scope Varible >>>>>>>>
// Note :- variable ko curly barces ke andar declare kar rhe hai , to usko ham usi curly braces ke andar access kr skte hai , uske bahar nahi


function myFunk(){
    
    if(true){
        let a = 10;
        // console.log(a);   
    }

    let b = 10;
    console.log("sum of a and b is: ",a + b);

}

myFunk();

