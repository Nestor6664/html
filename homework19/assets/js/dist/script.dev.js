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
var currentYear = '';
var currentSort = ''; // === ФУНКЦІЯ ЗАПИТУ ===

function fetchMovies(search, type) {
  var page,
      year,
      url,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function fetchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          year = _args.length > 3 && _args[3] !== undefined ? _args[3] : '';
          url = "".concat(BASE_URL, "?apikey=").concat(API_KEY, "&s=").concat(encodeURIComponent(search), "&type=").concat(type, "&page=").concat(page);

          if (year) {
            url += "&y=".concat(year);
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(url));

        case 6:
          response = _context.sent;
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
} // === ОБРОБКА ПОШУКУ ===


searchForm.addEventListener('submit', function _callee(e) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          currentSearch = document.getElementById('searchTitle').value.trim();
          currentType = document.getElementById('type').value;
          currentYear = document.getElementById('year').value;
          currentSort = document.getElementById('sort').value;
          currentPage = 1;
          _context2.next = 8;
          return regeneratorRuntime.awrap(fetchMovies(currentSearch, currentType, currentPage, currentYear));

        case 8:
          data = _context2.sent;
          displayMovies(data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // === ВІДОБРАЖЕННЯ ФІЛЬМІВ ===

function displayMovies(data) {
  movieContainer.innerHTML = '';
  paginationContainer.innerHTML = '';

  if (data.Response === 'True') {
    var results = data.Search; // === Сортування ===

    if (currentSort === 'newest') {
      results.sort(function (a, b) {
        return parseInt(b.Year) - parseInt(a.Year);
      });
    } else if (currentSort === 'oldest') {
      results.sort(function (a, b) {
        return parseInt(a.Year) - parseInt(b.Year);
      });
    }

    results.forEach(function (movie) {
      var movieDiv = document.createElement('div');
      movieDiv.className = 'movie-item';
      movieDiv.innerHTML = "\n                <img src=\"".concat(movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200', "\" alt=\"").concat(movie.Title, "\">\n                <h3>").concat(movie.Title, "</h3>\n                <p>").concat(movie.Year, "</p>\n                <button onclick=\"goToDetailsPage('").concat(movie.imdbID, "')\">\u0414\u0435\u0442\u0430\u043B\u0438</button>\n            ");
      movieContainer.appendChild(movieDiv);
    });
    var totalPages = Math.ceil(parseInt(data.totalResults) / 10);

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
                return regeneratorRuntime.awrap(fetchMovies(currentSearch, currentType, currentPage, currentYear));

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
    movieContainer.innerHTML = '<p>Ничего не найдено</p>';
  }
}

function goToDetailsPage(imdbID) {
  window.location.href = "details.html?id=".concat(imdbID);
}