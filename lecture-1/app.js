let name = document.querySelector("h1");
let btn = document.querySelector("button");

name.addEventListener("mouseover",()=>{
    name.style.color = 'orange';
    name.style.backgroundColor = 'darkblue';
})

btn.addEventListener("click",()=>{
    btn.style.color = 'orange';
    btn.style.backgroundColor = 'darkblue';
})
