"use strict";

const btn = document.querySelector(".js__btn");
const shareFinish = document.querySelector(".js__share__finish");

function finishClick() {
  btn.classList.remove("js-button-create");
  shareFinish.classList.remove("js__finish-hidden");
}

btn.addEventListener("click", finishClick);
