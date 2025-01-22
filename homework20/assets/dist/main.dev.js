"use strict";

var API_KEY = 'b78063f624a888902a6d466b4fc09bc2';
var WEATHER_STORAGE_KEY = 'weatherData';
var LAST_FETCH_KEY = 'lastFetchTime';
var CACHE_DURATION = 2 * 60 * 60 * 1000;
var weatherForm = document.getElementById('weatherForm');
var weatherContainer = document.getElementById('weatherContainer');

function fetchWeather(city) {
  var encodedCity, url, response, data;
  return regeneratorRuntime.async(function fetchWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          encodedCity = encodeURIComponent(city.trim());
          url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(encodedCity, "&appid=").concat(API_KEY, "&units=metric&lang=uk");
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error('Місто не знайдено! Перевірте назву або спробуйте англійською.');

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function saveWeatherToLocalStorage(city, data) {
  var weatherData = {
    city: city,
    data: data,
    timestamp: Date.now()
  };
  localStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(weatherData));
  localStorage.setItem(LAST_FETCH_KEY, Date.now());
}

function loadWeatherFromLocalStorage() {
  var weatherData = localStorage.getItem(WEATHER_STORAGE_KEY);
  if (!weatherData) return null;
  return JSON.parse(weatherData);
}

function isCacheValid() {
  var lastFetchTime = localStorage.getItem(LAST_FETCH_KEY);
  if (!lastFetchTime) return false;
  var elapsed = Date.now() - lastFetchTime;
  return elapsed < CACHE_DURATION;
}

function displayWeather(data) {
  var name = data.name,
      main = data.main,
      weather = data.weather;
  weatherContainer.innerHTML = "\n        <h2>\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 ".concat(name, "</h2>\n        <p><strong>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430:</strong> ").concat(main.temp, "\xB0C</p>\n        <p><strong>\u0412\u043E\u043B\u043E\u0433\u0456\u0441\u0442\u044C:</strong> ").concat(main.humidity, "%</p>\n        <p><strong>\u041E\u043F\u0438\u0441:</strong> ").concat(weather[0].description, "</p>\n        <img src=\"http://openweathermap.org/img/wn/").concat(weather[0].icon, ".png\" alt=\"").concat(weather[0].description, "\">\n    ");
}

weatherForm.addEventListener('submit', function _callee(event) {
  var city, _cachedData, weatherData;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          city = document.getElementById('city').value.trim();
          _context2.prev = 2;

          if (!isCacheValid()) {
            _context2.next = 8;
            break;
          }

          _cachedData = loadWeatherFromLocalStorage();

          if (!(_cachedData && _cachedData.city.toLowerCase() === city.toLowerCase())) {
            _context2.next = 8;
            break;
          }

          displayWeather(_cachedData.data);
          return _context2.abrupt("return");

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(fetchWeather(city));

        case 10:
          weatherData = _context2.sent;
          saveWeatherToLocalStorage(city, weatherData);
          displayWeather(weatherData);
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](2);
          weatherContainer.innerHTML = "<p style=\"color: red;\">".concat(_context2.t0.message, "</p>");

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 15]]);
});
var cachedData = loadWeatherFromLocalStorage();

if (cachedData && isCacheValid()) {
  displayWeather(cachedData.data);
}