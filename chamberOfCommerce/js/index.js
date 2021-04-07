function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

function alert() {
  alert(fObject.alert.event + fObject.alert.description);
}

let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified;

function gridView() {
  document.querySelector("div.list").classList.remove("list");
  document.getElementById("view").classList.add("grid");
}

function listView() {
  document.querySelector("div.grid").classList.remove("grid");
  document.getElementById("view").classList.add("list");
}
