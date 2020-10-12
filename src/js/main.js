"use strict";

const inputElementCold = document.querySelector(".js-inputCold");
const inputElementWarm = document.querySelector(".js-inputWarm");
const inputElementMedium = document.querySelector(".js-inputMedium");

const name = document.querySelector(".js-text-name");
const work = document.querySelector(".js-text-work");
const previewBorder = document.querySelector(".js-preview__card--text");

const icons = document.querySelectorAll(".js-icons");
const socialNetworks = document.querySelectorAll(".js-socialNetworks");

function changeCold() {
  paintName("js-paletteColdA", "js-paletteWarmA", "js-paletteMediumA");
  paintWork("js-paletteColdB", "js-paletteWarmB", "js-paletteMediumB");
  paintBorder("js-paletteColdB", "js-paletteWarmB", "js-paletteMediumB");
  paintIcons("js-paletteColdC", "js-paletteWarmC", "js-paletteMediumC");
  paintNetworks("js-paletteColdA", "js-paletteWarmA", "js-paletteMediumA");
}

function changeWarm() {
  paintName("js-paletteWarmA", "js-paletteColdA", "js-paletteMediumA");
  paintWork("js-paletteWarmB", "js-paletteColdB", "js-paletteMediumB");
  paintBorder("js-paletteWarmB", "js-paletteColdB", "js-paletteMediumB");
  paintIcons("js-paletteWarmC", "js-paletteColdC", "js-paletteMediumC");
  paintNetworks("js-paletteWarmA", "js-paletteColdA", "js-paletteMediumA");
}

function changeMedium() {
  paintName("js-paletteMediumA", "js-paletteColdA", "js-paletteWarmA");
  paintWork("js-paletteMediumB", "js-paletteColdB", "js-paletteWarmB");
  paintBorder("js-paletteMediumB", "js-paletteColdB", "js-paletteWarmB");
  paintIcons("js-paletteMediumC", "js-paletteColdC", "js-paletteWarmC");
  paintNetworks("js-paletteMediumA", "js-paletteColdA", "js-paletteWarmA");
}

inputElementCold.addEventListener("click", changeCold);
inputElementWarm.addEventListener("click", changeWarm);
inputElementMedium.addEventListener("click", changeMedium);

function paintName(classToAdd, classToRemove1, classToRemove2) {
  name.classList.add(classToAdd);
  name.classList.remove(classToRemove1);
  name.classList.remove(classToRemove2);
}

function paintWork(classToAdd, classToRemove1, classToRemove2) {
  work.classList.add(classToAdd);
  work.classList.remove(classToRemove1);
  work.classList.remove(classToRemove2);
}

function paintBorder(classToAdd, classToRemove1, classToRemove2) {
  previewBorder.classList.add(classToAdd);
  previewBorder.classList.remove(classToRemove1);
  previewBorder.classList.remove(classToRemove2);
}

function paintIcons(classToAdd, classToRemove1, classToRemove2) {
  for (const icon of icons) {
    icon.classList.add(classToAdd);
    icon.classList.remove(classToRemove1);
    icon.classList.remove(classToRemove2);
  }
}

function paintNetworks(classToAdd, classToRemove1, classToRemove2) {
  for (const network of socialNetworks) {
    network.classList.add(classToAdd);
    network.classList.remove(classToRemove1);
    network.classList.remove(classToRemove2);
  }
}
