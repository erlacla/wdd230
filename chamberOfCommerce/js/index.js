function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

function alert() {
  alert(fObject.alert.event + fObject.alert.description);
}
const forecast =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.424564&lon=-111.833267&exclude=minutely,hourly&units=imperial&appid=193243ab32ebe2eba039565713596c16";
fetch(forecast)
  .then((response) => response.json())
  .then((fObject) => {
    console.log(fObject);
    const daily = fObject.daily;
    
    const threeDayF = daily.filter((x) => x.id < 1);
    console.log(daily);

    let y = 0;
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

    daily.forEach(() => {
      let d = new Date(daily[y].dt * 1000);

      document.getElementById(`day${y + 1}`).textContent =
        dayOfWeek[d.getDay()];
      document.getElementById(`forecast${y + 1}`).innerHTML =
        Math.round(daily[y].temp.day) + "&#176;F";
      const src = `https://openweathermap.org/img/wn/${daily[y].weather[0].icon}@2x.png`;
      const alt = daily[y].weather[0].description;
      document.getElementById(`icon${y + 1}`).setAttribute("src", src);
      document
        .getElementById(`icon${y + 1}`)
        .setAttribute("alt", `${alt} icon`);
      document.getElementById(`description${y + 1}`).textContent =
        daily[y].weather[0].description;
      document.getElementById(
        `humidity${y + 1}`
      ).textContent = `Humidity:${daily[y].humidity}%`;

      y++;
    });
  });

// let today = new Date((fObject.daily[0].dt)*1000);
//     let dayone = new Date((fObject.daily[1].dt)*1000);
//     let day1 = dayOfWeek[today.getDay()];

let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified;

fetch("json/directory.json")
  .then(response => response.json ()) 
  .then((directory) => {
    let i = 0;
    const d = directory.directory;
console.log(d);
d.forEach(() => {

      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = d[i].name;
      p.textContent = d[i].telephone;
      p2.textContent = d[i].address;
      p3.textContent = d[i].website;
      image.setAttribute("src", d[i].imageurl);
      image.setAttribute("alt", `${d[i].name} logo`);

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(image);
i++;
     document.querySelector("div.cards").appendChild(card); 
    });
    
  });
