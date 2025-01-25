"use strict";

var API_KEY = '7add6263';
var BASE_URL = 'https://www.omdbapi.com/';
var searchForm = document.getElementById('searchForm');
var movieContainer = document.getElementById('movieContainer');
var paginationContainer = document.getElementById('paginationContainer');
var movieDetails = document.getElementById('movieDetails');
var currentPage = 1;
var currentSearch = '';
var currentType = 'movie';

function fetchMovies(search, type) {
  var page,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function fetchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "?apikey=").concat(API_KEY, "&s=").concat(search, "&type=").concat(type, "&page=").concat(page)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

searchForm.addEventListener('submit', function _callee(e) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          currentSearch = document.getElementById('searchTitle').value.trim();
          currentType = document.getElementById('type').value;
          currentPage = 1;
          _context2.next = 6;
          return regeneratorRuntime.awrap(fetchMovies(currentSearch, currentType, currentPage));

        case 6:
          data = _context2.sent;
          displayMovies(data);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function displayMovies(data) {
  movieContainer.innerHTML = '';
  paginationContainer.innerHTML = '';
  movieDetails.style.display = 'none';

  if (data.Response === 'True') {
    data.Search.forEach(function (movie) {
      var movieDiv = document.createElement('div');
      movieDiv.className = 'movie-item';
      movieDiv.innerHTML = "\n                <img src=\"".concat(movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200', "\" alt=\"").concat(movie.Title, "\">\n                <h3>").concat(movie.Title, "</h3>\n                <p>").concat(movie.Year, "</p>\n                <button onclick=\"fetchMovieDetails('").concat(movie.imdbID, "')\">\u0414\u0435\u0442\u0430\u043B\u0456</button>\n            ");
      movieContainer.appendChild(movieDiv);
    });
    var totalResults = parseInt(data.totalResults);
    var totalPages = Math.ceil(totalResults / 10);

    var _loop = function _loop(i) {
      var pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.disabled = i === currentPage;
      pageButton.addEventListener('click', function _callee2() {
        var pageData;
        return regeneratorRuntime.async(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentPage = i;
                _context3.next = 3;
                return regeneratorRuntime.awrap(fetchMovies(currentSearch, currentType, currentPage));

              case 3:
                pageData = _context3.sent;
                displayMovies(pageData);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        });
      });
      paginationContainer.appendChild(pageButton);
    };

    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }
  } else {
    movieContainer.innerHTML = '<p>Нічого не знайдено</p>';
  }
}

function fetchMovieDetails(imdbID) {
  var response, movie;
  return regeneratorRuntime.async(function fetchMovieDetails$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "?apikey=").concat(API_KEY, "&i=").concat(imdbID)));

        case 2:
          response = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          movie = _context4.sent;

          if (movie.Response === 'True') {
            movieDetails.style.display = 'block';
            movieDetails.innerHTML = "\n            <h2>".concat(movie.Title, "</h2>\n            <p><strong>\u0420\u0456\u043A:</strong> ").concat(movie.Year, "</p>\n            <p><strong>\u0416\u0430\u043D\u0440:</strong> ").concat(movie.Genre, "</p>\n            <p><strong>\u0420\u0435\u0436\u0438\u0441\u0435\u0440:</strong> ").concat(movie.Director, "</p>\n            <p><strong>\u041E\u043F\u0438\u0441:</strong> ").concat(movie.Plot, "</p>\n            <img src=\"").concat(movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300', "\" alt=\"").concat(movie.Title, "\">\n        ");
          }

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}