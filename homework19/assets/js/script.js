const API_KEY = '7add6263';
const BASE_URL = 'https://www.omdbapi.com/';
const searchForm = document.getElementById('searchForm');
const movieContainer = document.getElementById('movieContainer');
const paginationContainer = document.getElementById('paginationContainer');
const movieDetails = document.getElementById('movieDetails');
let currentPage = 1;
let currentSearch = '';
let currentType = 'movie';
let currentYear = '';
let currentSort = '';

async function fetchMovies(search, type, page = 1, year = '') {
    let url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(search)}&type=${type}&page=${page}`;
    if (year) {
        url += `&y=${year}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    currentSearch = document.getElementById('searchTitle').value.trim();
    currentType = document.getElementById('type').value;
    currentYear = document.getElementById('year').value;
    currentSort = document.getElementById('sort').value;
    currentPage = 1;

    const data = await fetchMovies(currentSearch, currentType, currentPage, currentYear);
    displayMovies(data);
});

function displayMovies(data) {
    movieContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    if (data.Response === 'True') {
        let results = data.Search;

        if (currentSort === 'newest') {
            results.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (currentSort === 'oldest') {
            results.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }

        results.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie-item';
            movieDiv.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200'}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <button onclick="goToDetailsPage('${movie.imdbID}')">Детали</button>
            `;
            movieContainer.appendChild(movieDiv);
        });

        const totalPages = Math.ceil(parseInt(data.totalResults) / 10);
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.disabled = i === currentPage;
            pageButton.addEventListener('click', async () => {
                currentPage = i;
                const pageData = await fetchMovies(currentSearch, currentType, currentPage, currentYear);
                displayMovies(pageData);
            });
            paginationContainer.appendChild(pageButton);
        }
    } else {
        movieContainer.innerHTML = '<p>Ничего не найдено</p>';
    }
}

function goToDetailsPage(imdbID) {
    window.location.href = `details.html?id=${imdbID}`;
}
