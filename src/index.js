function displayWeatherData(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city-name");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML =  Math.round(temperature)
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



let searchformElement = document.querySelector("#search-form")
searchformElement.addEventListener("submit", searchInquiry)

searchingForCity("Monument")