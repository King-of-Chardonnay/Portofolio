// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// document.querySelector("h1").onmouseover = event => {
//     let iterations = 0;

//     const interval = setInterval(() => {
//             event.target.innerText = event.target.innerText.split("")
//                 .map((letter, index) => {
//                     if (index < iterations) {
//                         return event.target.dataset.value[index];
//                     }


//                     return letters[Math.floor(Math.random() * 26)]
//                 })
//                 .join("");

//             if (iterations >= event.target.dataset.value.length) clearInterval(interval);

//             iterations += 1 / 3;
//         },
//         95);
// }




let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-searchengin");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}



var hours = document.getElementById('hours'),
    minuts = document.getElementById('minuts'),
    seconds = document.getElementById('seconds');
dat = document.getElementById('dat');
var i = 0;

function showdate() {
    'use strict';
    var mydate = new Date();
    var myscond = mydate.getSeconds(),
        mymin = mydate.getMinutes(),
        myhour = mydate.getHours();
    // hands of my clock
    //seconds
    seconds.style.transform = "rotate(" + myscond * 6 + "deg)";
    //minutes
    minuts.style.transform = "rotate(" + mymin * 6 + "deg)";
    // Hours
    hours.style.transform = "rotate(" + myhour * 30 + "deg)";
    // text of my clock
    dat.textContent = myhour + ':' + mymin + ':' + myscond;
}
window.onload = function() {
    'use strict';
    setInterval(showdate, 500);
};

var typingEffect = new Typed(".multiText", {
    strings: ["developer", "designer", "dJ", "dancer", "dad"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1500
})


const wrapper = document.getElementById("wrapper");
const wrap = document.getElementById("polygon-wrap")

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
}

const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    wrap.dataset.configuration = combination.configuration;
    wrap.dataset.roundness = combination.roundness;

    prev = index;
}, 2500);