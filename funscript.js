

function resize(circleID, textID) {
    let element = document.getElementById(circleID);
    let text = document.getElementById(textID);
    element.classList.toggle("circleBig");
    if (element.classList.contains("circleBig")) {
        text.style.opacity = "1";
    } else {
        text.style.opacity = "0";
    }
}

