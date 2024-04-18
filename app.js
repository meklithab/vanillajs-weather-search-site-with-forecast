
let cityInput = document.querySelector(".city");

function changeCity(event) {
    event.preventDefault();
    let newCity = document.querySelector(".city-name");
    newCity.innerHTML = cityInput.value;
    changeTime()
}

let c1 = document.querySelector("form");
c1.addEventListener('submit', changeCity)

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let today = new Date();
let date = days[today.getDay()];
let hour = today.getHours();
let minute = today.getMinutes();

function changeTime() {
    let d = document.querySelector(".day-of-week")
    d.innerHTML = date;
    let h = document.querySelector(".hour-of-day")
    h.innerHTML = hour;
    let m = document.querySelector(".minute-of-hour")
    m.innerHTML = minute;



}


let cityValue = cityInput.value
let url = "https://api.shecodes.io/weather/v1/current?query=cityValue&key=35af4obbb291a0548td82efb8ee6a91e"

axios.get(url).then(changeWeather)


function changeWeather() {
    
  
}






