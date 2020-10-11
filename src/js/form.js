"use strict";

const form = document.querySelectorAll(".js__form");
const previewName = document.querySelector(".js__preview-name");
const previewWork = document.querySelector(".js__preview-work");
const previewPhone = document.querySelector(".js__preview-phone");
const previewMail = document.querySelector(".js__preview-mail");
const previewLinkedin = document.querySelector(".js__preview-linkedin");
const previewGithub = document.querySelector(".js__preview-github");

for (let i = 0; i < form.length; i++) {
  function fillpreview(event) {
    if (i === 0) {
      previewName.innerHTML = event.currentTarget.value;
    } else if (i === 1) {
      previewWork.innerHTML = event.currentTarget.value;
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
