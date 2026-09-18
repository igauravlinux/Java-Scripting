let a = 'kamal'; // global variable
b = a; // kamal

function func(){
    b = 23;
    var a = 'ram';
} 

console.log(typeof b + '-' + a); // string-kamal