let today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;

function toggleMenu() {
  document.getElementById("nav").classList.toggle("hide");
}

today.getDate() == 5
  ? (pancake.style.display = "block")
  : pancake.style.display === "none";

 
