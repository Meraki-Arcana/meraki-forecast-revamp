function searchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city-name");
    cityElement.innerHTML = searchInput.value;
    //call the API
}



let searchformElement = document.querySelector("#search-form")
searchformElement.addEventListener("submit", searchForm)