let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("darkMode");

let theme = localStorage.getItem("theme");

if(theme === "dark"){
    body.classList.add("dark");
}

btn.addEventListener("click",darkMode);

function darkMode(){

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light");
    }



}