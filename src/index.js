function displayWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;

  let conditionElement = document.querySelector("#temperature-condition");
  conditionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);

  currentTime = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  currentTime.innerHTML = formatDate(date);

  let weatherIcon = document.querySelector("#weather-icon");

  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`;
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

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
  ];

  let formattedDay = days[day];

  return `${formattedDay} ${hours}:${minutes}`;
}

function searchingForCity(city) {
  //make API call and update the UI
  let apiKey = "97ebcf39f3b8605d5a644of06ft2846e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherData);
}

function searchInquiry(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchingForCity(searchInput.value);
}

function displayForecast() {
  
  let days = ['Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  let forecastHtml = ""
  
  days.forEach(function(day) {
    forecastHtml = forecastHtml +
    `<div class="forecast-summary">
    <div class="day-of-week">${day}</div>
    <div class="forecast-icon">☁️</div>
    <div class="forecast-temperatures">
    <strong>
    <div class="high-low-temp">71°</div>
    </strong>
    <div class="high-low-temp">66°</div>
    </div>
    </div>
    `;
  });
  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", searchInquiry);

searchingForCity("Monument");
displayForecast();


