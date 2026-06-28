

const product = {
    name: "Laptop",
    brand: "Dell",
    // price: 222
}


// Using (in) Operator
// if("price" in product){
//     console.log(product.price);
// }else{
//     console.log("Price not available");
// }


// Using hasOwnProperty()
if(product.hasOwnProperty("price")){
    console.log(product.price);
}else{
    console.log("Price not available");
}