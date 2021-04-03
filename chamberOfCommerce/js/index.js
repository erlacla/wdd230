function toggleMenu() {
    document.querySelector("#nav").classList.toggle("hide");
  }


  const forecast =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.424564&lon=-111.833267&exclude=minutely,hourly&units=imperial&appid=193243ab32ebe2eba039565713596c16";
  fetch(forecast)
  .then((response) => response.json())
  .then((fObject) => {
    console.log(fObject);
    const daily = fObject.daily;
    console.log(daily);
    let y = 0;
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

    daily.forEach(() => {
      let d = new Date((daily[y].dt)*1000);
      
      document.getElementById(`day${y + 1}`).textContent =
        dayOfWeek[d.getDay()];
      document.getElementById(`forecast${y + 1}`).innerHTML =
        Math.round(daily[y].temp.day) + "&#176;F";
        const src =
        `https://openweathermap.org/img/wn/${daily[y].weather[0].icon}@2x.png`;
      const alt = daily[y].weather[0].description;
      document.getElementById(`icon${y + 1}`).setAttribute("src", src);
      document
        .getElementById(`icon${y + 1}`)
        .setAttribute("alt", `${alt} icon`);
      y++;
    });
  });

// let today = new Date((fObject.daily[0].dt)*1000);
//     let dayone = new Date((fObject.daily[1].dt)*1000);
//     let day1 = dayOfWeek[today.getDay()];


  let modified = document.lastModified;
  document.querySelector("#modified").innerHTML = modified;