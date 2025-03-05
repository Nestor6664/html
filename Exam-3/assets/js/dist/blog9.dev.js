"use strict";

var newsContainer = document.getElementById("Blog9-container");
var paginationContainer = document.getElementById("pagination");
var articles = [];
var currentPage = 1;
var articlesPerPage = 9;

function fetchCryptoNews() {
  var response, data;
  return regeneratorRuntime.async(function fetchCryptoNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=eefc9c02e4684a5b86816fca979588e2"));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          articles = data.articles;
          renderNews();
          renderPagination();
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching news:", _context.t0);
          newsContainer.innerHTML = "<p>Failed to load crypto news.</p>";

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function renderNews() {
  newsContainer.innerHTML = "";
  var start = (currentPage - 1) * articlesPerPage;
  var end = start + articlesPerPage;
  var paginatedArticles = articles.slice(start, end);
  newsContainer.innerHTML = paginatedArticles.map(function (article) {
    return "\n        <div class=\"blog9-card\" onclick=\"window.open('".concat(article.url, "', '_blank')\">\n            <img src=\"").concat(article.urlToImage || 'default-image.jpg', "\" alt=\"News Image\">\n            <div class=\"content-blog9\">\n                <h3>").concat(article.title, "</h3>\n                <p>").concat(article.description || "No description available.", "</p>\n            </div>\n            <div class=\"ft-blog9\">\n                <span>BY ").concat(article.author || "Unknown", "</span>\n                <span>").concat(new Date(article.publishedAt).toLocaleDateString(), "</span>\n            </div>\n        </div>\n    ");
  }).join("");
}

function renderPagination() {
  paginationContainer.innerHTML = "";
  var totalPages = Math.ceil(articles.length / articlesPerPage);

  var _loop = function _loop(i) {
    var button = document.createElement("button");
    button.textContent = i;
    button.classList.add("pagination-button");

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", function () {
      currentPage = i;
      renderNews();
      renderPagination();
    });
    paginationContainer.appendChild(button);
  };

  for (var i = 1; i <= totalPages; i++) {
    _loop(i);
  }
}

fetchCryptoNews();