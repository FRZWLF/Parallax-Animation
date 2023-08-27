var menu = document.querySelector("header");
var menuImg = document.querySelector("header img");
var firstButton = document.querySelector(".warenkorb-icon");
var secondButton = document.querySelector(".buy-blue");
var menuHeight = menu.offsetHeight;
var lastScroll = 0;

document.querySelector('.col').ontouchstart = function() {
    this.classList.toggle('hover');
}


//Menü verschwinden
window.addEventListener("scroll", function () {
    var currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 0) {
        console.log(0);
        menu.classList.add("smaller");
        menuImg.style.height = "50px";
        menuImg.style.width = "auto";
        firstButton.style.display = "none";
        secondButton.style.display = "block";
    } else {
        menu.classList.remove("smaller");
        menuImg.style.height = "100px";
        menuImg.style.width = "200px";
        firstButton.style.display = "inline-flex";
        secondButton.style.display = "none";
    }
    lastScroll = currentScroll;
});
