//Movement Animation to happen hearable
const card_hearable = document.querySelector(".card");
const container_hearable = document.querySelector(".container");

//Items Container hearable
const title_hearable = document.querySelector(".title");
const hearable_hearable = document.querySelector(".hearable img");
const purchase_hearable = document.querySelector(".purchase");
const description_hearable = document.querySelector(".info h3");
const sizesB_hearable = document.querySelectorAll(".sizes button");
const circle_hearable = document.querySelector(".circle");


//Movement Animation to happen waistcoat
const card_waistcoat = document.querySelector(".card1");
const container_waistcoat = document.querySelector(".container1");

//Items
const title_waistcoat = document.querySelector(".title1");
const weste_waistcoat = document.querySelector(".weste1 img");
const purchase_waistcoat = document.querySelector(".purchase1");
const description_waistcoat = document.querySelector(".info1 h3");
const sizesB_waistcoat = document.querySelectorAll(".sizes1 button");
const circle_waistcoat = document.querySelector(".circle1");


//Movement Animation to happen Demo
const card_Demo = document.querySelector(".cardD");
const container_Demo = document.querySelector(".containerD");

//Items
const title_Demo = document.querySelector(".titleD");
const try_Demo = document.querySelector(".Test img");
const request_Demo = document.querySelector(".Anfrage");
const description_Demo = document.querySelector(".infoD h3");
const circle_Demo = document.querySelector(".circleD");


//Movement Animation to happen wearable
const card_wearable = document.querySelector(".card2");
const container_wearable = document.querySelector(".container2");

//Items
const title_wearable = document.querySelector(".title2");
const wearable_wearable = document.querySelector(".wearable1 img");
const purchase_wearable = document.querySelector(".purchase2");
const description_wearable = document.querySelector(".info2 h3");
const sizesB_wearable = document.querySelectorAll(".sizes2 button");
const circle_wearable = document.querySelector(".circle2");


//Movement Animation to happen 4
const card_4 = document.querySelector(".card3");
const container_4 = document.querySelector(".container3");

//Items
const title_4 = document.querySelector(".title3");
const smt_4 = document.querySelector(".pullover img");
const purchase_4 = document.querySelector(".purchase3");
const description_4 = document.querySelector(".info3 h3");
const sizesB_4 = document.querySelectorAll(".sizes3 button");
const circle_4 = document.querySelector(".circle3");


//Animate In Container hearable
container_hearable.addEventListener("mouseenter", (e) => {
  //remove transition
  card_hearable.style.transition = "none";

  //Popout
  title_hearable.style.transform = "translateZ(50px)";
  hearable_hearable.style.transform = "translateZ(60px) scale(1.1)";
  description_hearable.style.transform = "translateZ(40px)";
  sizesB_hearable.style.transform = "translateZ(30px)";
  purchase_hearable.style.transform = "translateZ(20px)";
  circle_hearable.style.transform = "translateZ(40px) scale(0.8)";
});

//Animate Out Container hearable
container_hearable.addEventListener("mouseleave", (e) => {
  card_hearable.style.transition = "all 0.5s ease";

  //Popback
  title_hearable.style.transform = "translateZ(0px)";
  hearable_hearable.style.transform = "translateZ(0px) scale(1)";
  description_hearable.style.transform = "translateZ(0px)";
  sizesB_hearable.style.transform = "translateZ(0px)";
  purchase_hearable.style.transform = "translateZ(0px)";
  circle_hearable.style.transform = "translateZ(0px) scale(1)";
});

