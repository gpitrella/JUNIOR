# JUNIOR
De JUNIOR para Juniors

<p align='left'>
    <img src='https://res.cloudinary.com/djgghmpgh/image/upload/v1665672746/JuniorLogo_pitmgl.png' </img>
</p>


![Status](https://img.shields.io/badge/Status-Deployed-orange)
![React](https://shields.io/badge/FrontEnd-React-green?logo=react&style=plastic)
![Redux](https://shields.io/badge/FrontEnd-Redux-green?logo=redux&style=plastic)
![Material UI](https://shields.io/badge/FrontEnd-MUI-green?logo=mui&style=plastic)
![Node.js](https://shields.io/badge/BackEnd-Node.js-violet?logo=nodedotjs&style=plastic)
![Express](https://shields.io/badge/BackEnd-Express-violet?logo=express&style=plastic)

## Introducción: 

JUNIOR es un proyecto colaborativo que tiene como objetivo potenciar el desarrollo de programadores/as o cualquier otro profesional entusiasta, como pueden ser diseñadores, emprendedores y más.

El aporte de JUNIOR es brindar un espacio de colaboración que permita al usuario no solo ser parte de un proyecto, sino que también aportar con conocimiento, aprender de la experiencia de los demás, aprender haciendo y además tener la posibilidad de publicar un proyecto propio liderando el desarrollo. Además de este espacio de colaboración en JUNIOR se puede encontrar links a otras plataformas de aprendizaje de interés, herramientas de desarrollo y demás recursos útiles para potenciar el crecimiento profesional.

De esta forma no solo podes se potencia el aprendizaje, el trabajo en equipo y la colaboración mutua, sino que además sumando la experiencia vivida en JUNIOR al CV y se puede aspirar a mejores oportunidades laborales futuras.

## Objetivos del Proyecto:

- Brindar un espacio de colaboración entre los participantes.
- Potenciar el crecimiento y aprendizaje de los colaboradores. 
- Generar un espacio de comunicación y encuentro entre los desarrolladores, como así tambíen otros profesinales entusiastas.
- Brindar un espacio para sumar experiencia y alcanzar mejores oportunidades laborales.

## Stacks de Tecnología:

### Front End:
HTML, CSS, Javascript, React, React-Bootstrap, Redux, SendGrid, EmailJS, Integración con Google y GitHub, Material UI, SASS

### Back End:
Node.js, Express, Mongoose, JWT

### Database:
MongoDB

## Carpetas de alojamiento de JUNIOR

Hay dos carpetas compartidas que alojan a JUNIOR: Client o Front End: `JUNIOR` and API o Back End: `JUNIOR-API`.
Puedes encontrar la primera de cliente o front en 'JUNIOR' en este repo y la segunda carpeta 'JUNIOR-API' en este mismo github.

En ambas carpetas al clonarlas debes crear el archivo: `.env`

En la carpeta de client o Front End `JUNIOR`, el archivo `.env` debe incluir:

```
REACT_APP_GOOGLE=******
REACT_APP_GITHUB=******
REACT_APP_SERVICEID=******
REACT_APP_TEMPLATEID=******
REACT_APP_PUBLICKEY=******
REACT_APP_BASE_URL_FLY="http://localhost:4001"
```

You have to replace `DB_USER` and `DB_PASSWORD` with your own credentials to connect to postgres database. This file will be ignored by github, as it contains sensitive information (the credentials).

The `DB_KEY` is a random security keyword, you can change or keep it. 
The `ACCESS_TOKEN` is a security keyword to Mercado Pago, you can create one in this platform and make a success buy. In this link https://www.mercadopago.com.ar/developers/es/docs/checkout-api/integration-test/test-cards you can get all information to check a success buy in TechMarket.

In Auth Config you must generated your own Google and SendGrid credential to use this functionalities.
