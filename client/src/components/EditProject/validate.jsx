import validator from 'validator';
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

export default function validate(input, errors){
    

    if(!validator.isEmpty(input.title)) {
      if(errors.title) { delete errors.title }
      document.getElementById('title').classList.add('form__group-correcto')
      document.getElementById('title').classList.remove('form__group-incorrecto')
      document.querySelector('#title .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.title = "Agrega un Título a tu proyecto"
      document.getElementById('title').classList.add('form__group-incorrecto')
      document.getElementById('title').classList.remove('form__group-correcto')
      document.querySelector('#title .form__input-error').classList.add('form__input-error-activo')
    };

    if(!validator.isEmpty(input.description)) {
      if(errors.description) { delete errors.description }
      document.getElementById('description').classList.add('form__group-correcto')
      document.getElementById('description').classList.remove('form__group-incorrecto')
      document.querySelector('#description .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.description = "Agrega una descripción a tu proyecto."
      document.getElementById('description').classList.add('form__group-incorrecto')
      document.getElementById('description').classList.remove('form__group-correcto')
      document.querySelector('#description .form__input-error').classList.add('form__input-error-activo')
    };

    if(validator.isURL(input.gitHubUrl)) {
      if(errors.gitHubUrl) { delete errors.gitHubUrl }
      document.getElementById('gitHubUrl').classList.add('form__group-correcto')
      document.getElementById('gitHubUrl').classList.remove('form__group-incorrecto')
      document.querySelector('#gitHubUrl .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.gitHubUrl = "Agrega un URL valida a tu proyecto de GitHub"
      document.getElementById('gitHubUrl').classList.add('form__group-incorrecto')
      document.getElementById('gitHubUrl').classList.remove('form__group-correcto')
      document.querySelector('#gitHubUrl .form__input-error').classList.add('form__input-error-activo')
    };
    if (input.tasks.length > 0) {
      if(errors.tasks) { delete errors.tasks }
      document.getElementById('tasks').classList.add('form__group-correcto')
      document.getElementById('tasks').classList.remove('form__group-incorrecto')
      document.querySelector('#tasks .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.tasks = "Agrega alguna tarea pendiente para desarrollar en tu proyecto"
      document.getElementById('tasks').classList.add('form__group-incorrecto')
      document.getElementById('tasks').classList.remove('form__group-correcto')
      document.querySelector('#tasks .form__input-error').classList.add('form__input-error-activo')
    }

    if (input.newtech.length > 0) {
      if(errors.newtech) { delete errors.newtech }
      document.getElementById('newtech').classList.add('form__group-correcto')
      document.getElementById('newtech').classList.remove('form__group-incorrecto')
      document.querySelector('#newtech .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.newtech = "Agrega una tech de desarrollo a tu proyecto"
      document.getElementById('newtech').classList.add('form__group-incorrecto')
      document.getElementById('newtech').classList.remove('form__group-correcto')
      document.querySelector('#newtech .form__input-error').classList.add('form__input-error-activo')
    }

    if (validator.isURL(input.image)){
      if(errors.image) { delete errors.image }
      document.getElementById('image').classList.add('form__group-correcto')
      document.getElementById('image').classList.remove('form__group-incorrecto')
      document.querySelector('#image .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.image = "Agrega una imagen URL valida a tu proyecto"
      document.getElementById('image').classList.add('form__group-incorrecto')
      document.getElementById('image').classList.remove('form__group-correcto')
      document.querySelector('#image .form__input-error').classList.add('form__input-error-activo')
    }
   return errors
  }