const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=193243ab32ebe2eba039565713596c16";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temperature = Math.round(jsObject.main.temp);
    let windspeed = jsObject.wind.speed;
    document.getElementById("current").textContent =
      jsObject.weather[0].description;
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("windspeed").textContent = windspeed;
    document.getElementById("humidity").textContent =
      jsObject.main.humidity + "%";

    if (temperature <= 50 && windspeed >= 3) {
      let factor = windChill(temperature, windspeed);
      document.querySelector("#output").innerHTML = factor + "&#176;F";
    } else {
      document.querySelector("#output").innerHTML = "N/A";
    }

    function windChill(tempF, speed) {
      let t = tempF;
      let s = speed;
      let f = Math.round(
        35.74 +
          0.6215 * t -
          35.75 * Math.pow(s, 0.16) +
          0.4275 * t * Math.pow(s, 0.16)
      );
      return f;
    }
  });

const forecast =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=193243ab32ebe2eba039565713596c16";
fetch(forecast)
  .then((response) => response.json())
  .then((fObject) => {
    const forecast5 = fObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    let day = 0;
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

    forecast5.forEach((x) => {
      let d = new Date(x.dt_txt);
      document.getElementById(`day${day + 1}`).textContent =
        dayOfWeek[d.getDay()];
      document.getElementById(`forecast${day + 1}`).innerHTML =
        Math.round(x.main.temp) + "&#176;F";
      const src =
        "https://openweathermap.org/img/wn/" + x.weather[0].icon + "@2x.png";
      const alt = x.weather[0].description;
      document.getElementById(`icon${day + 1}`).setAttribute("src", src);
      document
        .getElementById(`icon${day + 1}`)
        .setAttribute("alt", `${alt} icon`);
      day++;
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
