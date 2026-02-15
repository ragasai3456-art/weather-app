const button = document.getElementById("searchBtn");
button.addEventListener("click", getWeather);
function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "096c813f404a49c6ee69d89152ee053f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").innerText =
                "Temperature: " + data.main.temp + "°C";

            document.getElementById("condition").innerText =
                "Condition: " + data.weather[0].description;

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + "%";

            document.getElementById("wind").innerText =
                "Wind Speed: " + data.wind.speed + " m/s";
        })
        .catch(error => {
            alert("City not found");
        });
}
