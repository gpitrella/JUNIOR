import validator from 'validator';

export function validateUsername(input, errors) {
    
        if (validator.isEmpty(input.username)){
            errors.username = "Add a username"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else if (input.username.length <= 3){
            errors.username = "Minimum of 4 characters"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else if (!validator.isAlpha(input.username)){
            errors.username = "Only letters"
            document.getElementById('username').classList.add('signup__group-incorrecto')
            document.getElementById('username').classList.remove('signup__group-correcto')
            document.querySelector('#username .signup__input-error').classList.add('signup__input-error-activo')
    } else {
            if(errors.username) { delete errors.username }            
            document.getElementById('username').classList.add('signup__group-correcto')
            document.getElementById('username').classList.remove('signup__group-incorrecto')
            document.querySelector('#username .signup__input-error').classList.remove('signup__input-error-activo')
        }    
  return errors
};

export function validateEmail(input, errors) {

        if (validator.isEmpty(input.email)){
                errors.email = "Add an email"
                document.getElementById('email').classList.add('signup__group-incorrecto')
                document.getElementById('email').classList.remove('signup__group-correcto')
                document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        } else if (!validator.isEmail(input.email)){
                errors.email = "Insert a valid email adress"
                document.getElementById('email').classList.add('signup__group-incorrecto')
                document.getElementById('email').classList.remove('signup__group-correcto')
                document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                if(errors.email) { delete errors.email } 
                document.getElementById('email').classList.add('signup__group-correcto')
                document.getElementById('email').classList.remove('signup__group-incorrecto')
                document.querySelector('#email .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errors
};

export function validatePassword(input, errors) {

        if (validator.isEmpty(input.password)){
                errors.password = "Add a password"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else if (input.password.length < 6){
                errors.password = "Minimum of 6 characters"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else if (validator.matches(input.password, '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')){
                errors.password = "At least one letter and one number"
                document.getElementById('password').classList.add('signup__group-incorrecto')
                document.getElementById('password').classList.remove('signup__group-correcto')
                document.querySelector('#password .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                if(errors.password) { delete errors.password } 
                document.getElementById('password').classList.add('signup__group-correcto')
                document.getElementById('password').classList.remove('signup__group-incorrecto')
                document.querySelector('#password .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errors
}

export function validatePassword2(input, errors) {

        if (validator.isEmpty(input.password2)){
                errors.password2 = "Repeat password"
                document.getElementById('password2').classList.add('signup__group-incorrecto')
                document.getElementById('password2').classList.remove('signup__group-correcto')
                document.querySelector('#password2 .signup__input-error').classList.add('signup__input-error-activo')
        } else if (input.password2 !== input.password){
                errors.password2 = "Password is not the same"
                document.getElementById('password2').classList.add('signup__group-incorrecto')
                document.getElementById('password2').classList.remove('signup__group-correcto')
                document.querySelector('#password2 .signup__input-error').classList.add('signup__input-error-activo')
        } else {
                if(errors.password2) { delete errors.password2 } 
                document.getElementById('password2').classList.add('signup__group-correcto')
                document.getElementById('password2').classList.remove('signup__group-incorrecto')
                document.querySelector('#password2 .signup__input-error').classList.remove('signup__input-error-activo')
            }
    
  return errors
};