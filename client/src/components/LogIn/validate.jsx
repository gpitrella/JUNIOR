import validator from 'validator';


export function validateEmail(input) {
    const errorsEmail = {}

    if (validator.isEmpty(input.email)){
            errorsEmail.email = "Add an email"
            document.getElementById('email').classList.add('login__group-incorrecto')
            document.getElementById('email').classList.remove('login__group-correcto')
            document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
    } else if (!validator.isEmail(input.email)){
            errorsEmail.email = "Insert a valid email adress"
            document.getElementById('email').classList.add('login__group-incorrecto')
            document.getElementById('email').classList.remove('login__group-correcto')
            document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
    } else {
            document.getElementById('email').classList.add('login__group-correcto')
            document.getElementById('email').classList.remove('login__group-incorrecto')
            document.querySelector('#email .login__input-error').classList.remove('login__input-error-activo')
        }

return errorsEmail
}

export function validatePassword(input) {
    const errorsPassword = {}

    if (validator.isEmpty(input.password)){
            errorsPassword.password = "Add a password"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else if (input.password.length < 6){
            errorsPassword.password = "Minimum of 6 characters"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else if (validator.matches(input.password, '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')){
            errorsPassword.password = "At least one letter and one number"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else {
            document.getElementById('password').classList.add('login__group-correcto')
            document.getElementById('password').classList.remove('login__group-incorrecto')
            document.querySelector('#password .login__input-error').classList.remove('login__input-error-activo')
        }

return errorsPassword
}