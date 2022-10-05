import React from "react";
import { useDispatch } from "react-redux";
import { selectPag } from "../../redux/actions/projectsActions";
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import "./Pagina.css";

const Pagina = ({ currentPage, maxpage }) => {
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
    <div className="container-btn">
      <IconButton aria-label="next" variant="contained" onClick={clickPrev} >
        <NavigateBeforeIcon id='nextButtonProject'sx={{ fontSize: 30, color: "white" }} />
      </IconButton>

      <button className="btn-page">{currentPage}</button>

      <IconButton aria-label="next" variant="contained" onClick={clickNext} >
        <NavigateNextIcon id='nextButtonProject'sx={{ fontSize: 30, color: "white" }} />
      </IconButton>
      {/* <button onClick={clickNext} type="button">
        <img src={siguiente} alt="" />
      </button> */}
    </div>
  );
};

export default Pagina;
