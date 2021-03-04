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

myTowns.forEach(town => {
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