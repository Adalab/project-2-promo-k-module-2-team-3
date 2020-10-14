'use strict';
const formEl = document.querySelector('.fill__form');

function handleBlurForm(event){
  event.preventDefault();
  // console.log(previewEl); declarado en js-palettes
  switch(event.target.id){
    case 'name': previewEl.querySelector('.text-name').innerHTML = event.target.value;  //busco text-name y le pongo lo recibido en el event/target/id. 
    break;
    case 'work': previewEl.querySelector('.text-work').innerHTML = event.target.value;  //busco text-name y le pongo lo recibido en el event/target/id. 
    break;
    case 'mail': console.log('mail');
    break;
    case 'tel': console.log('tel');
    break;
    case 'linkedin': console.log('linkedin');
    break;
    case 'github': console.log('github');
    break;
  }

}

formEl.addEventListener('change',handleBlurForm);