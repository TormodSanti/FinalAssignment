
let display = document.getElementById("firkant");




let fire_container = document.getElementById("fire-container");





document.getElementById("fire-container").addEventListener("mouseover", (e) => {
    firkant.innerText = "920.000 BCE: Evidence of cooking by fire";
});

document.getElementById("fire-container").addEventListener("mouseout", (e) => {
    firkant.innerText = "";
});