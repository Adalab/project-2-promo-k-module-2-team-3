/* eslint-disable quotes */
"use strict";

const inputElementCold = document.querySelector(".js-inputCold");
const inputElementWarm = document.querySelector(".js-inputWarm");
const inputElementMedium = document.querySelector(".js-inputMedium");
const previewElement = document.querySelector(".js-preview__card");

function changeCold() {
  previewElement.classList.remove("js-paletteWarm");
  previewElement.classList.remove("js-paletteMedium");
  previewElement.classList.add("js-paletteCold");
}

function changeWarm() {
  previewElement.classList.remove("js-paletteCold");
  previewElement.classList.remove("js-paletteMedium");
  previewElement.classList.add("js-paletteWarm");
}

function changeMedium() {
  previewElement.classList.remove("js-paletteCold");
  previewElement.classList.remove("js-paletteWarm");
  previewElement.classList.add("js-paletteMedium");
}

inputElementCold.addEventListener("click", changeCold);
inputElementWarm.addEventListener("click", changeWarm);
inputElementMedium.addEventListener("click", changeMedium);
