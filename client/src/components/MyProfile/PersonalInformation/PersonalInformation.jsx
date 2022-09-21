import * as React from 'react';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
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
import { putDataUser, getUserDetail, putUpdatePassword, clearUpdateUser } from '../../../redux/actions'
import { Link } from 'react-router-dom';
import './PersonalInformation.css'

// Alerta comentario creado
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PersonalInformation() {
  const { user } = useSelector((state) => state.general);
  const { updateUser } = useSelector((state) => state.userReducer)
  const { oneuser } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getUserDetail(user?.user.id))
    console.log(updateUser)
    if(typeof(updateUser) === 'string'){
      if(updateUser?.includes("successfully")){
        setOpenSuccessEditName(true)
        dispatch(clearUpdateUser())
      }
    }    
  }, [updateUser]);
      
  // Controladores de Edit Profile
  const [ openSuccessEditName, setOpenSuccessEditName ] = React.useState(false);
  const [ image, setImage ] = React.useState("")
  const [ open, setOpen ] = React.useState(false);
  const [ openImg, setOpenImg ] = React.useState(false);
  const [ openPhone, setOpenPhone] = React.useState(false);
  const [ openPassword, setOpenPassword] = React.useState(false);
  const [ dataChange, setDataChange ] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenImg = () => {
    setOpenImg(true)
  };

  const handleClickOpenPhone = () => {
    setOpenPhone(true)
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
    setOpenPassword(false);
  };

  const handleDataChange = (e) => {
    e.preventDefault();
    setDataChange({
      ...dataChange,
      [e.target.name]: e.target.value
    })
  };

  const handleSendDataChange = () => {
    dispatch(putDataUser(user.user.id, dataChange))
    handleClose()
  }

  const handleUpdatePassword = () => {
    dispatch(putUpdatePassword(dataChange));
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
      dispatch(putDataUser(user.user.id, data));
      handleClose();
  }


  return (
    <div className='main_box_personalinformation'>
    <h3 className='title_personalinformation'> Personal Information </h3>
    <List className='box_main_personal' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem id='avatar_personal_information'>
        <ListItemAvatar>
          <Avatar
              alt="Remy Sharp"
              src={oneuser.image}
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
        <ListItemText primary={`Name: ${oneuser?.name}`} />
        <EditIcon cursor='pointer' onClick={handleClickOpen}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`E-mail: ${oneuser?.email}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Phone: ${oneuser?.phone_number ? oneuser?.phone_number : 'WithOut Phone'}`} />
        <EditIcon cursor='pointer' onClick={handleClickOpenPhone}/>
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
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <span className='myaddress_personalinformation'>Addresses: {(<Link to={'/myprofile/myaddress'}>See my Addresses</Link>)} </span>
      </ListItem>
    </List>
    <Link to={`/myprofile`}>
        <Button id='btn_personalinformation' variant="contained"> My Profile </Button>
    </Link>
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Name:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your new Name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label="New Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendDataChange}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openImg} onClose={handleClose}>
        <DialogTitle>Edit Profile Image:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select your Image.
          </DialogContentText>
          <Button type="file" name="image" onChange={e => setImage(e.target.files)} variant="contained" ><input type="file" name="image"/> </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => {upload(e)}}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openPhone} onClose={handleClose}>
        <DialogTitle>Edit Phone Number:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your new Phone Number.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            name="phone_number"
            label="New Phone"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendDataChange}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Dialog open={openPassword} onClose={handleClose}>
        <DialogTitle>Edit Password:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your new Password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            label="New Password"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdatePassword}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Snackbar open={openSuccessEditName} autoHideDuration={6000} onClose={handleCloseSuccessComment}>
        <Alert onClose={handleCloseSuccessComment} severity="success" sx={{ width: '100%' }}>
            Information Update Successful!                
        </Alert>
    </Snackbar>

    </div>
  );
}
