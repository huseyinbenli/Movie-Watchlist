import { renderMovies } from "./renderMovies.js";
const formEl = document.getElementById("form");
const searchResultsEl = document.getElementById("search-results");
const crossEl = document.querySelector(".circle");

export async function fetchMovies(e) {
  e.preventDefault();

  searchResultsEl.innerHTML = "";

  const formData = new FormData(formEl);
  const movieName = formData.get("movie-name");

  if (!movieName.trim()) {
    searchResultsEl.innerHTML = "<p>Please enter a movie name 🎬</p>";
    return;
  }

  const response = await fetch(
    `https://www.omdbapi.com/?s=${movieName}&apikey=5318b514`,
  );
  const data = await response.json();
  if (!data.Search) {
    searchResultsEl.innerHTML = "<p>No movies found 😢</p>";
    return;
  }

  for (const movies of data.Search) {
    const response = await fetch(
      `https://www.omdbapi.com/?t=${movies.Title}&apikey=5318b514`,
    );
    const movie = await response.json();

    searchResultsEl.innerHTML += renderMovies(movie);
  }
}

crossEl.addEventListener("click", () => {
  document.getElementById("movie-name").value = "";
});
