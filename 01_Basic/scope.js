// {1} functional scope >>>>>>>>>>>>

// function show(){
//     let name = "Soni Sharma";


//     if(true){     
//         console.log(`Her name is ${name}`);
//     }


// }
// show();
// console.log(name); //Error



// Note :- variable ko kisi function ke andar declare krte hai to us variable ko ham function ke andar kahin v access kr skte hai ,
// lekin us function ke bahar accsse nahi kr skte hai, aisa krna par(ReferenceError) aata hai



// -------------------------------------------------------------------------------------------------


// {2}  Global Scope Variable >>>>>>>>>>>>>


// let name = "Soni Sharma";
// let age = 20;

// function show(){

//     console.log(`Name is ${name} and age is ${age}!!!`); // function ke andar

// }

// show();
// console.log(`Name is ${name} and age is ${age} !!!`); // function ke bahar 

// Note :- Global variable har block function ke bahar declare hota hai , aur isko kisi v block ya function me , ya pure program me kahin v use kr ste hai


// -------------------------------------------------------------------------------------------------



// {3} Block Scope Varible >>>>>>>>

// Note :- let aur const variable ko kisi v curly braces yani ki block ke andar declare kar rhe hai , to usko ham usi curly braces ke andar access kr skte hai , uske bahar nahi


// function show(){

    
//     if(true){
//         let name = "Soni Sharma";
//         console.log(`Her name is ${name}`);  
//     }
    
//     console.log(`Her name is ${name}`); //Error 
    

// }
// show();




// {4} Lexical Scope >>>>>>>>>>>>>>
// Note :- Inner function apne parent function ke variables ko access kar sakta hai.


// function outer(){  //Outer Function

//     let name = "        Soni Sharma  ";

//     function inner(){   // Inner Function

//         console.log(name.trimEnd());

//     }

//     inner();

// }

// outer();




// second example -------

// function outer(){

//     let name = "Gaurav Kumar";
//     let age = 23;

//     function inner(){
//         console.log(`My name is ${name} and age is ${age}`);
//     }
//     inner();

// }

// outer();