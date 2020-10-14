'use strict';
const palettesEl = document.querySelector('.design__container__options');
const previewEl = document.querySelector('.preview__card');

// console.log(palettesEl);

const handleClick = (event)=> {
  
// console.log(event.target.value);
switch (event.target.value){
  case '1' :  previewEl.classList.add('palette1');
  event.target.setAttribute("checked", "checked");
  previewEl.classList.remove('palette2');   //realmente funciona sin quitarlas por el orden del css
  previewEl.classList.remove('palette3');
  break;
  case '2' :  previewEl.classList.add('palette2');
  event.target.setAttribute("checked", "checked");
  previewEl.classList.remove('palette1');
  previewEl.classList.remove('palette3');
  break;
  case '3' :  previewEl.classList.add('palette3');
  event.target.setAttribute("checked", "checked");
  previewEl.classList.remove('palette2');
  previewEl.classList.remove('palette1');
  break;
}
}
palettesEl.addEventListener('click',handleClick);
