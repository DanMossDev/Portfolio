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