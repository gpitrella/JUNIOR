import validator from 'validator';
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

export default function validate(input){
    let errors = {};

    if(!validator.isEmpty(input.name)) {
      document.getElementById('name').classList.add('form__group-correcto')
      document.getElementById('name').classList.remove('form__group-incorrecto')
      document.querySelector('#name .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.name = "Add a product name"
      document.getElementById('name').classList.add('form__group-incorrecto')
      document.getElementById('name').classList.remove('form__group-correcto')
      document.querySelector('#name .form__input-error').classList.add('form__input-error-activo')
    };

    if(!validator.isEmpty(input.category)) {
      document.getElementById('category').classList.add('form__group-correcto')
      document.getElementById('category').classList.remove('form__group-incorrecto')
      // document.querySelector('#category .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.category = "Choose a product category"
      document.getElementById('category').classList.add('form__group-incorrecto')
      document.getElementById('category').classList.remove('form__group-correcto')
      // document.querySelector('#category .form__input-error').classList.add('form__input-error-activo')
    };

    if(!validator.isEmpty(input.manufacturer)) {
      document.getElementById('manufacturer').classList.add('form__group-correcto')
      document.getElementById('manufacturer').classList.remove('form__group-incorrecto')
      // document.querySelector('#manufacturer .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.manufacturer = "Choose a product manufacturer"
      document.getElementById('manufacturer').classList.add('form__group-incorrecto')
      document.getElementById('manufacturer').classList.remove('form__group-correcto')
      // document.querySelector('#manufacturer .form__input-error').classList.add('form__input-error-activo')
    };

    if (validator.isCurrency(input.price, {allow_negatives: false, allow_decimal: true})){
      document.getElementById('price').classList.add('form__group-correcto')
      document.getElementById('price').classList.remove('form__group-incorrecto')
      document.querySelector('#image .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.price = "Add a valid currency amount"
      document.getElementById('price').classList.add('form__group-incorrecto')
      document.getElementById('price').classList.remove('form__group-correcto')
      document.querySelector('#price .form__input-error').classList.add('form__input-error-activo')
    }

    if (validator.isURL(input.image)){
      document.getElementById('image').classList.add('form__group-correcto')
      document.getElementById('image').classList.remove('form__group-incorrecto')
      document.querySelector('#image .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.image = "Add a link to an image for your product"
      document.getElementById('image').classList.add('form__group-incorrecto')
      document.getElementById('image').classList.remove('form__group-correcto')
      document.querySelector('#image .form__input-error').classList.add('form__input-error-activo')
    }

    if (validator.isInt(input.discount,{min: 0})){
      document.getElementById('discount').classList.add('form__group-correcto')
      document.getElementById('discount').classList.remove('form__group-incorrecto')
      document.querySelector('#discount .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.discount = "Add the product discount"
      document.getElementById('discount').classList.add('form__group-incorrecto')
      document.getElementById('discount').classList.remove('form__group-correcto')
      document.querySelector('#discount .form__input-error').classList.add('form__input-error-activo')
    }

    if (validator.isInt(input.stock,{min: 0})){
      document.getElementById('stock').classList.add('form__group-correcto')
      document.getElementById('stock').classList.remove('form__group-incorrecto')
      document.querySelector('#stock .form__input-error').classList.remove('form__input-error-activo')
    } else {
      errors.stock = "Add the product stock"
      document.getElementById('stock').classList.add('form__group-incorrecto')
      document.getElementById('stock').classList.remove('form__group-correcto')
      document.querySelector('#stock .form__input-error').classList.add('form__input-error-activo')
    }

    

    

    if(validator.isEmpty(input.description)) {
      errors.description = "Add a product description"
      document.getElementById('description').classList.add('form__group-incorrecto')
      document.getElementById('description').classList.remove('form__group-correcto')
      document.querySelector('#description .form__input-error').classList.add('form__input-error-activo')
    } else {
      document.getElementById('description').classList.add('form__group-correcto')
      document.getElementById('description').classList.remove('form__group-incorrecto')
      document.querySelector('#description .form__input-error').classList.remove('form__input-error-activo')
    };

    // if(
    //   errors.name ||
    //   errors.price ||
    //   errors.image ||
    //   errors.stock ||
    //   errors.discount ||
    //   errors.category ||
    //   errors.manufacturer ||
    //   errors.description
    //   ){
    //     document.getElementById('form__msn').classList.add('form__msn-activo')
    //   } else {
    //     document.getElementById('form__msn-exito').classList.add('form__msn-exito-activo')
    //     setTimeout(()=>{
    //       document.getElementById('form__msn-exito').classList.remove('form__msn-exito-activo')
    //     }, 4000)
    //     document.querySelectorAll('.form__group-correcto').forEach((green) =>{
    //       green.classList.remove('.form__group-correcto')
    //     })
    //   }
    return errors
  }