sizesB_hearable.forEach(a => {
  a.addEventListener("click", function () {
    sizesB_hearable.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});


//Animate In Container waistcoat
container_waistcoat.addEventListener("mouseenter", (e) => {
  //remove transition
  card_waistcoat.style.transition = "none";

  //Popout
  title_waistcoat.style.transform = "translateZ(50px)";
  weste_waistcoat.style.transform = "translateZ(60px) scale(1.1)";
  description_waistcoat.style.transform = "translateZ(40px)";
  sizesB_waistcoat.style.transform = "translateZ(30px)";
  purchase_waistcoat.style.transform = "translateZ(20px)";
  circle_waistcoat.style.transform = "translateZ(40px) scale(0.8)";
});

//Animate Out Container waistcoat
container_waistcoat.addEventListener("mouseleave", (e) => {
  card_waistcoat.style.transition = "all 0.5s ease";

  //Popback
  title_waistcoat.style.transform = "translateZ(0px)";
  weste_waistcoat.style.transform = "translateZ(0px) scale(1)";
  description_waistcoat.style.transform = "translateZ(0px)";
  sizesB_waistcoat.style.transform = "translateZ(0px)";
  purchase_waistcoat.style.transform = "translateZ(0px)";
  circle_waistcoat.style.transform = "translateZ(0px) scale(1)";
});

sizesB_waistcoat.forEach(a => {
  a.addEventListener("click", function () {
    sizesB_waistcoat.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

//Animate In Container Demo
container_Demo.addEventListener("mouseenter", (e) => {
  //remove transition
  card_Demo.style.transition = "none";

  //Popout
  title_Demo.style.transform = "translateZ(50px)";
  try_Demo.style.transform = "translateZ(60px) scale(1.1)";
  description_Demo.style.transform = "translateZ(40px)";
  request_Demo.style.transform = "translateZ(20px)";
  circle_Demo.style.transform = "translateZ(40px) scale(0.96)";
});

//Animate Out Container Demo
container_Demo.addEventListener("mouseleave", (e) => {
  card_Demo.style.transition = "all 0.5s ease";

  //Popback
  title_Demo.style.transform = "translateZ(0px)";
  try_Demo.style.transform = "translateZ(0px) scale(1)";
  description_Demo.style.transform = "translateZ(0px)";
  request_Demo.style.transform = "translateZ(0px)";
  circle_Demo.style.transform = "translateZ(0px) scale(1)";
});


//Animate In Container wearable
container_wearable.addEventListener("mouseenter", (e) => {
  //remove transition
  card_wearable.style.transition = "none";

  //Popout
  title_wearable.style.transform = "translateZ(50px)";
  wearable_wearable.style.transform = "translateZ(60px) scale(1.1)";
  description_wearable.style.transform = "translateZ(40px)";
  sizesB_wearable.style.transform = "translateZ(30px)";
  purchase_wearable.style.transform = "translateZ(20px)";
  circle_wearable.style.transform = "translateZ(40px) scale(0.8)";
});

//Animate Out Container wearable
container_wearable.addEventListener("mouseleave", (e) => {
  card_wearable.style.transition = "all 0.5s ease";

  //Popback
  title_wearable.style.transform = "translateZ(0px)";
  wearable_wearable.style.transform = "translateZ(0px) scale(1)";
  description_wearable.style.transform = "translateZ(0px)";
  sizesB_wearable.style.transform = "translateZ(0px)";
  purchase_wearable.style.transform = "translateZ(0px)";
  circle_wearable.style.transform = "translateZ(0px) scale(1)";
});

sizesB_wearable.forEach(a => {
  a.addEventListener("click", function () {
    sizesB_wearable.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});


//Animate In Container 4
container_4.addEventListener("mouseenter", (e) => {
  //remove transition
  card_4.style.transition = "none";

  //Popout
  title_4.style.transform = "translateZ(50px)";
  smt_4.style.transform = "translateZ(60px) scale(1.1)";
  description_4.style.transform = "translateZ(40px)";
  sizesB_4.style.transform = "translateZ(30px)";
  purchase_4.style.transform = "translateZ(20px)";
  circle_4.style.transform = "translateZ(40px) scale(0.8)";
});

//Animate Out Container 4
container_4.addEventListener("mouseleave", (e) => {
  card_4.style.transition = "all 0.5s ease";

  //Popback
  title_4.style.transform = "translateZ(0px)";
  smt_4.style.transform = "translateZ(0px) scale(1)";
  description_4.style.transform = "translateZ(0px)";
  sizesB_4.style.transform = "translateZ(0px)";
  purchase_4.style.transform = "translateZ(0px)";
  circle_4.style.transform = "translateZ(0px) scale(1)";
});

sizesB_4.forEach(a => {
  a.addEventListener("click", function () {
    sizesB_4.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

