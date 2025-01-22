"use strict";

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var searchQuery = document.getElementById('searchInput').value;
  var typeQuery = document.getElementById('typeSelect').value;
  searchMovies(searchQuery, typeQuery, 1);
});

function searchMovies(query, type, page) {
  var apiKey = 'eaea62cf';
  var url = "http://www.omdbapi.com/?s=".concat(encodeURIComponent(query), "&type=").concat(type, "&page=").concat(page, "&apikey=").concat(apiKey);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.Response === "True") {
      displayResults(data.Search, data.totalResults);
    } else {
      document.getElementById('results').innerHTML = '<p>Movie not found!</p>';
    }
  })["catch"](function (error) {
    return console.error('Error:', error);
  });
}

function displayResults(movies, totalResults) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = movies.map(function (movie) {
    return "\n        <div class=\"movie-item\">\n            <h3>".concat(movie.Title, " (").concat(movie.Year, ")</h3>\n            <button onclick=\"showDetails('").concat(movie.imdbID, "')\">Details</button>\n        </div>\n    ");
  }).join('');

  if (totalResults > 10) {
    var totalPages = Math.ceil(totalResults / 10);
    var pagination = '<div>';

    for (var i = 1; i <= totalPages; i++) {
      pagination += "<button onclick=\"searchMovies('".concat(document.getElementById('searchInput').value, "', '").concat(document.getElementById('typeSelect').value, "', ").concat(i, ")\">").concat(i, "</button>");
    }

    pagination += '</div>';
    resultsDiv.innerHTML += pagination;
  }
}

function showDetails(imdbID) {
  var apiKey = 'eaea62cf';
  var url = "http://www.omdbapi.com/?i=".concat(imdbID, "&apikey=").concat(apiKey);
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    document.getElementById('details').innerHTML = "\n                <h2>".concat(data.Title, "</h2>\n                <p>").concat(data.Plot, "</p>\n                <p>\u0420\u0456\u043A: ").concat(data.Year, "</p>\n                <p>\u0420\u0435\u0436\u0438\u0441\u0435\u0440: ").concat(data.Director, "</p>\n                <p>\u0410\u043A\u0442\u043E\u0440\u0438: ").concat(data.Actors, "</p>\n                <p>\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ").concat(data.imdbRating, "</p>\n            ");
  })["catch"](function (error) {
    return console.error('Error:', error);
  });
}