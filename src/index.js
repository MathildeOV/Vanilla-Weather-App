function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10){
      hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemperatureValue");
  let cityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feelsLike");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let todaysDateElement = document.querySelector("#todaysDate");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  todaysDateElement.innerHTML = formatDate(response.data.dt*1000);
}

let apiKey = "e8ba6230c4a31fe5709104ac193c78bf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
console.log(apiUrl);
