const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;

function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

let visit = localStorage.getItem("on_load_counter");
if (visit === null) {
  visit = 0;
}
visit++;
localStorage.setItem("on_load_counter", visit);
document.querySelector("#visits").innerHTML = visit;

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
