const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.log(towns);
  
//filter array  
const preston = towns.filter(x => x.name === "Preston");
const sodasprings = towns.filter(x => x.name === "Soda Springs");
const fishhaven = towns.filter(x => x.name === "Fish Haven");
//combine 3 towns into new array
const myTowns = [];
myTowns.push(...preston, ...sodasprings, ...fishhaven);
console.log(myTowns);

myTowns.forEach((town) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    h2.textContent = `${myTowns.name}`;
    p.textContent =  `${myTowns.motto}`;
    p2.textContent = myTowns.yearFounded;
    p3.textContent = myTowns.currentPopulation;
    p4.textContent = myTowns.averageRainfall;
    
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);

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

if (today.getDay() == 5) {
  document.getElementById("pancake").style.display = "block";
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
