import * as React from 'react';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTechs, clearDataProject } from '../../../redux/actions/projectsActions';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { updateDataUsers } from '../../../redux/actions/generalActions';
import { Link } from 'react-router-dom';
import './PersonalInformation.css'

// Alerta comentario creado
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PersonalInformation() {
  const { user, updateDataUsersMsg } = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch();

  // Controladores de Edit Profile
  const [ openSuccessEditName, setOpenSuccessEditName ] = React.useState(false);
  const [ image, setImage ] = React.useState("")
  const [ open, setOpen ] = React.useState(false);
  const [ openImg, setOpenImg ] = React.useState(false);
  const [ openPhone, setOpenPhone] = React.useState(false);
  const [ openGithub, setOpenGithub] = React.useState(false);
  const [ openLinkedin, setOpenLinkedin] = React.useState(false);
  const [ openPassword, setOpenPassword] = React.useState(false);
  const [ openTechs, setOpenTechs ] = React.useState(false);
  const [ dataChange, setDataChange ] = React.useState({
    techs: user?.user.techs,
  });

  const filterReducer = useSelector((state) => state.filterReducer);

  const allNameTechs = filterReducer?.allTechs.map((tech) => {
    return tech.name.charAt(0).toUpperCase() + tech.name.slice(1);
  })

  React.useEffect(() => {
    dispatch(getAllTechs());


    return () => {
      dispatch(clearDataProject())
    }
  }, [updateDataUsersMsg, user]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenImg = () => {
    setOpenImg(true)
  };

  const handleClickOpenPhone = () => {
    setOpenPhone(true)
  };

  const handleClickOpenGithub = () => {
    setOpenGithub(true)
  };

  const handleClickOpenLinkedin = () => {
    setOpenLinkedin(true)
  };

  const handleClickOpenTechs = () => {
    setOpenTechs(true)
  };

  const handleDeleteTech = (e) => {
    e.preventDefault();
    if(dataChange.techs.includes(e.target.attributes[0].nodeValue)) {
      const newTechs = dataChange.techs.filter((tech) => tech !== e.target.attributes[0].nodeValue);
      setDataChange({
        ...dataChange,
        techs: newTechs 
      })
    }
  };

  const handleOpenPassword = () => {
    setOpenPassword(true)
    setDataChange({
      ...dataChange,
      token: user.token
    })
  };

  const handleClose = () => {
    setOpen(false);
    setOpenImg(false);
    setOpenPhone(false);
    setOpenGithub(false);
    setOpenLinkedin(false);
    setOpenPassword(false);
    setOpenTechs(false);
  };

  const handleDataChange = (e) => {
    e.preventDefault();
    setDataChange({
      ...dataChange,
      [e.target.name]: e.target.value
    })
  };

  const handleTech = (e) => {
      e.preventDefault()
        if(!dataChange.techs.includes(e.target.value)) {
        setDataChange({
          ...dataChange,
          techs: [...dataChange.techs, e.target.value]
        })
      
  }
 }

  const handleSendDataChange = (e) => {
    e.preventDefault();
    if(user?.user) {
      dispatch(updateDataUsers(user.user._id, dataChange))
      handleClose()
    }
  }

  const handleUpdatePassword = () => {
    // dispatch(putUpdatePassword(dataChange));
    setOpenPassword(false);
  }

  // Controlador de cierre de mensaje de nombre editado:
  const handleCloseSuccessComment = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessEditName(false);
  };

  const upload = async(e) => {
      const files = image;
      const formData = new FormData
      formData.append("file", files[0])
      formData.append("upload_preset", "tech_market_henry")
      const res = await fetch(
          "https://api.cloudinary.com/v1_1/techmarket/image/upload",
          { method: "POST", body: formData }
      );
      const file = await res.json();
      const data = { image: file.secure_url }
      setImage(file.secure_url);
      // dispatch(putDataUser(user.user.id, data));
      handleClose();
  }


  return (
    <div className='main_box_personalinformation'>
      <h1 className="gradient__text"> MI PERFIL </h1>
      <h2 className='title_personalinformation gradient__text'> Personal Information </h2>
    <List className='box_main_personal' sx={{ width: '100%', maxWidth: 500, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 5, padding: 2 }}>
      <ListItem id='avatar_personal_information'>
        <ListItemAvatar>
          <Avatar
              alt="Remy Sharp"
              src={user?.user?.image}
              sx={{ width: 75, height: 75 }}
            />
        </ListItemAvatar>
        <EditIcon cursor='pointer' onClick={handleClickOpenImg}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon /> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Name: ${user?.user?.name }`} />
        <EditIcon cursor='pointer' onClick={handleClickOpen}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`E-mail: ${user?.user?.email}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Phone: ${user?.user?.phone === "No especificado" ? "-------" : user?.user?.phone }`} />
        <EditIcon cursor='pointer' onClick={handleClickOpenPhone}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`GitHub: ${user?.user?.github === "No especificado" ? "-------" : user?.user?.github }`} />
        <EditIcon cursor='pointer' onClick={handleClickOpenGithub}/>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Linkedin: ${user?.user?.linkedin === "No especificado" ? "-------" : user?.user?.linkedin }`} />
        <EditIcon cursor='pointer' onClick={handleClickOpenLinkedin}/>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <KeyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Password: ******" />
        <EditIcon cursor='pointer' onClick={handleOpenPassword}/>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Tus Tecnologías: `} />
        <EditIcon cursor='pointer' onClick={handleClickOpenTechs}/>
      </ListItem>
      <div className='maintechselected'>
             {dataChange.techs.length > 0 &&            
                    dataChange.techs.map((tech) => (
                    <div key={Math.random()} className='techselected'>
                        <div value={tech} >{tech} </div>
                    </div>
                    )
                )}
        </div>
      
    </List>
    <Link to={`/miperfil`}>
        <Button id='btn_personalinformation' variant="contained"> Mi Perfil </Button>
    </Link>
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Nombre:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nuevo Nombre.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="Nuevo Nombre"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={(e) => handleSendDataChange(e)}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openImg} onClose={handleClose}>
        <DialogTitle>Editar Imagen Perfil:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Elegir Imagen
          </DialogContentText>
          <Button type="file" name="image" onChange={e => setImage(e.target.files)} variant="contained" ><input type="file" name="image"/> </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={(e) => {upload(e)}}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openPhone} onClose={handleClose}>
        <DialogTitle>Editar Teléfono:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nuevo Número
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            name="phone"
            label="Nuevo Número"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSendDataChange}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openGithub} onClose={handleClose}>
        <DialogTitle>Editar GitHub:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nuevo GitHub
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="github"
            name="github"
            label="Nuevo GitHub"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSendDataChange}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>

    <div>
      <Dialog open={openLinkedin} onClose={handleClose}>
        <DialogTitle>Editar Linkedin:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nuevo Linkedin
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="linkedin"
            name="linkedin"
            label="Nuevo Linkedin"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSendDataChange}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>


    <div>
      <Dialog open={openTechs} onClose={handleClose}>
        <DialogTitle>Editar Tecnologías:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nuevas Tecnologías
          </DialogContentText>
           <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
          <InputLabel id="techs">Agregar Nueva Techs</InputLabel>
          <Select
            labelId="techs"
            id="techs"
            value={dataChange.techs.length > 0 ? dataChange.techs.length[dataChange.techs.length-1] : 0}
            onChange={(e) => handleTech(e)}
            label="Techs"
          >
          <MenuItem value=""><em>None</em></MenuItem>
          {allNameTechs?.map((tech) => (
                    <MenuItem value={tech} key={Math.random()}>{tech}</MenuItem>
                    )
                )}
        </Select>
        <div className='maintechselected'>
             {dataChange.techs.length > 0 &&            
                    dataChange.techs.map((tech) => (
                    <div key={Math.random()} className='techselectedModal'>
                        <div value={tech} >{tech} </div>
                        <div value={tech} onClick={handleDeleteTech} className='deleteTech'>X</div>
                    </div>
                    )
                )}
          </div>
        </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSendDataChange}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>

    <div>
      <Dialog open={openPassword} onClose={handleClose}>
        <DialogTitle>Editar Password:</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Nuevo Password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            label="Nuevo Password"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleUpdatePassword}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>

    <Snackbar open={openSuccessEditName} autoHideDuration={6000} onClose={handleCloseSuccessComment}>
        <Alert onClose={handleCloseSuccessComment} severity="success" sx={{ width: '100%' }}>
            Info Actualizada Correctamente!                
        </Alert>
    </Snackbar>

    </div>
  );
}
