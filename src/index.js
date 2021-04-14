function displayTemperature(response) {
  let temperatureElement = document.querySelector("#currentTemperatureValue");
  let cityElement = document.querySelector("#currentCity");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feelsLike");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind")
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "e8ba6230c4a31fe5709104ac193c78bf";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
console.log(apiUrl);
