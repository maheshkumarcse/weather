async function getWeather() {
    const apiKey = '30d4741c779ba94c470ca1f63045390a';
    const city = document.getElementById('cityInput').value;
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const completeUrl = `${baseUrl}q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(completeUrl);
        if (response.status === 200) {
            const data = await response.json();
            const main = data.main;
            const weather = data.weather[0];
            const wind = data.wind;

            document.getElementById('weatherData').innerHTML = `
                <h2>City: ${city}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Weather: ${weather.description}</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            `;
        } else {
            document.getElementById('weatherData').innerHTML = '<p>City not found or API request failed.</p>';
        }
    } catch (error) {
        document.getElementById('weatherData').innerHTML = '<p>Error fetching weather data.</p>';
    }
}
