import React from "react";
import { useDispatch } from "react-redux";
import { selectPag } from "../../redux/actions/projectsActions";
import IconButton from '@mui/material/IconButton';
import s from './Pagina.module.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Pagina ({ currentPage, maxpage }) {
  const dispatch = useDispatch();

  // functions for change pages
  const clickNext = () => {
    if (currentPage < maxpage) {
      currentPage++;
      dispatch(selectPag(currentPage));
    }
  };

  const clickPrev = () => {
    if (currentPage > 1) {
      --currentPage;
      dispatch(selectPag(currentPage));
    }
  };

  return (
    <div className={s.container_btn}>
      <IconButton aria-label="next" variant={s.contained} onClick={clickPrev} >
        <NavigateBeforeIcon id='nextButtonProject'sx={{ fontSize: 30, color: "white" }} />
      </IconButton>

      <button className={s.btn_page}>{currentPage}</button>

      <IconButton aria-label="next" variant="contained" onClick={clickNext} >
        <NavigateNextIcon id='nextButtonProject'sx={{ fontSize: 30, color: "white" }} />
      </IconButton>
    </div>
  );
};


