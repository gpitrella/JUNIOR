export let getHeaderWithToken = function(token) {
  return { 
    headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
    },
    withCredentials: true,
  }
};

export function validateImageToUpload(file) {
  let result = ''
  if (!UPLOAD_IMAGE_PARAMS.VALID_TYPES.includes(file.type)) result = UPLOAD_IMAGE_PARAMS.SHOW_ERROR.INVALID_TYPE;
  else if (UPLOAD_IMAGE_PARAMS.VALID_SIZE < file.size) result = UPLOAD_IMAGE_PARAMS.SHOW_ERROR.INVALID_SIZE;
  return {
    valid: result === '' ? true : false,
    msg: result
  }
};

// PARA EL CONTROL DE LA SUBIDA DE IMAGENES:

export const UPLOAD_IMAGE_PARAMS = {

  VALID_TYPES: [
    'image/png',
    'image/jpeg',
    'image/jpg'
  ],

  VALID_SIZE: 3 * 1024 * 1024,

  SHOW_ERROR: {
    INVALID_SIZE: 'El archivo ingresado es demasiado grande.',
    INVALID_TYPE: 'El tipo de archivo ingresado no es valido.'
  }
}