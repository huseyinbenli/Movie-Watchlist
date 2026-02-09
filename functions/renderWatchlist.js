const watchlistEl = document.getElementById("watchlist");

function renderWatchlist() {
  const localMovies = JSON.parse(localStorage.getItem("watchlist")) || [];

  // Empty state
  if (localMovies.length === 0) {
    watchlistEl.innerHTML = `
      <div class="empty-div">
        <p>Your watchlist is looking a little empty ...</p>
        <a class="empty-text" href="./index.html">
        <i class="fa-solid fa-circle-plus empty-icon"></i>
        Let's add some movies
        <a/>
      </div>
    `;
    return;
  }

  watchlistEl.innerHTML = "";

  localMovies.forEach((movie) => {
    watchlistEl.innerHTML += `
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

            <div class="remove-watchlist" data-id="${movie.imdbID}">
              <i class="fa-solid fa-circle-minus remove"></i>
              Remove
            </div>
          </div>

          <p class="movie-plot">${movie.Plot}</p>
        </div>
      </div>
    `;
  });
}

renderWatchlist();

watchlistEl.addEventListener("click", (e) => {
  if (!e.target.closest(".remove-watchlist")) return;

  const id = e.target.closest(".remove-watchlist").dataset.id;

  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const updated = watchlist.filter((movie) => movie.imdbID !== id);

  localStorage.setItem("watchlist", JSON.stringify(updated));
  renderWatchlist();
});
