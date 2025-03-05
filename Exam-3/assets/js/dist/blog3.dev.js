"use strict";

var newsContainer = document.getElementById("news-container");

function fetchCryptoNews() {
  var response, data, articles;
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
          articles = data.articles.slice(0, 3);
          newsContainer.innerHTML = articles.map(function (article) {
            return "\n            <div class=\"news-card\" onclick=\"window.open('".concat(article.url, "', '_blank')\">\n                <img src=\"").concat(article.urlToImage || 'default-image.jpg', "\" alt=\"News Image\">\n                <div class=\"content\">\n                    <h3>").concat(article.title, "</h3>\n                    <p>").concat(article.description || "No description available.", "</p>\n                </div>\n                <div class=\"footer\">\n                    <span>BY ").concat(article.author || "Unknown", "</span>\n                    <span>").concat(new Date(article.publishedAt).toLocaleDateString(), "</span>\n                </div>\n            </div>\n        ");
          }).join("");
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching news:", _context.t0);
          newsContainer.innerHTML = "<p>Failed to load crypto news.</p>";

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

fetchCryptoNews();