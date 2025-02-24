document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

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

const plans = {
    basic: { minInvestment: 1500, maxInvestment: 5000, compounding: 0.10 },
    premium: { minInvestment: 5000, maxInvestment: 20000, compounding: 0.20 },
    vip: { minInvestment: 20000, maxInvestment: 100000, compounding: 0.30 }
};

function updatePlan() {
    let selectedPlan = document.getElementById("plan").value;
    let minInput = document.getElementById("min-investment");
    let maxInput = document.getElementById("max-investment");
    let compoundingInput = document.getElementById("compounding");

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
    let selectedPlan = document.getElementById("plan").value;
    let investmentInput = document.getElementById("investment");
    let errorDiv = document.getElementById("error-message");

    if (!plans[selectedPlan]) {
        investmentInput.classList.remove("error");
        errorDiv.textContent = "";
        return;
    }

    let minInvestment = plans[selectedPlan].minInvestment;
    let maxInvestment = plans[selectedPlan].maxInvestment;
    let compounding = plans[selectedPlan].compounding;

    let investment = parseFloat(investmentInput.value) || 0;
    let interest = parseFloat(document.getElementById("interest").value) || 0;

    if (investment < minInvestment || investment > maxInvestment) {
        investmentInput.classList.add("error");
        errorDiv.textContent = `Інвестиція має бути в межах ${minInvestment} - ${maxInvestment}!`;
    } else {
        investmentInput.classList.remove("error");
        errorDiv.textContent = "";
    }

    let validInvestment = Math.max(minInvestment, Math.min(investment, maxInvestment));
    let profit = validInvestment * compounding;
    let totalReturn = validInvestment + profit + interest;

    document.getElementById("profit").value = profit.toFixed(2);
    document.getElementById("total-return").value = totalReturn.toFixed(2);
}

/*----------------------------------------calculator--------------------------------------*/

/*----------------------------------------faq--------------------------------------*/

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        
        document.querySelectorAll(".faq-answer").forEach(el => {
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


const clients = [
    {
        name: "Steve Smith",
        role: "CEO, Telecom",
        feedback: "Crypto has revolutionized the way we think about finance.The future of finance is decentralized and transparent",
        image: "assets/images/team-1.jpg"
    },
    {
        name: "John Doe",
        role: "Marketing Director",
        feedback: "Blockchain technology is the future of secure data storage. It's transforming the way we store and manage information",
        image: "assets/images/team-2.jpg"
    },
    {
        name: "Emily Johnson",
        role: "Product Manager",
        feedback: "The potential for cryptocurrency to disrupt traditional banking is vast. It's a game-changer for financial inclusion",
        image: "assets/images/team-3.jpg"
    },
    {
        name: "Sarah Brown",
        role: "Software Engineer",
        feedback: "The decentralized nature of blockchain is a game-changer for cybersecurity. It's a must-have for secure digital assets",
        image: "assets/images/team-4.jpg"
    }
];

let currentIndex = 0;

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




const newsContainer = document.getElementById("news-container");
console.log("newsContainer:", newsContainer);
async function fetchCryptoNews() {
    try {
        const response = await fetch("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=eefc9c02e4684a5b86816fca979588e2");
        const data = await response.json();
        const articles = data.articles.slice(0, 3); 

        newsContainer.innerHTML = articles.map(article => `
            <div class="news-card" onclick="window.open('${article.url}', '_blank')">
                <img src="${article.urlToImage || 'default-image.jpg'}" alt="News Image">
                <div class="content">
                    <h3>${article.title}</h3>
                    <p>${article.description || "No description available."}</p>
                </div>
                <div class="footer">
                    <span>BY ${article.author || "Unknown"}</span>
                    <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>
        `).join("");
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load crypto news.</p>";
    }
}

fetchCryptoNews();
