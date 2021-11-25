

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



let timeline = document.getElementsByClassName("outer-wrapper");
let display = document.getElementById("firkant");


$(timeline).on('scroll', function () {
    console.log($(this).scrollTop());
    var number = $(this).scrollTop();

    if (number > 0) {
        display.innerHTML = "human population = " + number;
    }

})


