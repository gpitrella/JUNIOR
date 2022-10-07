import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createProject, showModalAddImage } from '../../redux/actions/projectsActions';
// import { postProduct, waitingResponsePost } from '../../redux/actions/storepageActions';
// import { getCategories, getBrands } from '../../redux/actions/homepageActions';
// import { showModalAddImage } from '../../redux/actions/generalActions';
import './CreateProject.css'
import validate from './validate';

// Importar Imagen
import ModalAddImage from '../ModalAddImage/ModalAddImage';

import s from './CreateProject.module.css';
import { style } from '@mui/system';

export default function CreateProject() {

  const [input, setInput] = useState({
    title: '',
    description:'',
    gitHubUrl: '',
    payment: 'false',
    image: '',
    wspUrl: '',
    newtech: []
  })
  const [errors, setErrors] = useState({});
  // const {allCategories, brandsList} = useSelector((state) => state.homepage);

  // Importar imagen
  // const { modalAddImage } = useSelector(state => state.general);
  const { modalAddImage } = useSelector(state => state.projectsReducer);
  const filterReducer = useSelector((state) => state.filterReducer);

  const allNameTechs = filterReducer?.allTechs.map((tech) => {
    return tech.name.charAt(0).toUpperCase() + tech.name.slice(1);
  })

  const dispatch = useDispatch()
  // const navigate = Navigate()

  const handleChange = (e) => {
  e.preventDefault();
  if(e.target.name === "newtech") {
    setInput({
      ...input,
      newtech: [...input.newtech, e.target.value]
    })
  } else {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  

    // setErrors(validate({
    //   ...input,
    //   [e.target.name]: e.target.value
    // }))
  }

  useEffect(() => {
    //dispatch(postProduct())
    // dispatch(getCategories())
    // dispatch(getBrands())
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(validate({
    //   ...input,
    //   [e.target.name]: e.target.value
    // }))

    // if(!input.name || !input.price || !input.image || !input.stock || !input.discount || !input.category || !input.manufacturer || !input.description) {
    //   document.getElementById('form__msn').classList.add('form__msn-activo')
    // } 
    // else if (errors.name || errors.price || errors.image || errors.stock || errors.discount || errors.category || errors.manufacturer || errors.description) {
    //   document.getElementById('form__msn').classList.add('form__msn-activo')
    // }
    // else if (!errors.name || !errors.price || !errors.image || !errors.stock || !errors.discount || !errors.category || !errors.manufacturer || !errors.description) {
    //   document.getElementById('form__msn-exito').classList.add('form__msn-exito-activo')
    //   // setTimeout(()=>{
    //   //   document.getElementById('form__msn-exito').classList.remove('form__msn-exito-activo')
    //   // }, 4000)
    //   document.querySelectorAll('.form__group-correcto').forEach((icon)=>{
    //     icon.classList.remove('form__group-correcto')
    //   })
    //   document.getElementById('form__msn').classList.remove('form__msn-activo')
    
      dispatch(createProject(input));
      //console.log(input)
      setInput({
        title: '',
        description:'',
        gitHubUrl: '',
        payment: 'false',
        image: '',
        wspUrl: '',
        newtech: []
      })
      // dispatch(waitingResponsePost(true));
      // history.push('/admin/products/list');
    // }
  }

  // Importar Imagen
  let handleOpenModalAddImage = function(e) {
    e.preventDefault();
    dispatch(showModalAddImage());
  }

  let handleImage = function(newImage) {
    setInput({
      ...input,
      image: newImage
    });
    setErrors(validate({
      ...input,
      image: newImage
    }));
  }

  return (
    <div className={s.mainbigcontainer}>
    <div className={`main ${s.container}`}>
        <Link to = {'/projects'}>
          <button className = {s.goBack}>{'< Go Back'}</button>
        </Link>
        <h1 className={`form__title ${s.maintitle}`}>Crear Proyecto</h1>
    <form className='form' id='form' onSubmit={(e) => handleSubmit(e)}>
        <div className={`form__group ${s.formGroudName}`} id='title'>
          <label htmlFor="name" className='form__label'>Título: </label>
          <div className='form__group-input'>
                <input
                  type={'text'}
                  className='form__input'
                  id='title'
                  name = {'title'}
                  placeholder='Título del Proyecto'
                  value = {input.title}
                  onChange={(e) => handleChange(e)}
                />
          </div> 
          <p className='form__input-error'>{errors.name}</p>
        </div>

        <div className={`form__group ${s.formGroudName}`} id='description'>
          <label htmlFor="description" className='form__label'>Descripción</label>
          <div className='form__group-input'>
                <textarea
                  type={'text'}
                  className = {`form__input ${s.formTextArea}`}
                  id='description'
                  name = {'description'}
                  placeholder='Descripción del Proyecto (Detalla el proyecto completo)'
                  value = {input.description}
                  onChange={(e) => handleChange(e)}
                />
          </div> 
          <p className='form__input-error'>{errors.description}</p>
        </div>

        <div className={`form__group ${s.formGroudName}`} id='gitHubUrl'>
          <label htmlFor="name" className='form__label'>GitHub Link: </label>
          <div className='form__group-input'>
                <input
                  type={'text'}
                  className='form__input'
                  id='gitHubUrl'
                  name = {'gitHubUrl'}
                  placeholder='Link a Proyecto en GitHub'
                  value = {input.gitHubUrl}
                  onChange={(e) => handleChange(e)}
                />
          </div> 
          <p className='form__input-error'>{errors.name}</p>
        </div>
        
        <div className='form__group' id='price'>
          <label htmlFor="price" className='form__label'>Colaborativo o Pago</label>
          <div className='form__group-input'>
              <select
                className='form__input'
                id='payment'
                name = {'payment'}
                onChange={(e) => handleChange(e)}
                >
                    <option value={false}>Colaborativo</option>
                    <option value={true}>Pago</option>
              </select>
          </div> 
          <p className='form__input-error'>{errors.price}</p>
        </div>
        
        <div className='form__group' id='wspUrl'>
          <label htmlFor="discount" className='form__label'>WhatsApp</label>
          <div className='form__group-input'>
                <input
                  type={'number'}
                  className='form__input'
                  id='wspUrl'
                  name = {'wspUrl'}
                  placeholder='Numero de WhatsApp Ej(11450603045)'
                  value = {input.wspUrl}
                  onChange={(e) => handleChange(e)}
                />
          </div> 
          <p className='form__input-error'>{errors.discount}</p>
        </div>

        <div className='form__group' id='newtech'>
        <label htmlFor="category" className='form__label'>Tech a usar:</label>
        <div className='form__group-input'>
            <select
              className='form__input'
              id='newtech'
              name = {'newtech'}
              onChange={(e) => handleChange(e)}
            >
                <option value={''} >Selecciona una Tech</option>
                {allNameTechs?.map((tech) => (
                <option value={tech} key={Math.random()}>{tech}</option>
            )
            )}
            </select>
        </div> 
        <p className='form__input-error'>{errors.category}</p>
        </div>
                
        <div className='form__group' id='image'>
          <div className = {s.doubleLabel}>
            <label htmlFor="image" className='form__label'>Imagen</label>
            <button className = {s.importImage} onClick = {handleOpenModalAddImage}>Importar</button>
          </div>
          <div className='form__group-input'>
                <input
                type={'text'}
                className='form__input'
                id='image'
                name = {'image'}
                placeholder='Product image URL'
                value = {input.image}
                onChange={(e) => handleChange(e)}
                />
          </div> 
          <p className='form__input-error'>{errors.image}</p>
        </div>

        <div className='form__msn' id='form__msn'>
            <p>
            <b>Error:</b> please check the boxes with errors.
            </p> 
        </div>
        <div className="form__group form__group-btn-create">
            <button type='submit' className='form__btn' >CREAR PROYECTO</button>
            <p className='form__msn-exito' id='form__msn-exito'
            >Product created!!
            </p>
        </div>
        </form>
        {
          modalAddImage && modalAddImage.show && <ModalAddImage handleImage = {handleImage}/>
        }
        </div>
      </div>
  )
}
