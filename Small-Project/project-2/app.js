

const apiKey = "efda4963a453384e5f6a7c6577a4c5e8";
let input = document.getElementById("input-feild");
let search = document.getElementById("search");

let degree = document.getElementById("degree");
let city = document.getElementById("city");
let country = document.getElementById("country");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");


search.addEventListener("click",weather)


function weather(){

    if(input.value.trim() === ""){
        alert("empty");
        return;
    }

    city.innerText = input.value;
    console.log(city)

   

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;


fetch(apiUrl)
.then(response =>{
    return response.json();
})
.then(data =>{
    console.log(data);  
    degree.innerText = Math.round(data.main.temp) + "°C";
    city.innerText = data.name;
    country.innerText = data.sys.country;
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km"
})



}

//    Api url =  


// Api key = efda4963a453384e5f6a7c6577a4c5e8