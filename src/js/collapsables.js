/* eslint-disable no-console */
"use strict";

//listener de arrow
const arrowEls = document.querySelectorAll(".fa-chevron-up"); //puede ser cualquiera de los 3 arrows.

const clickArrow = function (event) {
  //deberemos deferenciar qué sección ha sido clickada y si pliega o despliega. Según clases activas..
  const element = event.target;

  if (element.classList.contains("design__title--arrow")) {
    // console.log('entro en collapsable DESIGN');
    const section = document.querySelector(".design__form");
    element.classList.toggle("js-fa-chevron-up");
    section.classList.toggle("js-design__form");
  }
  if (element.classList.contains("fill__title--arrow")) {
    // console.log('entro en collapsable rellena');
    const section = document.querySelector(".fill__form");
    element.classList.toggle("js-fa-chevron-up");
    section.classList.toggle("js-fill__form");
  }
  if (element.classList.contains("share__title--arrow")) {
    const section = document.querySelector(".share__section");
    const shareEl = document.querySelector(".share");

    element.classList.toggle("js-fa-chevron-up");
    section.classList.toggle("js-share__section");
    shareEl.classList.toggle("js-share");
  }
};

// ESCUCHANDO LAS 3 FLECHAS
for (const arrow of arrowEls) {
  arrow.addEventListener("click", clickArrow);
}
