const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
  
//filter array  
const preston = towns.filter(x => x.name === "Preston");
const sodasprings = towns.filter(x => x.name === "Soda Springs");
const fishhaven = towns.filter(x => x.name === "Fish Haven");
//combine 3 towns into new array
const myTowns = [];
myTowns.push(...preston, ...sodasprings, ...fishhaven);

myTowns.forEach(town => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let image = document.createElement("img");
    let div = document.createElement("div");

    image.id = `picture of ${town.name}`;
    image.src = `images/${town.photo}`;
      
    h2.textContent = `${town.name}`;
    p.textContent =  `Town motto: ${town.motto}`;
    p2.textContent = `Year founded: ${town.yearFounded}`;
    p3.textContent = `Current population: ${town.currentPopulation}`;
    p4.textContent = `Average rainfall: ${town.averageRainfall}`;

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    card.appendChild(div);
    card.appendChild(image);

    document.querySelector("div.towns").appendChild(card);
  });
});









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

//first find all the data-source images with query selector
let imagesToLoad = document.querySelectorAll("img[data-src]");

//when the img is 50px from the window bottom, run function
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};
//change from placeholder (source) to actual image (data source)
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
//only remove switch from src to data-src when the img is intersecting in window
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  //run function on each image
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
