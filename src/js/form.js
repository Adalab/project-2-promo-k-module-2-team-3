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

for (let i = 0; i < form.length; i++) {
  function fillpreview(event) {
    if (i === 0) {
      previewName.innerHTML = event.currentTarget.value;
    } else if (i === 1) {
      previewJob.innerHTML = event.currentTarget.value;
    } else if (i === 2) {
      const mailLink = "mailto:" + event.currentTarget.value;
      previewMail.setAttribute("href", mailLink);
    } else if (i === 3) {
      const phoneLink = "tel:" + event.currentTarget.value;
      previewPhone.setAttribute("href", phoneLink);
    } else if (i === 4) {
      const linkedinLink = event.currentTarget.value;
      previewLinkedin.setAttribute("href", linkedinLink);
    } else {
      const githubLink = event.currentTarget.value;
      previewGithub.setAttribute("href", githubLink);
    }
  }
  form[i].addEventListener("keyup", fillpreview);
}

function reset() {
  for (let i = 0; i < form.length; i++) {
    form[i].value = "";
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
}
resetButton.addEventListener("click", reset);
