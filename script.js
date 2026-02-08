import { fetchMovies } from "./functions/fetchMovies.js";
const formEl = document.getElementById("form");

formEl.addEventListener("submit", fetchMovies);
