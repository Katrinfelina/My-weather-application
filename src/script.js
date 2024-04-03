function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let formattedCity =
    cityInput.value.charAt(0).toUpperCase() +
    cityInput.value.slice(1).toLowerCase();
  getWeather(formattedCity);
}

function getWeather(city) {
  let apiKey = "8d334a66tf350346425d1bf477off27e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let city = response.data.city;
  let description = response.data.condition.description;

  let currentCityElement = document.querySelector("#current-city");
  let currentConditionElement = document.querySelector(
    "#current-weather-condition"
  );
  let currentHumidityElement = document.querySelector("#current-humidity");
  let currentWindElement = document.querySelector("#current-wind");
  let weatherIconElement = document.querySelector("#current-temperature-icon");
  let currentTemperatureElement = document.querySelector(
    "#current-temperature-degrees"
  );

  currentCityElement.innerHTML = city;
  currentTemperatureElement.innerHTML = temperature;
  currentConditionElement.innerHTML = description;
  currentHumidityElement.innerHTML = humidity;
  currentWindElement.innerHTML = wind;
}

let enterCityForm = document.querySelector("#enter-city");
enterCityForm.addEventListener("submit", searchCity);

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatDate(new Date());
