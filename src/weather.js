const weather = document.querySelector(".js-weather")
const API_KEY ="e4ac5fb395cda6c84d7cd86d082561cc"; 
const AREA = "area";

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}°C / ${place}`
    })

}

function saveArea(coordsObj){
    localStorage.setItem(AREA, JSON.stringify(coordsObj))
   }

function successHandler(position){
    const latitude = position.coords.latitude;
    
    const longitude =position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }
    saveArea(coordsObj);
    getWeather(latitude, longitude);
}

function errorHandler(){
    console.log("fuck")
}

function askArea(){
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}

function loadArea(){
    const loadedArea = localStorage.getItem(AREA);
    if(loadedArea === null){
        askArea();
    } else {
        const paresArea = JSON.parse(loadedArea);
        getWeather(paresArea.latitude, paresArea.longitude);
    }
}


function init(){
    loadArea();
}

init();