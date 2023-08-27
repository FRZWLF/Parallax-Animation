const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 7300,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 800,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);


//Textanime für Intro
var intro_left1 = document.querySelector('.intro-left1');
intro_left1.classList.add('invisible');
var intro_left2 = document.querySelector('.intro-left2');
intro_left2.classList.add('invisible');
var intro_right1 = document.querySelector('.intro-right1');
intro_right1.classList.add('invisible');


//Menü verschwinden
var menu = document.querySelector("header");
var menuImg = document.querySelector("header img");
var firstButton = document.querySelector(".warenkorb-icon");
var secondButton = document.querySelector(".buy-blue");
var menuHeight = menu.offsetHeight;
var lastScroll = 0;


const counter = document.querySelector('#counter');
var count = 0;


// Function to show the intro left 1
function showIntroLeft1() {
  intro_left1.classList.remove('invisible');
  intro_left1.style.top = '35%';
}

// Function to hide the intro left 1
function hideIntroLeft1() {
  intro_left1.classList.add('invisible');
}

// Function to show the intro right 1
function showIntroRight1() {
  intro_right1.classList.remove('invisible');
  intro_right1.style.top = '16%';
}

// Function to hide the intro right 1
function hideIntroRight1() {
  intro_right1.classList.add('invisible');
}

// Function to show the intro left 2
function showIntroLeft2() {
  intro_left2.classList.remove('invisible');
  intro_left2.style.top = '50%';
}

// Function to hide the intro left 2
function hideIntroLeft2() {
  intro_left2.classList.add('invisible');
}


function addItemToCart() {
  //TODO: correct value
  console.log("function executed")
  count++;
  counter.innerHTML = count;
}


// Function to make the menu smaller
function makeMenuSmaller() {
  menu.classList.add("smaller");
  menuImg.style.height = "50px";
  menuImg.style.width = "auto";
  firstButton.style.display = "none";
  secondButton.style.display = "block";
}

// Function to make the menu bigger
function makeMenuBigger() {
  menu.classList.remove("smaller");
  menuImg.style.height = "100px";
  menuImg.style.width = "200px";
  firstButton.style.display = "inline-flex";
  secondButton.style.display = "none";
}


//Event Listener for scrolling: Intro-Description-Text
window.addEventListener('scroll', function () {
  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check the current scroll position and call the appropriate function
  switch (true) {
    case (scrollTop > 1000 && scrollTop <= 2500):
      showIntroLeft1();
      break;
    case (scrollTop > 2500):
      hideIntroLeft1();
      break;
    default:
      hideIntroLeft1();
      break;
  }

  switch (true) {
    case (scrollTop > 3000 && scrollTop <= 5000):
      showIntroRight1();
      break;
    case (scrollTop > 5000):
      hideIntroRight1();
      break;
    default:
      hideIntroRight1();
      break;
  }

  switch (true) {
    case (scrollTop > 6600 && scrollTop <= 7300):
      showIntroLeft2();
      break;
    case (scrollTop > 7300):
      hideIntroLeft2();
      break;
    default:
      hideIntroLeft2();
      break;
  }
});


//Event Listener for scrolling: Menu-smaller
window.addEventListener("scroll", function () {
  // Get the current scroll position
  var currentScroll = window.scrollY;
  // Check the current scroll position and call the appropriate function
  switch (true) {
    case (currentScroll > lastScroll && currentScroll > 0):
      makeMenuSmaller();
      break;
    default:
      makeMenuBigger();
      break;
  }
  // Save the current scroll position for the next scroll event
  lastScroll = currentScroll;
});


