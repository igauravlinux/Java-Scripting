
const apiKey = "efda4963a453384e5f6a7c6577a4c5e8";
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search");
const city = document.querySelector(".city")
const country = document.querySelector(".country")
const image = document.querySelector(".weather-image");
const temp = document.querySelector(".temp");
const weatherName = document.querySelector(".weather-name");
const value = document.getElementById("temp-value");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const humidityUnit = document.getElementById("humidity-unit");
const windUnit = document.getElementById("wind-unit");


searchBtn.addEventListener("click",checkWeather);

searchBar.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        searchBtn.click();
    }
});


function checkWeather(){
    if(searchBar.value.trim() === ""){
        alert("empty");
        return;
    }


    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=metric`;


    // fetching api
    fetch(apiUrl)
    // converting response to Json
    .then(response =>{
        return response.json();
    })

    // Log Data
    .then(data =>{
        console.log(data.weather[0]);
        city.innerText = data.name + ",";
        country.innerText = data.sys.country
        temp.innerText = Math.floor(data.main.temp) + "°";
        // value.innerText = "%";
        wind.innerText = data.wind.speed;
        humidity.innerText = data.main.humidity;
        humidityUnit.innerText = "%";
        windUnit.innerText = "km";

        let weather = data.weather[0].main;

        if(weather === "Clouds"){
            image.src = "./weather_icons/Icon=PartlyCloudy.png"
        }else if(weather === "Rain"){
            image.src = "./weather_icons/Icon=Rainy.png"
        }else if(weather === "Snow"){
            image.src = "./weather_icons/Icon=Snow.png"
        }else if(weather === "Thunderstorm"){
            image.src = "./weather_icons/Icon=Thunderstorm.png"
        }


    })

    // Handle Errors
    // .catch(error =>{
    //     alert("Error occured");
    // })




}