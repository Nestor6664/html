const API_KEY = '7add6263'; 
const BASE_URL = 'https://www.omdbapi.com/';
const searchForm = document.getElementById('searchForm');
const movieContainer = document.getElementById('movieContainer');
const paginationContainer = document.getElementById('paginationContainer');
const movieDetails = document.getElementById('movieDetails');
let currentPage = 1;
let currentSearch = '';
let currentType = 'movie';
async function fetchMovies(search, type, page = 1) {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${search}&type=${type}&page=${page}`);
    const data = await response.json();
    return data;
}
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    currentSearch = document.getElementById('searchTitle').value.trim();
    currentType = document.getElementById('type').value;
    currentPage = 1;

    const data = await fetchMovies(currentSearch, currentType, currentPage);
    displayMovies(data);
});
function displayMovies(data) {
    movieContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    movieDetails.style.display = 'none';

    if (data.Response === 'True') {
        data.Search.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie-item';
            movieDiv.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <button onclick="fetchMovieDetails('${movie.imdbID}')">Деталі</button>
            `;
            movieContainer.appendChild(movieDiv);
        });

        const totalResults = parseInt(data.totalResults);
        const totalPages = Math.ceil(totalResults / 10);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.disabled = i === currentPage;
            pageButton.addEventListener('click', async () => {
                currentPage = i;
                const pageData = await fetchMovies(currentSearch, currentType, currentPage);
                displayMovies(pageData);
            });
            paginationContainer.appendChild(pageButton);
        }
    } else {
        movieContainer.innerHTML = '<p>Нічого не знайдено</p>';
    }
}
async function fetchMovieDetails(imdbID) {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
    const movie = await response.json();

    if (movie.Response === 'True') {
        movieDetails.style.display = 'block';
        movieDetails.innerHTML = `
            <h2>${movie.Title}</h2>
            <p><strong>Рік:</strong> ${movie.Year}</p>
            <p><strong>Жанр:</strong> ${movie.Genre}</p>
            <p><strong>Режисер:</strong> ${movie.Director}</p>
            <p><strong>Опис:</strong> ${movie.Plot}</p>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}" alt="${movie.Title}">
        `;
    }
}