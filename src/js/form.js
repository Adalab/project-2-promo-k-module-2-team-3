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
const inputName = document.querySelector(".js-input-name");
const inputJob = document.querySelector(".js-input-job");
const mailLink = document.querySelector(".js-input-mail");
const phoneLink = document.querySelector(".js-input-phone");
const linkedinLink = document.querySelector(".js-input-linkedin");
const githubLink = document.querySelector(".js-input-github");

function fillpreview() {
  previewName.innerHTML = inputName.value;
  if (!inputName.value) {
    previewName.innerHTML = "Nombre Apellido";
  }

  previewJob.innerHTML = inputJob.value;
  if (!inputJob.value) {
    previewJob.innerHTML = "Front-end developer";
  }
  const mailString = "mailto:" + mailLink.value;
  previewMail.setAttribute("href", mailString);
  const phoneString = "tel:" + phoneLink.value;
  previewPhone.setAttribute("href", phoneString);

  const linkedinString = "https://www.linkedin.com/in/" + linkedinLink.value;
  previewLinkedin.setAttribute("href", linkedinString);

  const githubString = "https://github.com/" + githubLink.value;
  previewGithub.setAttribute("href", githubString);
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("keyup", fillpreview);
}

function reset() {
  for (let i = 0; i < form.length; i++) {
    form[i].value = "";
  }
  inputElementCold.click();
  fillpreview();
  profileReset.style.backgroundImage = "url('./assets/images/totoro.jpg')";
  previewReset.style.backgroundImage = "";
}
resetButton.addEventListener("click", reset);
