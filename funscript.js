let circle = document.getElementsByClassName("circle");
let text_container = docment.getElementsByClassName("text-container")



circle.addEventListener("click", (e) => {
    circle.width(200);
    circle.height(200);
})




function resize() {
    let element = document.getElementById("denne");
    let text = document.getElementById("blurg");
    element.classList.toggle("circleBig");
    if (element.classList.contains("circleBig")) {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
    }



}