let weather = {
    apiKey: "989497e253921c6dee9800308046ea88",
    fetchWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like, pressure } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels").innerText = "Feels like " + feels_like + "°C";
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".hum").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".pres").innerHTML = "Pressure: " + pressure + "MB";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " Km/h";
        document.querySelector(".count").innerHTML = "Country: " + country;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".searchme").addEventListener('click', function() {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(Event) {
    if (Event.key == "Enter") {
        weather.search();
    }
})
weather.fetchWeather("Hong Kong")