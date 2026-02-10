export function saveMovies(e) {
  if (!e.target.classList.contains("watchlist")) return;

  const movieEl = e.target.closest(".movie");

  const movieData = {
    imdbID: movieEl.dataset.id,
    Poster: movieEl.querySelector(".movie-img").src,
    Title: movieEl.querySelector(".movie-title").textContent,
    imdbRating: movieEl.querySelector(".movie-rating").textContent,
    Runtime: movieEl.querySelector(".movie-runtime").textContent,
    Genre: movieEl.querySelector(".movie-genre").textContent,
    Plot: movieEl.querySelector(".movie-plot").textContent,
  };

  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  if (!watchlist.some((movie) => movie.imdbID === movieData.imdbID)) {
    watchlist.unshift(movieData);
  }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  e.target.textContent = "Added to your watchlist";
}
