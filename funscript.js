

/* Function for onClick function to transform size of individual events + add text. */

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


/* THIS IS ALL RELATED TO THE ROUND DIV in TOP RIGHT CORNER */
/* Should display human pop growth over time.... */

let timeline = document.getElementsByClassName("outer-wrapper");
let runding = document.getElementById("firkant");

runding.style.visibility = "hidden";


$(timeline).on('scroll', function () {
    console.log("HORISONTAL = " + $(this).scrollTop());
    var number = $(this).scrollTop();
     if (number >= 10 && number < 4400) {
         runding.innerHTML = "1: Global Population: <br/>" +   (10000 + Math.floor(number) * 3);
         // breakpoint 100.000 BCE => number = 4300
     } else if (number > 4400 && number < 9300) {
         runding.innerHTML = "2: Global Population: <br/>" + ((Math.floor(number) * 10));
         // breakpoint 9000 bce = 9300
     }
     else if (number > 9300) {
         runding.innerHTML = "4: Global Population: <br/>" + ((Math.floor(number) * 100));
    }

})






$(window).on('scroll', function () {
    console.log("vertical = " + $(this).scrollTop());
    var verticalScroll = $(this).scrollTop();
    if (verticalScroll < 4800) {
        runding.style.visibility = "hidden";
    } else if (verticalScroll > 3360) {
        runding.style.visibility = "visible";
    }
})


