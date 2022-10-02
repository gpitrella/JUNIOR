import validator from 'validator';


export function validateEmail(input, errors) {
//     const errorsEmail = {}

    if (validator.isEmpty(input.email)){
            errors.email = "Add an email"
            document.getElementById('email').classList.add('login__group-incorrecto')
            document.getElementById('email').classList.remove('login__group-correcto')
            document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
    } else if (!validator.isEmail(input.email)){
            errors.email = "Insert a valid email adress"
            document.getElementById('email').classList.add('login__group-incorrecto')
            document.getElementById('email').classList.remove('login__group-correcto')
            document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
    } else {
            if(errors.email) { delete errors.email }           
            document.getElementById('email').classList.add('login__group-correcto')
            document.getElementById('email').classList.remove('login__group-incorrecto')
            document.querySelector('#email .login__input-error').classList.remove('login__input-error-activo')
        }

return errors
}

export function validatePassword(input, errors) {
//     const errorsPassword = {}

    if (validator.isEmpty(input.password)){
            errors.password = "Add a password"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else if (input.password.length < 6){
            errors.password = "Minimum of 6 characters"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else if (validator.matches(input.password, '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')){
            errors.password = "At least one letter and one number"
            document.getElementById('password').classList.add('login__group-incorrecto')
            document.getElementById('password').classList.remove('login__group-correcto')
            document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
    } else {
            if(errors.password) { delete errors.password } 
            document.getElementById('password').classList.add('login__group-correcto')
            document.getElementById('password').classList.remove('login__group-incorrecto')
            document.querySelector('#password .login__input-error').classList.remove('login__input-error-activo')
        }

return errors
}