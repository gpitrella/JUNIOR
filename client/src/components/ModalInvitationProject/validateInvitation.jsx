import validator from 'validator';
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

export default function validateInvitation(input, errors){

  // TERMINAR DE PROGRAMAR:  ESTA PRIMERA PARTE VA FUNCIONANDO
    // if(!validator.isEmpty(input.text)) {
    //   if(errors.text) { delete errors.text }
    //   document.getElementById('text').classList.add('form__group-correcto')
    //   document.getElementById('text').classList.remove('form__group-incorrecto')
    //   document.getElementById('#text').classList.remove('form__input-error-activo')
    //   document.getElementById('form__input-error').classList.add('display_form__input-error')
    //   document.getElementById('form__input-error').classList.remove('form__input-error-activo')
    // } else {
    //   errors.text = "Agrega una nota para el colaborador"
    //   document.getElementById('text').classList.add('form__group-incorrecto')
    //   document.getElementById('text').classList.remove('form__group-correcto')
    //   document.getElementById('text').classList.add('form__input-error-activo')
    //   document.getElementById('form__input-error').classList.remove('display_form__input-error')
    //   document.getElementById('form__input-error').classList.add('form__input-error-activo')
    // };




    // if(!validator.isURL(input.linkedin)) {
    //   if(errors.linkedin) { delete errors.linkedin }
    //   document.getElementById('linkedin').classList.add('form__group-correcto')
    //   document.getElementById('linkedin').classList.remove('form__group-incorrecto')
    //   // document.querySelector('#linkedin .form__input-error').classList.remove('form__input-error-activo')
    // } else {
    //   errors.linkedin = "Agrega tu link a linkedin."
    //   document.getElementById('linkedin').classList.add('form__group-incorrecto')
    //   document.getElementById('linkedin').classList.remove('form__group-correcto')
    //   // document.querySelector('#linkedin .form__input-error').classList.add('form__input-error-activo')
    // };

    // if(!validator.isEmpty(input.number)) {
    //   if(errors.number) { delete errors.number }
    //   document.getElementById('number').classList.add('form__group-correcto')
    //   document.getElementById('number').classList.remove('form__group-incorrecto')
    //   // document.querySelector('#number .form__input-error').classList.remove('form__input-error-activo')
    // } else {
    //   errors.number = "Agrega tu numero de contacto."
    //   document.getElementById('number').classList.add('form__group-incorrecto')
    //   document.getElementById('number').classList.remove('form__group-correcto')
    //   // document.querySelector('#number .form__input-error').classList.add('form__input-error-activo')
    // };

    // if(validator.isURL(input.github)) {
    //   if(errors.github) { delete errors.github }
    //   document.getElementById('github').classList.add('form__group-correcto')
    //   document.getElementById('github').classList.remove('form__group-incorrecto')
    //   // document.querySelector('#github .form__input-error').classList.remove('form__input-error-activo')
    // } else {
    //   errors.github = "Agrega tu GitHub"
    //   document.getElementById('github').classList.add('form__group-incorrecto')
    //   document.getElementById('github').classList.remove('form__group-correcto')
    //   // document.querySelector('#github .form__input-error').classList.add('form__input-error-activo')
    // };

    return errors
  }