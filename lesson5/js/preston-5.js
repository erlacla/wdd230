function toggleMenu() {
    document.getElementById("nav").classList.toggle("hide");
  }
  

function date() {
    let getday = new Date();
    getday.getDate();
let x = document.getElementById("invite");
    let display = (getday == 5) ? x.style.display = "block" : x.style.display === "none";
}

let today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;