import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SignpostIcon from '@mui/icons-material/Signpost';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ModalAddAddress from '../../ModalAddAddress/ModalAddAddress';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteUserAddress, getUserDetail, showModalAddAddress } from '../../../redux/actions';
import './MyAddress.css'

// Alerta comentario creado
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function MyAddress() {
  const [openComment, setOpenComment] = React.useState(false);
  const { oneuser, reloadUserDetails } = useSelector((state) => state.userReducer);
  const { show } = useSelector(state => state.modalAddAddress);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUserAddress(id));
    setOpenComment(true) 
  };

  const handleCloseSuccessComment = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenComment(false);
  };

  React.useEffect(() => {
    dispatch(getUserDetail(oneuser.id))
  }, [openComment, reloadUserDetails]);

  const handleAddAddress = function() {
    dispatch(showModalAddAddress());
  }
  
  let acum = 0;
  return (
    <div className='main_box_personalinformation'>
    <h3 className='title_personalinformation'> My Address </h3>
    <div className='variation_myaddress'>
      {oneuser?.useraddresses?.length === 0 
        ? (<div>
              <Stack spacing={2} direction="row" display={"flex"} justifyContent={"center"}>
                <Button variant="outlined" size="small" onClick={handleAddAddress}> Add New Address </Button>
              </Stack> 
              <h3 className='title_myaddress_profile'> Don't have address register yet.</h3>
          </div>)
        : oneuser?.useraddresses?.map((address) => {
          acum++;
        return (
        <div className='individual_myaddress' key={address.id}>
          <List className='box_main_myaddress' sx={{ width: '330px', height: '280px', bgcolor: 'background.paper' }}>
            <ListItem >
              <span id='title_box_particular_address'>{`Address N° ${acum}`}</span>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SignpostIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Street: ${address?.direction.split(', ')[0]}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AddRoadIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Deparment: ${address?.direction.split(', ')[1]}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationCityIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`City: ${address?.direction.split(', ')[2]}`} />
            </ListItem>
          <Stack spacing={2} direction="row" display={"flex"} justifyContent={"center"}>
            <Button variant="outlined" sx={{ marginBottom: '20' }}onClick={() => handleDelete(address.id)} size="small"> Delete </Button>
          </Stack>
          </List>

        </div>)
        })}
      </div>
        {oneuser?.useraddresses?.length < 3 && oneuser?.useraddresses?.length !== 0
                    ? (<div>
                        <Stack spacing={2} direction="row" display={"flex"} justifyContent={"center"}>
                          <Button sx={{ marginTop: '35px' }}variant="outlined" size="small" onClick={handleAddAddress}> Add New Address </Button>
                        </Stack> 
                    </div>)
                    : null }
        <Link to={`/myprofile`}>
            <Button id='btn_personalinformation' variant="contained"> My Profile </Button>
        </Link>
        <Snackbar open={openComment} autoHideDuration={6000} onClose={handleCloseSuccessComment}>
            <Alert onClose={handleCloseSuccessComment} severity="success" sx={{ width: '100%' }}>
                Address Deleted Successfully. 
            </Alert>
        </Snackbar>
        {
        show && <ModalAddAddress />
        }
    </div>
  );
}
