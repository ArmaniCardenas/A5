document.addEventListener("DOMContentLoaded", function () {
    const switches = document.querySelectorAll(".switch input");

    switches.forEach((toggle) => {
        const toggleId = toggle.id;
        const savedLocally = localStorage.getItem(toggleId)

        if (savedLocally === "on") {
            toggle.checked = true;
        }

        else 
        {
            toggle.checked = false;
        }



        toggle.addEventListener("change", function () {
            const newState = toggle.checked ? "on" : "off";
            localStorage.setItem(toggleId, newState)


        })


    })

})


const input = document.querySelector("#input");
const city = document.querySelector("#city");
const city_Name = document.querySelector("#cityName");
const temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const img = document.querySelector("#image");


input.onsubmit = (e) => {
    e.preventDefault();
    weatherUpdate(city.value);
    city.value = "";
};

weatherUpdate = (city) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78d47e8abbb7da1d2fb25cc92917c4ed`);

    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 404) {
            alert("Not found")
        }
        
        else {
            var data = JSON.parse(xhr.response);
            city_Name.innerHTML = data.name;
            temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            main.innerHTML = data.weather[0].main;
            description.innerHTML = data.weather[0].description;
            img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        }
    };
};


weatherUpdate("irvine");
