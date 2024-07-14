"use strict";

//assigning
const winput = document.querySelector(".winput");
const hinput = document.querySelector(".hinput");
const result = document.querySelector(".screen");
const button = document.querySelector(".bmibutton");

let res;
let num1;
let num2;

button.addEventListener("click", function () {
  num1 = Number(winput.value);
  num2 = Number(hinput.value);
  num2 = num2 / 100;
  if (num1 != 0 && num2 != 0) {
    res = num1 / (num2 * num2);
    let roundedNumber = res.toFixed(4);
    result.textContent = roundedNumber;
  }
});
