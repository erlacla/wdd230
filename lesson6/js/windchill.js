let temperature = parseInt(document.querySelector("#temperature").textContent);
let windspeed = parseInt(document.querySelector("#windspeed").textContent);
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
