export function renderMovies(movie) {
  return `
            <div class="movie" data-id="${movie.imdbID}">
              <img class="movie-img" src="${movie.Poster}" alt="${movie.Title}" />
                <div class="movie-info-wrapper">
                    <div class="movie-title-wrapper">
                        <h2 class="movie-title">${movie.Title}</h2>
                        <i class="fa-solid fa-star"></i>
                        <p class="movie-rating">${movie.imdbRating}</p>
                    </div>
                    <div class="addlist-wrapper">
                        <p class="movie-runtime">${movie.Runtime}</p>
                        <p class="movie-genre">${movie.Genre}</p>
                        <div class="watchlist">
                        <i class="fa-solid fa-circle-plus"></i>
                        Watchlist
                        </div>
                    </div>
                    <p class="movie-plot">${movie.Plot}</p>
                 </div>
            </div>
          `;
}
