const searchResultsEl = document.getElementById("search-results");

export function renderMovies(movie) {
  searchResultsEl.innerHTML += `
            <div class="movie" id="${movie.imdbID}">
              <img class="movie-img" src="${movie.Poster}" alt="${movie.Title}" />
                <div class="movie-info-wrapper">
                    <div class="movie-title-wrapper">
                        <h2 class="movie-title">${movie.Title}</h2>
                        <i class="fa-solid fa-star"></i>
                        <p>${movie.imdbRating}</p>
                    </div>
                    <div class="addlist-wrapper">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                        <div class="watchlist">
                        <i class="fa-solid fa-circle-plus watchlist"></i>
                        Watchlist
                        </div>
                    </div>
                    <p>${movie.Plot}</p>
                 </div>
            </div>
          `;
}
