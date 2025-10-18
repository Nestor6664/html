"use strict";

var API_KEY = '7add6263';
var BASE_URL = 'https://www.omdbapi.com/';
var movieDetails = document.getElementById('movieDetails');
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavorite(movie) {
  var exists = favorites.some(function (f) {
    return f.imdbID === movie.imdbID;
  });

  if (exists) {
    favorites = favorites.filter(function (f) {
      return f.imdbID !== movie.imdbID;
    });
  } else {
    favorites.push(movie);
  }

  saveFavorites();
}

function getImdbIDFromURL() {
  var params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function fetchMovieDetails(imdbID) {
  var response, movie, favBtn, isFav;
  return regeneratorRuntime.async(function fetchMovieDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "?apikey=").concat(API_KEY, "&i=").concat(imdbID)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          movie = _context.sent;

          if (movie.Response === 'True') {
            movieDetails.innerHTML = "\n            <h1>".concat(movie.Title, "</h1>\n            <p><strong>\u0420\u0456\u043A:</strong> ").concat(movie.Year, "</p>\n            <p><strong>\u0416\u0430\u043D\u0440:</strong> ").concat(movie.Genre, "</p>\n            <p><strong>\u0420\u0435\u0436\u0438\u0441\u0435\u0440:</strong> ").concat(movie.Director, "</p>\n            <p><strong>\u041E\u043F\u0438\u0441:</strong> ").concat(movie.Plot, "</p>\n            <img src=\"").concat(movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300', "\" alt=\"").concat(movie.Title, "\">\n        "); // Кнопка "Улюблене"

            favBtn = document.createElement("button");
            isFav = favorites.some(function (f) {
              return f.imdbID === movie.imdbID;
            });
            favBtn.textContent = isFav ? "❌ Убрать из любимых" : "❤️ В любимые";
            favBtn.addEventListener("click", function () {
              toggleFavorite({
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster
              });
              favBtn.textContent = favorites.some(function (f) {
                return f.imdbID === movie.imdbID;
              }) ? "❌ Убрать из любимых" : "❤️ В любимые";
            });
            movieDetails.appendChild(favBtn);
          } else {
            movieDetails.innerHTML = '<p>Детали не найдены</p>';
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

var imdbID = getImdbIDFromURL();

if (imdbID) {
  fetchMovieDetails(imdbID);
} else {
  movieDetails.innerHTML = '<p>ID фільму не вказано</p>';
}