const forecast =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.424564&lon=-111.833267&exclude=minutely,hourly&units=imperial&appid=193243ab32ebe2eba039565713596c16";
fetch(forecast)
  .then((response) => response.json())
  .then((fObject) => {
    let daily = fObject.daily;
    daily.splice(4, 5, 6, 7);
    daily.splice(4, 5);
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
