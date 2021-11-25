

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


/*  Because this code measures how far you have scrolled, and the timeline will be narrower or wider depending on your screen size,
    it will ONLY work with a screen width of exactly 1920px. We were about to scrap this idea, but decided to let it stay, and hide the element for other resolutions.*/

$(timeline).on('scroll', function () {
    console.log("HORISONTAL = " + $(this).scrollTop());
    var number = $(this).scrollTop();
     if (number >= 10 && number < 4400) {
         runding.innerHTML = "Global Population (approximate): <br/>" +   (Math.floor(number) * 4 + 10000);
         // breakpoint 100.000 BCE => number = 4300
     } else if (number > 4400 && number < 8000) {
         runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-4400) * 16 + Math.floor(4400) * 4  + 10000);
         // breakpoint 9000 bce = 9300
     } else if (number > 8000 && number < 9300) {
         runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-8000) * 25 + Math.floor(8000-4400) * 16 + Math.floor(4400) * 4  + 10000);
     }
     else if (number > 9300 && number < 17500) {
         runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-9300) * 260 + Math.floor(9300-8000) * 25 + Math.floor(8000-4400) * 16 + Math.floor(4400) * 4  + 10000);
    }
    else if (number > 17500 && number < 30000) {
        runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-17500) * 21000 + Math.floor(17500-9300) * 260 + Math.floor(9300-8000) * 25 + Math.floor(8000-4400) * 16 + Math.floor(4400) * 4  + 10000);
    }
    else if (number > 30000 && number < 34000) {
        runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-30000) * 40000 + Math.floor(30000-17500) * 21000 + Math.floor(17500-9300) * 260 + Math.floor(9300-8000) * 25 + Math.floor(8000-4400) * 16 + Math.floor(4400) * 4  + 10000);
    }
    else if (number > 34000 && number < 45000) {
        runding.innerHTML = "Global Population: (approximate)<br/>" + (Math.floor(number-34000) * 320000 + Math.floor(34000-30000) * 40000 + Math.floor(30000-17500) * 21000 + Math.floor(17500-9300) * 260 + Math.floor(9300-8000) * 25 + Math.floor(8000-4400) * 16 + Math.floor(4400) * 4  + 10000);
    }
    else if (number > 45000) {
        runding.innerHTML = "Global Population: (approximate)<br/>?????";
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


