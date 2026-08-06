
// Set Item
localStorage.setItem("username","Gaurav Kumar");
localStorage.setItem("age","23");
localStorage.setItem("city","Patna");
localStorage.setItem("phoneNum","88234562533");

// Get Item
// username
let userName = localStorage.getItem("username");
console.log(userName);
// city
let city = localStorage.getItem("city");
console.log(city);
// age
let age = localStorage.getItem("age");
console.log(typeof age); //String

console.log(age);


// Remove One Item
localStorage.removeItem("phoneNum");
localStorage.removeItem("city");

// clear All
localStorage.clear();



// how 