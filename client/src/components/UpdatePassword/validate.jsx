import validator from 'validator';

export function validatePassword(input, errors) {
        // const errosPassword = {}

        if (validator.isEmpty(input.password)) {
                errors.password = "Add a password"
                document.getElementById('password').classList.add('update__group-incorrecto')
                document.getElementById('password').classList.remove('update__group-correcto')
                document.querySelector('#password .update__input-error').classList.add('update__input-error-activo')
        } else if (input.password.length < 6) {
                errors.password = "Minimum of 6 characters"
                document.getElementById('password').classList.add('update__group-incorrecto')
                document.getElementById('password').classList.remove('update__group-correcto')
                document.querySelector('#password .update__input-error').classList.add('update__input-error-activo')
        } else if (validator.matches(input.password, '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$')) {
                errors.password = "At least one letter and one number"
                document.getElementById('password').classList.add('update__group-incorrecto')
                document.getElementById('password').classList.remove('update__group-correcto')
                document.querySelector('#password .update__input-error').classList.add('update__input-error-activo')
        } else {
                if (errors.password) { delete errors.password }
                document.getElementById('password').classList.add('update__group-correcto')
                document.getElementById('password').classList.remove('update__group-incorrecto')
                document.querySelector('#password .update__input-error').classList.remove('update__input-error-activo')
        }

        return errors
}

export function validatePassword2(input, errors) {
        // const errosPassword2 = {}

        if (validator.isEmpty(input.password2)) {
                errors.password2 = "Repeat password"
                document.getElementById('password2').classList.add('update__group-incorrecto')
                document.getElementById('password2').classList.remove('update__group-correcto')
                document.querySelector('#password2 .update__input-error').classList.add('update__input-error-activo')
        } else if (input.password2 !== input.password) {
                errors.password2 = "Password is not the same"
                document.getElementById('password2').classList.add('update__group-incorrecto')
                document.getElementById('password2').classList.remove('update__group-correcto')
                document.querySelector('#password2 .update__input-error').classList.add('update__input-error-activo')
        } else {
                if (errors.password2) { delete errors.password2 }
                document.getElementById('password2').classList.add('update__group-correcto')
                document.getElementById('password2').classList.remove('update__group-incorrecto')
                document.querySelector('#password2 .update__input-error').classList.remove('update__input-error-activo')
        }

        return errors
}

