import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateProject, showModalAddImage, getAllTechs, clearDataProject, loadingData } from '../../redux/actions/projectsActions';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Loading from '../SVG/Loading';
import validate from './validate';
import s from './EditProject.module.css';
import './EditProject.css'

// Importar Imagen
import ModalAddImage from '../ModalAddImage/ModalAddImage';

import { style } from '@mui/system';

export default function EditProject() {
  const { id } = useParams();
  const { projectByUser } = useSelector((state) => state.projectsReducer);
  const projectToEdit = projectByUser.filter(project => project._id === id)
  const { user } = useSelector((state) => state.homepageReducer);
  const { modalAddImage, updateProjectResult, errorsProject, loadingDataStatus } = useSelector(state => state.projectsReducer);
  const filterReducer = useSelector((state) => state.filterReducer);

  const [errors, setErrors] = useState({
    title: "Agrega un Título a tu proyecto",
    description: "Agrega una descripción a tu proyecto.",
    gitHubUrl: "Agrega un URL valida a tu proyecto de GitHub",
    newtech: "Agrega una tech de desarrollo a tu proyecto",
    image: "Agrega una imagen URL valida a tu proyecto",
    tasks: "Agrega alguna tarea para desarrollar en tu proyecto"
  });
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // Importar imagen
  const [ textTask, setTextTask ] = useState('');

  const allNameTask = projectToEdit[0].tasks?.map((task) => {
    return { task: task.task, statusTask: task.status }
  })
  const allNameTechs = filterReducer?.allTechs.map((tech) => {
    return tech.name.charAt(0).toUpperCase() + tech.name.slice(1);
  })
  
  // { task: element, status: false}
  const [input, setInput] = useState({
    title: projectToEdit[0].title,
    description: projectToEdit[0].description,
    gitHubUrl: projectToEdit[0].gitHubUrl,
    tasks: allNameTask,
    payment: projectToEdit[0].payment,
    image: projectToEdit[0].image,
    wspUrl: projectToEdit[0].wspUrl,
    newtech: projectToEdit[0].tech,
    projectId: projectToEdit[0]._id
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

  const handleTask = (e) => {
      e.preventDefault();
      let nameTask = textTask.charAt(0).toUpperCase() + textTask.slice(1).toLowerCase();

      setInput({
        ...input,
        tasks: [...input.tasks, { task: nameTask, status: false }]
      })
      setErrors(validate({
        ...input,
        tasks: [...input.tasks, { task: nameTask, status: false }]
      }, errors));
      setTextTask('');
  };

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
      const nameTaskToDelete = e.target.attributes[0].nodeValue;
      const newTasks = input.tasks.filter((task) => task.task !== nameTaskToDelete)
      setInput({
        ...input,
        tasks: newTasks
      })
      setErrors(validate({
        ...input,
        tasks: newTasks
      }, errors));  

  };

  const handleChangeStatus = async (e) => {
    e.preventDefault();
    const taskToChange = e.target.attributes[0].nodeValue;
    const newTasks = await input.tasks.map((task) => { 
      if(task.task === taskToChange) {
        task.statusTask = !task.statusTask;
      } 
      return task; 
    })
    setInput({
      ...input,
      tasks: newTasks
    })    
  }


  useEffect(() => {
    dispatch(getAllTechs());
  }, [updateProjectResult, errorsProject, loadingDataStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(input, errors))

    if(!input.title || !input.description || !input.image || !input.gitHubUrl || !input.newtech.length === 0 || !input.tasks.length === 0) {
      document.getElementById('form__msn').classList.add('form__msn-activo')
    } 
    else if (errors.title || errors.description || errors.image || errors.gitHubUrl || errors.newtech || errors.tasks) {
      document.getElementById('form__msn').classList.add('form__msn-activo')
    }
    else if (!errors.title || !errors.description || !errors.image || !errors.gitHubUrl || !errors.newtech || !errors.tasks) {
      document.getElementById('form__msn-exito').classList.add('form__msn-exito-activo')
      // setTimeout(()=>{
      //   document.getElementById('form__msn-exito').classList.remove('form__msn-exito-activo')
      // }, 4000)
      // document.querySelectorAll('.form__group-correcto').forEach((icon)=>{
      //   icon.classList.remove('form__group-correcto')
      // })
      // document.getElementById('form__msn').classList.remove('form__msn-activo')
      dispatch(loadingData());
      dispatch(updateProject(input));      
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

  const clearMainVariables = (e) => {
    e.preventDefault();
    setInput({
      title: '',
      description:'',
      gitHubUrl: '',
      tasks: [],
      payment: 'false',
      image: '',
      wspUrl: '',
      newtech: [],
      projectId: ''
    })
    dispatch(clearDataProject())
    navigate(user.user ? '/miperfil/misproyectos' : '/home');
  }

  return (
    <div className={s.mainbigcontainer}>
      <div className={s.createProjectView_content}>
					<h1 className={s.gradient__text}>
            EDITAR PROYECTO
					</h1>
					<p>
            Modifica los campos que sean necesarios corregir o marca como completas las tareas que ya realizaron en el
            proyecto. Podes ademas agregar mas tareas para los colaboradores.
					</p>
      </div>
    <div className={`main ${s.container}`}>
      <div>
        <Link to = {user.user ? '/miperfil/misproyectos' : '/home'} onClick={(e) => clearMainVariables(e)}>
          <button className = {s.goBack} >{'< Volver'}</button>
        </Link>
      </div>
      { updateProjectResult === '' && errorsProject === '' && !loadingDataStatus ? 
      <div>
        <h1 className={`form__title ${s.maintitle}`}>Editar Proyecto</h1>
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
                  <button className={s.form__btn_task} onClick={(e) => handleTask(e)}>Crear Tarea</button>
            </div> 
            <div className={s.maintaskselected}>
              {input.tasks.length > 0 && input.tasks.map((task) => (
                <div key={Math.random()} className={s.techselected}>
                    <div value={task.task} >🔧 {task.task} </div>
                    <button value={task.task} className='form__btn_status' onClick={(e) => handleChangeStatus(e)} style={!task?.statusTask ? { background:'rgba(0, 117, 255, 0.671)'} : { background:'rgba(17, 146, 0, 0.671)'}}> { !task?.statusTask ? 'DESARROLLO' : 'COMPLETA' }  </button>
                    <div value={task.task} onClick={(e) => handleDeleteTask(e)} className={s.deleteTech}> X </div>
                </div>
                    )
                )}
            </div>
            <span className='form__input-error'>{errors.tasks}</span>          
          </div>


        <div className='form__group_create_p' id='price'>
          <label htmlFor="price" className='form__label'>Colaborativo o Pago: *</label>
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
                <option value={''}>Selecciona una Tech</option>
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
            <button type='submit' className='form__btn'>EDITAR PROYECTO</button>
            <p className='form__msn-exito' id='form__msn-exito'
            > Proyecto Creado con Éxito!!
            </p>
        </div>
        </form>
        {
          modalAddImage && modalAddImage.show && <ModalAddImage handleImage = {handleImage}/>
        }
        </div>  
        : loadingDataStatus && updateProjectResult === '' && errorsProject === '' 
            ? <div className={s.containerLoading}><LoadingComponent width={300}/> </div>
            : updateProjectResult !== ''
                ? <div className={s.successEdit}>
                    <h3> ✅ Tu proyecto a sido actualizado correctamente. </h3>
                  </div>
                : <div className={s.successEdit}>
                    <h3> ❌ Hubo un problema al actualizar, intentalo nuevamente. </h3>
                    <p> -- { typeof(errorsProject) === 'string' && errorsProject} </p>
                  </div>
        }
        </div>
      </div>
  )
}
