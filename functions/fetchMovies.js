import { renderMovies } from "./renderMovies.js";
const formEl = document.getElementById("form");
const searchResultsEl = document.getElementById("search-results");

export async function fetchMovies(e) {
  e.preventDefault();

  searchResultsEl.innerHTML = "";

  const formData = new FormData(formEl);
  const movieName = formData.get("movie-name");

  const response = await fetch(
    `https://www.omdbapi.com/?s=${movieName}&apikey=5318b514`,
  );
  const data = await response.json();
  console.log(data);
  if (!data.Search) {
    searchResultsEl.innerHTML = "<p>No movies found 😢</p>";
    return;
  }
  console.log(data.Search);

  for (const movies of data.Search) {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${movies.Title}&apikey=5318b514`,
    );
    const movie = await response.json();
    console.log(movie);

    renderMovies(movie);
  }
}
