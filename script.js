import { fetchMovies } from "./functions/fetchMovies.js";
import { saveMovies } from "./functions/saveMovies.js";

const formEl = document.getElementById("form");
const mainEl = document.getElementById("search-results");

formEl.addEventListener("submit", fetchMovies);

mainEl.addEventListener("click", saveMovies);
