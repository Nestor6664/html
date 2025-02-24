"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
/*----------------------------------------calculator--------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("plan").addEventListener("change", updatePlan);
  document.getElementById("investment").addEventListener("input", calculateProfit);
  document.getElementById("interest").addEventListener("input", calculateProfit);
  document.getElementById("compounding").addEventListener("input", calculateProfit);
});
var plans = {
  basic: {
    minInvestment: 1500,
    maxInvestment: 5000,
    compounding: 0.10
  },
  premium: {
    minInvestment: 5000,
    maxInvestment: 20000,
    compounding: 0.20
  },
  vip: {
    minInvestment: 20000,
    maxInvestment: 100000,
    compounding: 0.30
  }
};

function updatePlan() {
  var selectedPlan = document.getElementById("plan").value;
  var minInput = document.getElementById("min-investment");
  var maxInput = document.getElementById("max-investment");
  var compoundingInput = document.getElementById("compounding");

  if (plans[selectedPlan]) {
    minInput.value = plans[selectedPlan].minInvestment;
    maxInput.value = plans[selectedPlan].maxInvestment;
    compoundingInput.value = plans[selectedPlan].compounding * 100;
  } else {
    minInput.value = "";
    maxInput.value = "";
    compoundingInput.value = "";
  }

  calculateProfit();
}

function calculateProfit() {
  var selectedPlan = document.getElementById("plan").value;
  var investmentInput = document.getElementById("investment");
  var errorDiv = document.getElementById("error-message");

  if (!plans[selectedPlan]) {
    investmentInput.classList.remove("error");
    errorDiv.textContent = "";
    return;
  }

  var minInvestment = plans[selectedPlan].minInvestment;
  var maxInvestment = plans[selectedPlan].maxInvestment;
  var compounding = plans[selectedPlan].compounding;
  var investment = parseFloat(investmentInput.value) || 0;
  var interest = parseFloat(document.getElementById("interest").value) || 0;

  if (investment < minInvestment || investment > maxInvestment) {
    investmentInput.classList.add("error");
    errorDiv.textContent = "\u0406\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0456\u044F \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432 \u043C\u0435\u0436\u0430\u0445 ".concat(minInvestment, " - ").concat(maxInvestment, "!");
  } else {
    investmentInput.classList.remove("error");
    errorDiv.textContent = "";
  }

  var validInvestment = Math.max(minInvestment, Math.min(investment, maxInvestment));
  var profit = validInvestment * compounding;
  var totalReturn = validInvestment + profit + interest;
  document.getElementById("profit").value = profit.toFixed(2);
  document.getElementById("total-return").value = totalReturn.toFixed(2);
}
/*----------------------------------------calculator--------------------------------------*/

/*----------------------------------------faq--------------------------------------*/


document.querySelectorAll(".faq-question").forEach(function (button) {
  button.addEventListener("click", function () {
    var answer = this.nextElementSibling;
    var icon = this.querySelector(".icon");
    document.querySelectorAll(".faq-answer").forEach(function (el) {
      if (el !== answer) {
        el.style.maxHeight = null;
        el.previousElementSibling.querySelector(".icon").textContent = "+";
      }
    });

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "-";
    }
  });
});
/*----------------------------------------faq--------------------------------------*/

/*----------------------------------------clients--------------------------------------*/

var clients = [{
  name: "Steve Smith",
  role: "CEO, Telecom",
  feedback: "Crypto has revolutionized the way we think about finance.The future of finance is decentralized and transparent",
  image: "assets/images/team-1.jpg"
}, {
  name: "John Doe",
  role: "Marketing Director",
  feedback: "Blockchain technology is the future of secure data storage. It's transforming the way we store and manage information",
  image: "assets/images/team-2.jpg"
}, {
  name: "Emily Johnson",
  role: "Product Manager",
  feedback: "The potential for cryptocurrency to disrupt traditional banking is vast. It's a game-changer for financial inclusion",
  image: "assets/images/team-3.jpg"
}, {
  name: "Sarah Brown",
  role: "Software Engineer",
  feedback: "The decentralized nature of blockchain is a game-changer for cybersecurity. It's a must-have for secure digital assets",
  image: "assets/images/team-4.jpg"
}];
var currentIndex = 0;

function updateSlide() {
  document.getElementById("client-name").textContent = clients[currentIndex].name;
  document.getElementById("client-role").textContent = clients[currentIndex].role;
  document.getElementById("client-feedback").textContent = clients[currentIndex].feedback;
  document.getElementById("main-image").src = clients[currentIndex].image;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % clients.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + clients.length) % clients.length;
  updateSlide();
}

function changeSlide(index) {
  currentIndex = index;
  updateSlide();
}

updateSlide();
/*----------------------------------------clients--------------------------------------*/

var newsContainer = document.getElementById("news-container");
console.log("newsContainer:", newsContainer);

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