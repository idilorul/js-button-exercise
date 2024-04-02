const buttonA = document.querySelector(".button__a");
const buttonB = document.querySelector(".button__b");
const buttonC = document.querySelector(".button__c");
const buttonD = document.querySelector(".button__d");

buttonA.addEventListener("mouseover", function () {
  buttonA.style.backgroundColor = "rgb(233, 84, 173)";
});

buttonA.addEventListener("mouseout", function () {
  buttonA.style.backgroundColor = "rgb(249, 165, 215)";
  document.body.style.backgroundColor = "rgb(226, 193, 238)";
});

buttonA.addEventListener("click", function () {
  buttonA.style.backgroundColor = "rgb(252, 2, 152)";
  document.body.style.backgroundColor = "rgb(252, 2, 152)";
});

buttonB.addEventListener("mouseover", function () {
  buttonB.style.backgroundColor = "rgb(86, 222, 97)";
});

buttonB.addEventListener("mouseout", function () {
  buttonB.style.backgroundColor = "rgb(161, 246, 168)";
  document.body.style.backgroundColor = "rgb(226, 193, 238)";
});

buttonB.addEventListener("click", function () {
  buttonB.style.backgroundColor = "rgb(1, 252, 22)";
  document.body.style.backgroundColor = "rgb(1, 252, 22)";
});

buttonC.addEventListener("mouseover", function () {
  buttonC.style.backgroundColor = "rgb(81, 204, 211)";
});

buttonC.addEventListener("mouseout", function () {
  buttonC.style.backgroundColor = "rgb(161, 240, 244)";
  document.body.style.backgroundColor = "rgb(226, 193, 238)";
});

buttonC.addEventListener("click", function () {
  buttonC.style.backgroundColor = "rgb(3, 229, 241)";
  document.body.style.backgroundColor = "rgb(3, 229, 241)";
});

buttonD.addEventListener("mouseover", function () {
  buttonD.style.backgroundColor = "rgb(199, 215, 78)";
});

buttonD.addEventListener("mouseout", function () {
  buttonD.style.backgroundColor = "rgb(239, 248, 169)";
  document.body.style.backgroundColor = "rgb(226, 193, 238)";
});

buttonD.addEventListener("click", function () {
  buttonD.style.backgroundColor = "rgb(223, 252, 3)";
  document.body.style.backgroundColor = "rgb(223, 252, 3)";
});
