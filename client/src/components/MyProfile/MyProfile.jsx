import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import my_orders from './img/my_orders.gif';
import person from './img/profile_blue.gif';
import my_favourites from './img/favorite_heart.gif';
import my_address from './img/home.gif';
import review_animation from './img/review_animation.gif';
import question from './img/question.gif';
// import { showFavs } from '../../redux/actions'
// import FavouriteProducts from '../Favourites/FavouriteProds';
import './MyProfile.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

export default function MyProfile() {
  const [displayUserAdmin, setDisplayUserAdmin] = React.useState(false);
  const { user } = useSelector((state) => state.homepageReducer);
  
  const dispatch = useDispatch(); 
  // const openFavorite = () => {
  //     dispatch(showFavs())
  // };

  React.useEffect(() => {
    if(user?.user){
      if(user.user?.admin){
        setDisplayUserAdmin(true);
      }
    }
  },[user]);

  return (
    <div>
    <div className='main_box_pyProfile'>
      <Card id='individual_box_myprofile' sx={{ width: 200, height: 200 }}>
        <CardActionArea >
          <Link to='/myprofile/personalinformation'>
            <CardMedia className='personal_informacion'
              component="img"
              height="130"
              width="50"
              image={person}
              alt="personal information"
            />
          </Link>
        </CardActionArea>
        <CardActions className='button_myprofile'>
          <Link to='/myprofile/personalinformation'>
            <Button size="small" color="primary">
                Información Personal
            </Button>
          </Link>
        </CardActions>
      </Card>

      <Card id='individual_box_myprofile' sx={displayUserAdmin ? { display: 'none' } : { display: 'block', width: 200, height: 200 }}>
        <CardActionArea>
          <Link to='/myprofile/mypurchases'>
            <CardMedia
              component="img"
              height='130'
              width="50"
              image={my_orders}
              alt="my orders"
            />
          </Link>
        </CardActionArea>
        <CardActions className='button_myprofile'>
          <Link to='/myprofile/mypurchases'>
            <Button size="small" color="primary">
              Mis Proyectos
            </Button>
          </Link>
        </CardActions>
      </Card>
  
      <Card id='individual_box_myprofile' sx={displayUserAdmin ? { display: 'none' } : { display: 'block', width: 200, height: 200 }}>
        <CardActionArea>
          <CardMedia className='personal_informacion'
            component="img"
            height='130'
            width="50"
            image={my_favourites}
            alt="my favourites"
          />
        </CardActionArea>
        <CardActions className='button_myprofile'>
          <Button size="small" color="primary" >
             Mis Favoritos
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
