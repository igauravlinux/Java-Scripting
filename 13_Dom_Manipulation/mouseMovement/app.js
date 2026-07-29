
//1. ClientX
// Ye batata hai ki browser window ke left edge se cursor kitna door hai.

// document.addEventListener("mousemove", function(event){
//     console.log(event.clientX);
    
// })

// 2. ClientY
// Ye same cheez vertically karta hai.

// document.addEventListener("mousemove", function (event) {
//     console.log(event.clientY);
// });



// 3. screenX

// Ye browser ke hisaab se nahi, poori computer screen ke hisaab se distance batata hai.

// Maan lo tumhara browser screen ke beech me khula hai.

// document.addEventListener("mousemove",move);

// function move(e){
//     console.log(e.screenX);
// }


// 4. screenY

// Ye monitor ke top se distance batata hai.

// document.addEventListener("mousemove",function(e){
//     console.log(e.screenY)
// })


// 6. Sabse important: pageX

// Agar webpage scroll hota hai to clientX aur pageX me farq aata hai.

document.addEventListener("mousemove", function (event) {
    console.log(event.pageX);
});

// note:- pageX poore document ke hisaab se distance batata hai.