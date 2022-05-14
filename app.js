//Handles the navbar being sticky

let navbar = document.getElementById("navbar")
let sticky = navbar.offsetTop;


window.onscroll = function() {checkSticky()};

function checkSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}


//Handles items fading in on scroll
let loadArray = document.getElementsByClassName("notloaded");

window.onscroll = function() {checkLoad()};

function checkLoad() {
    for (let load of loadArray) {
      if (document.documentElement.scrollTop > load.getBoundingClientRect().top) {
          load.classList.remove("notloaded");
          load.classList.add("loaded");
          loadArray = document.getElementsByClassName("notloaded");
      }
    }
}