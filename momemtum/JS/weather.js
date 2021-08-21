const API_KEY ="ba606000c1c365200da4bd9b26f46446";

const option = {
    maximumAge: 3000000,
}

function geoOk(geo){
    const lat = geo.coords.latitude;
    const lon = geo.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        const weather = document.querySelector("#weather span:last-child");
        weather.innerText = `${parseInt(data.main.temp)}°C`+" | "+ `${data.weather[0].main}`;
    });
}

function geoError(){
    alert("당신이 어딨는지 잘 모르겠습니다. 위치를 켰는지 확인하세요");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError, option);