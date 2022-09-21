import validator from 'validator';

export function validateUsername(input) {
    const errors = {};

    if (validator.isEmpty(input.username)){
            errors.username = "Add a username"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else if (input.username.length <= 3){
            errors.username = "Minimum of 3 characters"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else if (!validator.isAlpha(input.username)){
            errors.username = "Only letters"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else {
            document.getElementById('username').classList.add('signup__group-correcto')
            document.getElementById('username').classList.remove('signup__group-incorrecto')
            document.querySelector('#username .signup__input-error').classList.remove('signup__input-error-activo')
        }
    
  return errors
}

export function validateEmail(input) {
        const errosEmail = {}

        if (validator.isEmpty(input.email)){
                errosEmail.email = "Add an email"
                document.getElementById('email').classList.add('signup__group-incorrecto')
                document.getElementById('email').classList.remove('signup__group-correcto')
                document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        } else if (!validator.isEmail(input.email)){
                errosEmail.email = "Insert a valid email adress"
                document.getElementById('email').classList.add('signup__group-incorrecto')
                document.getElementById('email').classList.remove('signup__group-correcto')
                document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                document.getElementById('email').classList.add('signup__group-correcto')
                document.getElementById('email').classList.remove('signup__group-incorrecto')
                document.querySelector('#email .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errosEmail
}

export function validatePassword(input) {
        const errosPassword = {}

        if (validator.isEmpty(input.password)){
                errosPassword.password = "Add a password"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else if (input.password.length < 6){
                errosPassword.password = "Minimum of 6 characters"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else if (validator.matches(input.password, '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')){
                errosPassword.password = "At least one letter and one number"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                document.getElementById('password').classList.add('signup__group-correcto')
                document.getElementById('password').classList.remove('signup__group-incorrecto')
                document.querySelector('#password .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errosPassword
}

export function validatePassword2(input) {
        const errosPassword2 = {}

        if (validator.isEmpty(input.password2)){
                errosPassword2.password2 = "Repeat password"
                document.getElementById('password2').classList.add('signup__group-incorrecto')
                document.getElementById('password2').classList.remove('signup__group-correcto')
                document.querySelector('#password2 .signup__input-error').classList.add('signup__input-error-activo')
        } else if (input.password2 !== input.password){
                errosPassword2.password2 = "Password is not the same"
                document.getElementById('password2').classList.add('signup__group-incorrecto')
                document.getElementById('password2').classList.remove('signup__group-correcto')
                document.querySelector('#password2 .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                document.getElementById('password2').classList.add('signup__group-correcto')
                document.getElementById('password2').classList.remove('signup__group-incorrecto')
                document.querySelector('#password2 .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errosPassword2
}

