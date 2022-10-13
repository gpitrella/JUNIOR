import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createProject, showModalAddImage, getAllTechs } from '../../redux/actions/projectsActions';
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

    // title, description, gitHubUrl, wspUrl, image, newtech, userId, payment, status, emailUser
  const [errors, setErrors] = useState({
    title: "Agrega un Título a tu proyecto",
    description: "Agrega una descripción a tu proyecto.",
    gitHubUrl: "Agrega un URL valida a tu proyecto de GitHub",
    newtech: "Agrega una tech de desarrollo a tu proyecto",
    image: "Agrega una imagen URL valida a tu proyecto",
    tasks: "Agrega alguna tarea para desarrollar en tu proyecto"
  });
  const { user } = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Importar imagen
  const { modalAddImage } = useSelector(state => state.projectsReducer);
  const filterReducer = useSelector((state) => state.filterReducer);
  const [ textTask, setTextTask ] = useState('');
  const [input, setInput] = useState({
    title: '',
    description:'',
    gitHubUrl: '',
    tasks: [],
    payment: 'false',
    image: '',
    wspUrl: '',
    newtech: [],
    userId: user.user._id,
    emailUser: user.user.email
  })

  const allNameTechs = filterReducer?.allTechs.map((tech) => {
    return tech.name.charAt(0).toUpperCase() + tech.name.slice(1);
  })

  const handleChange = (e) => {
      e.preventDefault();
      if(e.target.name === "newtech") {
        if(!input.newtech.includes(e.target.value)) {
          setInput({
            ...input,
            newtech: [...input.newtech, e.target.value]
          })
        }
      } else {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      } 

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }, errors))
  }

  const handleTask = () => {
      let nameTask = textTask.charAt(0).toUpperCase() + textTask.slice(1).toLowerCase();
      if(!input.tasks.includes(nameTask)) {
        setInput({
          ...input,
          tasks: [...input.tasks, nameTask]
        })
      }
      setTextTask('');
  }

  const handleDeleteTech = (e) => {
    e.preventDefault();
    if(input.newtech.includes(e.target.attributes[0].nodeValue)) {
      const newTeches = input.newtech.filter((tech) => tech !== e.target.attributes[0].nodeValue);
      setInput({
        ...input,
        newtech: newTeches 
      })
    }
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    if(input.tasks.includes(e.target.attributes[0].nodeValue)) {
      const newTasks = input.tasks.filter((task) => task !== e.target.attributes[0].nodeValue);
      setInput({
        ...input,
        tasks: newTasks 
      })
    }
  };


  useEffect(() => {
    dispatch(getAllTechs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(input, errors))

    if(!input.title || !input.description || !input.image || !input.gitHubUrl || !input.newtech) {
      document.getElementById('form__msn').classList.add('form__msn-activo')
    } 
    else if (errors.title || errors.description || errors.image || errors.gitHubUrl || errors.newtech) {
      document.getElementById('form__msn').classList.add('form__msn-activo')
    }
    else if (!errors.title || !errors.description || !errors.image || !errors.gitHubUrl || !errors.newtech) {
      document.getElementById('form__msn-exito').classList.add('form__msn-exito-activo')
      // setTimeout(()=>{
      //   document.getElementById('form__msn-exito').classList.remove('form__msn-exito-activo')
      // }, 4000)
      // document.querySelectorAll('.form__group-correcto').forEach((icon)=>{
      //   icon.classList.remove('form__group-correcto')
      // })
      // document.getElementById('form__msn').classList.remove('form__msn-activo')
    
      dispatch(createProject(input));
      setInput({
        title: '',
        description:'',
        gitHubUrl: '',
        tasks: [],
        payment: 'false',
        image: '',
        wspUrl: '',
        newtech: [],
        userId: '',
        emailUser: ''
      })
    }
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
    }, errors));
  }

  return (
    <div className={s.mainbigcontainer}>
      <div className={s.createProjectView_content}>
					<h1 className={s.gradient__text}>
            CREAR PROYECTO
					</h1>
					<p>
            Empeza a llevar tus ideas a la realidad, suma tus proyecto, gana experiencia y ayuda a otros con su 
            colaboración a ganar experiencia y nuevas habilidades. Te aconsejamos completar todos los campos del 
            formulario de proyecto lo más completo posible para que sea más fácil que sumes colaboradores.
					</p>
      </div>
    <div className={`main ${s.container}`}>
        <Link to = {'/projects'}>
          <button className = {s.goBack}>{'< Volver'}</button>
        </Link>
        <h1 className={`form__title ${s.maintitle}`}>Crear Proyecto</h1>
    <form className='form_create_project' id='form' onSubmit={(e) => handleSubmit(e)}>
        <div className={`form__group_create_p ${s.formGroudName}`} id='title'>
          <label htmlFor="title" className={s.form__label}>Título: * </label>
          <div className={s.form__group_input}>
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
          <span className='form__input-error'>{errors.title}</span>
        </div>

        <div className={`form__group_create_p ${s.formGroudName}`} id='description'>
          <label htmlFor="description" className={s.form__label}>Descripción: * </label>
          <div className={s.form__group_input}>
                <textarea
                  type={'text'}
                  className = {`form__input ${s.formTextAreaCreateProject}`}
                  id='description'
                  name = {'description'}
                  placeholder='Descripción del Proyecto (Detalla el proyecto completo)'
                  value = {input.description}
                  onChange={(e) => handleChange(e)}
                />
          </div>   
          <span className='form__input-error'>{errors.description}</span>        
        </div>

        <div className={`form__group_create_p ${s.formGroudName}`} id='gitHubUrl'>
          <label htmlFor="gitHubUrl" className={s.form__label}>GitHub Link: * </label>
          <div className={s.form__group_input}>
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
          <span className='form__input-error'>{errors.gitHubUrl}</span>          
        </div>
          <div className={`form__group_create_p ${s.formGroudName}`} id='tasks'>
            <label htmlFor="tasks" className={s.form__label}>Tareas: * </label>
            <div className={`${s.form__group_input} ${s.displayTasks}`}>
                  <input
                    type={'text'}
                    className='form__input'
                    id='tasks'
                    name = {'tasks'}
                    placeholder='Tareas pendientes de realizar'
                    value = {textTask}
                    onChange={(e) => setTextTask(e.target.value)}
                  />
                  <button className={s.form__btn_task} onClick={handleTask}>Crear Tarea</button>
            </div> 
            <div className={s.maintaskselected}>
              {input.tasks.length > 0 && input.tasks.map((task) => (
                <div key={Math.random()} className={s.techselected}>
                    <div value={task} >🔧 {task} </div>
                    <div value={task} onClick={handleDeleteTask} className={s.deleteTech}>X</div>
                </div>
                    )
                )}
            </div>
            <span className='form__input-error'>{errors.tasks}</span>          
          </div>


        <div className='form__group_create_p' id='price'>
          <label htmlFor="payment" className={s.form__label}>Colaborativo o Pago: *</label>
          <div className={s.form__group_input}>
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
        
        <div className='form__group_create_p' id='wspUrl'>
          <label htmlFor="discount" className={s.form__label}>WhatsApp: </label>
          <div className={s.form__group_input}>
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
          {/* <p className='form__input-error'>{errors.discount}</p> */}
        </div>

        <div className='form__group_create_p' id='newtech'>
        <label htmlFor="category" className={s.form__label}>Tech a usar: *</label>
        <div className={s.form__group_input}>
            <select
              className='form__input'
              id='newtech'
              name = {'newtech'}
              onChange={(e) => handleChange(e)}
              value={input.newtech[input.newtech.length > 0 ? input.newtech.length-1 : 0]}
            >
                <option value={''} defaultValue>Selecciona una Tech</option>
                {allNameTechs?.map((tech) => (
                    <option value={tech} key={Math.random()}>{tech}</option>
                    )
                )}
            </select>
            <div className={s.maintechselected}>
             {input.newtech.length > 0 &&            
                    input.newtech.map((tech) => (
                    <div key={Math.random()} className={s.techselected}>
                        <div value={tech} >{tech} </div>
                        <div value={tech} onClick={handleDeleteTech} className={s.deleteTech}>X</div>
                    </div>
                    )
                )}
            </div>
        </div> 
        <p className='form__input-error'>{errors.newtech}</p>
        </div>
                
        <div className='form__group_create_p' id='image'>
          <div className = {s.doubleLabel}>
            <label htmlFor="image" className={s.form__label}>Imagen: *</label>
            <button className = {s.importImage} onClick = {handleOpenModalAddImage}>Importar</button>
          </div>
          <div className={s.form__group_input}>
                <input
                    type={'text'}
                    className='form__input'
                    id='image'
                    name = {'image'}
                    placeholder='Product image URL'
                    value = {input.image}
                    // onChange={(e) => handleChange(e)}
                />
                <button onClick={(e) => handleChange(e)} />
          </div> 
          <p className='form__input-error'>{errors.image}</p>
        </div>

        <div className='form__msn' id='form__msn'>
            <p>
            <b>Error:</b> Por favor chequea todos los campos con errores.
            </p> 
        </div>
        <div className="form__group_create_p form__group-btn-create">
            <button type='submit' className='form__btn'>CREAR PROYECTO</button>
            <p className='form__msn-exito' id='form__msn-exito'
            >Proyecto Creado con Éxito!!
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
