const API_KEY = '7add6263';
const BASE_URL = 'https://www.omdbapi.com/';
const movieDetails = document.getElementById('movieDetails');


let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavorite(movie) {
    const exists = favorites.some(f => f.imdbID === movie.imdbID);
    if (exists) {
        favorites = favorites.filter(f => f.imdbID !== movie.imdbID);
    } else {
        favorites.push(movie);
    }
    saveFavorites();
}

function getImdbIDFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchMovieDetails(imdbID) {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
    const movie = await response.json();

    if (movie.Response === 'True') {
        movieDetails.innerHTML = `
            <h1>${movie.Title}</h1>
            <p><strong>Рік:</strong> ${movie.Year}</p>
            <p><strong>Жанр:</strong> ${movie.Genre}</p>
            <p><strong>Режисер:</strong> ${movie.Director}</p>
            <p><strong>Опис:</strong> ${movie.Plot}</p>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}" alt="${movie.Title}">
        `;

        // Кнопка "Улюблене"
        const favBtn = document.createElement("button");
        const isFav = favorites.some(f => f.imdbID === movie.imdbID);
        favBtn.textContent = isFav ? "❌ Убрать из любимых" : "❤️ В любимые";

        favBtn.addEventListener("click", () => {
            toggleFavorite({
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster
            });
            favBtn.textContent = favorites.some(f => f.imdbID === movie.imdbID)
                ? "❌ Убрать из любимых"
                : "❤️ В любимые";
        });

        movieDetails.appendChild(favBtn);
    } else {
        movieDetails.innerHTML = '<p>Детали не найдены</p>';
    }
}

const imdbID = getImdbIDFromURL();
if (imdbID) {
    fetchMovieDetails(imdbID);
} else {
    movieDetails.innerHTML = '<p>ID фільму не вказано</p>';
}