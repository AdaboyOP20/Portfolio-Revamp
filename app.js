const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const pingpong = document.querySelector("#pingpong");
const mathquiz = document.querySelector("#mathquiz");
const digiclock = document.querySelector("#digiclock");
const colorpicker = document.querySelector("#colorpicker");
const hulk = document.querySelector("#hulk");
const stopwatch = document.querySelector("#stopwatch");
const camp = document.querySelector("#camp");


hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark");
});

pingpong.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/pingpong-game/", "_blank");
});

flappy.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/flappy-bird/", "_blank");
});

digiclock.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/digi-clock/", "_blank");
});

colorpicker.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/color-picker/", "_blank");
});

mathquiz.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/math-quiz/", "_blank");
});

hulk.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/hulk/", "_blank");
});

stopwatch.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/stopwatch/", "_blank");
});

camp.addEventListener("click", ()=>{
  window.open("https://adaboyop20.github.io/Camping-website-for-kids/", "_blank");
});