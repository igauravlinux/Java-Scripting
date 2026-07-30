// API Me JSON

// Suppose tumhare Spring Boot backend se response aaya

// response
// {
//     "id":1,
//     "name":"Titan Watch",
//     "price":2500
// }

fetch("api/products")
.then(response => response.json())
.then(data =>{
    console.log(data);
})