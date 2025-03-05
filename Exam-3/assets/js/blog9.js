const newsContainer = document.getElementById("Blog9-container");
const paginationContainer = document.getElementById("pagination");

let articles = [];
let currentPage = 1;
const articlesPerPage = 9;

async function fetchCryptoNews() {
    try {
        const response = await fetch("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=eefc9c02e4684a5b86816fca979588e2");
        const data = await response.json();
        articles = data.articles;
        renderNews();
        renderPagination();
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load crypto news.</p>";
    }
}

function renderNews() {
    newsContainer.innerHTML = "";
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const paginatedArticles = articles.slice(start, end);

    newsContainer.innerHTML = paginatedArticles.map(article => `
        <div class="blog9-card" onclick="window.open('${article.url}', '_blank')">
            <img src="${article.urlToImage || 'default-image.jpg'}" alt="News Image">
            <div class="content-blog9">
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
            </div>
            <div class="ft-blog9">
                <span>BY ${article.author || "Unknown"}</span>
                <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
        </div>
    `).join("");
}

function renderPagination() {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("pagination-button");
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => {
            currentPage = i;
            renderNews();
            renderPagination();
        });
        paginationContainer.appendChild(button);
    }
}

fetchCryptoNews();