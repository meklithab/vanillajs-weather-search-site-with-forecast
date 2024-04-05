function changeCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector(".city");
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

let url = https://jsonplaceholder.typicode.com/users/1; 


