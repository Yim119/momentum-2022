const API_KEY = "156d3f153fa5320c4e491c4047203f70";

function onGeoSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-widget__city");
      const weather = document.querySelector(".weather-widget__weather");
      const temp = document.querySelector(".weather-widget__temp");
      city.innerText = data.name;
      weather.innerText = ` ${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("I can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
