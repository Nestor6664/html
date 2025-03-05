const newsContainer = document.getElementById("news-container");
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
