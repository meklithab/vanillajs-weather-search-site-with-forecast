function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;

    //Change Temprature
    let city = searchInputElement.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=35af4obbb291a0548td82efb8ee6a91e&units=metric`;
    axios.get(apiUrl).then(changeTemprature);

    //Change Description
    axios.get(apiUrl).then(changeDescription);

    axios.get(apiUrl).then(changeIcon)



}

function changeTemprature(response) {

    console.log(response.data);

    let temp = document.querySelector(".current-temperature-value");
    let hum = document.querySelector(".humidity-value");
    let win = document.querySelector(".wind-value")

    if (response.data.temperature) {
        temp.innerHTML = `${response.data.temperature.current} <sup style="font-size:30px;">°C</sup>`

        hum.innerHTML = response.data.temperature.humidity + "%";
        win.innerHTML = response.data.wind.speed + "km/h";


    } else {
        temp.innerHTML = "N/A";
        hum.innerHTML = "N/A";
        win.innerHTML = "N/A";

    }

}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);



function changeDescription(response) {
    let desc = document.querySelector(".condition-description");
    desc.innerHTML = response.data.condition.description;
}

function changeIcon(response) {
    let iconUrl = response.data.condition.icon_url;
    let iconElement = document.querySelector(".icon");
    iconElement.setAttribute("src", iconUrl);
}




