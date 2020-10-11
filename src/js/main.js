"use strict";

const inputElementCold = document.querySelector(".js-inputCold");
const inputElementWarm = document.querySelector(".js-inputWarm");
const inputElementMedium = document.querySelector(".js-inputMedium");

const name = document.querySelector(".js-text-name");
const work = document.querySelector(".js-text-work");
const icons = document.querySelectorAll(".js-icons");

const socialNetworks = document.querySelectorAll(".js-socialNetworks");

function changeCold() {
  name.classList.add("js-paletteColdA");
  work.classList.add("js-paletteColdB");

  for (const icon of icons) {
    icon.classList.add("js-paletteColdC");
  }

  for (const network of socialNetworks) {
    network.classList.add("js-paletteColdA");
  }
}

function changeWarm() {
  name.classList.add("js-paletteWarmA");
  work.classList.add("js-paletteWarmB");

  for (const icon of icons) {
    icon.classList.add("js-paletteWarmC");
  }

  for (const network of socialNetworks) {
    network.classList.add("js-paletteWarmA");
  }
}

function changeMedium() {
  name.classList.add("js-paletteMediumA");
  work.classList.add("js-paletteMediumB");

  for (const icon of icons) {
    icon.classList.add("js-paletteMediumC");
  }

  for (const network of socialNetworks) {
    network.classList.add("js-paletteMediumA");
  }
}

inputElementCold.addEventListener("click", changeCold);
inputElementWarm.addEventListener("click", changeWarm);
inputElementMedium.addEventListener("click", changeMedium);
