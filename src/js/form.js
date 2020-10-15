/* eslint-disable quotes */
"use strict";

const form = document.querySelectorAll(".js__form");
const previewName = document.querySelector(".js__preview-name");
const previewJob = document.querySelector(".js__preview-job");
const previewPhone = document.querySelector(".js__preview-phone");
const previewMail = document.querySelector(".js__preview-mail");
const previewLinkedin = document.querySelector(".js__preview-linkedin");
const previewGithub = document.querySelector(".js__preview-github");
const resetButton = document.querySelector(".js__btn-reset");
const profileReset = document.querySelector(".js__profile-image");
const previewReset = document.querySelector(".js__profile-preview");

function fillpreview() {
  const inputNameValue = document.querySelector(".js-input-name").value;
  previewName.innerHTML = inputNameValue;
  if (!inputNameValue) {
    previewName.innerHTML = "Nombre Apellido";
  }
  const inputJobValue = document.querySelector(".js-input-job").value;
  previewJob.innerHTML = inputJobValue;
  if (!inputJobValue) {
    previewJob.innerHTML = "Front-end developer";
  }
  const mailLink = "mailto:" + document.querySelector(".js-input-mail").value;
  previewMail.setAttribute("href", mailLink);

  const phoneLink = "tel:" + document.querySelector(".js-input-phone").value;
  previewPhone.setAttribute("href", phoneLink);

  const linkedinLink =
    "https://www.linkedin.com/in/" +
    document.querySelector(".js-input-linkedin").value;
  previewLinkedin.setAttribute("href", linkedinLink);

  const githubLink =
    "https://github.com/" + document.querySelector(".js-input-github").value;
  previewGithub.setAttribute("href", githubLink);
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("keyup", fillpreview);
}

function reset() {
  for (let i = 0; i < form.length; i++) {
    form[i].value = "";
  }
  previewName.innerHTML = "Nombre Apellido";
  previewJob.innerHTML = "Front-end unicornio";
  previewMail.removeAttribute("href");
  previewPhone.removeAttribute("href");
  previewLinkedin.removeAttribute("href");
  previewGithub.removeAttribute("href");
  profileReset.style.backgroundImage =
    "url(https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE)";
  previewReset.style.backgroundImage = "";
}
resetButton.addEventListener("click", reset);
