fetch("json/directory.json")
  .then((response) => response.json())
  .then((directory) => {
    let i = 0;
    const d = directory.directory;

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
      card.appendChild(image);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);

      i++;
      document.getElementById("view").appendChild(card);
    });
  });
