const API_KEY = 'b78063f624a888902a6d466b4fc09bc2';  
const WEATHER_STORAGE_KEY = 'weatherData';
const LAST_FETCH_KEY = 'lastFetchTime';
const CACHE_DURATION = 2 * 60 * 60 * 1000; 
const weatherForm = document.getElementById('weatherForm');
const weatherContainer = document.getElementById('weatherContainer');
async function fetchWeather(city) {
    const encodedCity = encodeURIComponent(city.trim()); 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric&lang=uk`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Місто не знайдено! Перевірте назву або спробуйте англійською.');
    }
    const data = await response.json();
    return data;
}
function saveWeatherToLocalStorage(city, data) {
    const weatherData = {
        city,
        data,
        timestamp: Date.now(),
    };
    localStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(weatherData));
    localStorage.setItem(LAST_FETCH_KEY, Date.now());
}
function loadWeatherFromLocalStorage() {
    const weatherData = localStorage.getItem(WEATHER_STORAGE_KEY);
    if (!weatherData) return null;
    return JSON.parse(weatherData);
}
function isCacheValid() {
    const lastFetchTime = localStorage.getItem(LAST_FETCH_KEY);
    if (!lastFetchTime) return false;
    const elapsed = Date.now() - lastFetchTime;
    return elapsed < CACHE_DURATION;
}

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherContainer.innerHTML = `
        <h2>Погода в ${name}</h2>
        <p><strong>Температура:</strong> ${main.temp}°C</p>
        <p><strong>Вологість:</strong> ${main.humidity}%</p>
        <p><strong>Опис:</strong> ${weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
    `;
}

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();

    try {
        if (isCacheValid()) {
            const cachedData = loadWeatherFromLocalStorage();
            if (cachedData && cachedData.city.toLowerCase() === city.toLowerCase()) {
                displayWeather(cachedData.data);
                return;
            }
        }

        const weatherData = await fetchWeather(city);
        saveWeatherToLocalStorage(city, weatherData);
        displayWeather(weatherData);
    } catch (error) {
        weatherContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});

const cachedData = loadWeatherFromLocalStorage();
if (cachedData && isCacheValid()) {
    displayWeather(cachedData.data);
}