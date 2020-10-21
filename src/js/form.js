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

let data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function getInfoToStorage() {
  let mydata = localStorage.getItem("userData");
  data = JSON.parse(mydata);
  if (data !== null) {
    form[0].value = data.name;
    form[1].value = data.job;
    form[2].value = data.email;
    form[3].value = data.phone;
    form[4].value = data.linkedin;
    form[5].value = data.github;
    fillpreview();
  }
}

function setToLocalStorage() {
  const stringData = JSON.stringify(data);
  localStorage.setItem("userData", stringData);
}

function saveField(ev) {
  const inputKey = ev.currentTarget.name;
  data[inputKey] = ev.currentTarget.value;
  setToLocalStorage();
  fillpreview();
}

function fillpreview() {
  previewName.innerHTML = data.name || "Nombre Apellido";
  previewJob.innerHTML = data.job || "Front-end developer";
  const mailLink = "mailto:" + data.email;
  previewMail.setAttribute("href", mailLink);
  const phoneLink = "tel:" + data.phone;
  previewPhone.setAttribute("href", phoneLink);
  const linkedinLink = "https://www.linkedin.com/in/" + data.linkedin;
  previewLinkedin.setAttribute("href", linkedinLink);
  const githubLink = "https://github.com/" + data.github;
  previewGithub.setAttribute("href", githubLink);
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("keyup", saveField);
}

function validarEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

function validarTelf(phoneNumber) {
  let regex = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
  return regex.test(phoneNumber) ? true : false;
}

function getErrors() {
  let message = "";
  if (!data.name) {
    message += "Tienes que rellenar tu nombre. ";
  }
  if (!data.job) {
    message += "Tienes que rellenar tu puesto de trabajo. ";
  }

  if (!data.email) {
    message += "Tienes que rellenar tu email. ";
  } else if (validarEmail(data.email) === false) {
    message += `${data.email} no es un email correcto. `;
  }

  if (!data.phone) {
    message += "Tienes que rellenar tu teléfono. ";
  } else if (validarTelf(data.phone) === false) {
    message += `${data.phone} no es un número de teléfono correcto. `;
  }
  //Create element con content message
  if (message === "") {
    btn.classList.add("js-button-create");
    btn.removeAttribute("disabled");
    const items = document
      .querySelector(".share__section")
      .querySelector(".paragraph");
    items.remove();
  } else {
    //buscamos el p anterior si existiera en esta sección
    if (document.querySelector(".paragraph")) {
      const items = document
        .querySelector(".share__section")
        .querySelector(".paragraph");
      items.remove();
    }
    //Creamos el elemento parrafo de errores.
    const p = document.createElement("p");
    const messageText = document.createTextNode(message);
    p.appendChild(messageText);
    p.style = "color:red; font-family:open-sans; font-size:10px; margin:10px";
    p.classList.add("paragraph");
    document.querySelector(".share__section").insertBefore(p, btn);

    // console.log(message);
  }
}

function reset() {
  data.palette = "";
  data.name = "";
  data.job = "";
  data.phone = "";
  data.email = "";
  data.linkedin = "";
  data.github = "";
  data.photo = "";
  for (let i = 0; i < form.length; i++) {
    form[i].value = "";
  }
  inputElementCold.click();
  fillpreview();
  profileReset.style.backgroundImage = "url('./assets/images/totoro.jpg')";
  previewReset.style.backgroundImage = "";
}
resetButton.addEventListener("click", reset);

//START APP
getInfoToStorage();

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("blur", getErrors);
}
