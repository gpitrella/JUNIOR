import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCommentsUser } from "../../../redux/actions/usersActions";
import { getAllProjects } from "../../../redux/actions/projectsActions";
import { CardComment } from "./CardComment";
import style from "./Comment.module.css";

export default function MyComments() {
  const [loading, setLoading] = React.useState(true);
  const { user } = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch();
  const { commentsUser } = useSelector((state) => state.usersReducer);
  const { allProjects } = useSelector((state) => state.projectsReducer);

  React.useEffect(() => {
    dispatch(getAllCommentsUser(user?.user._id));
    setLoading(false);
  }, []);

  React.useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="main_box_personalinformation">
      <h1 className="gradient__text"> MI PERFIL </h1>
      <h2 className="title_personalinformation gradient__text">
        {" "}
        Mis Comentarios{" "}
      </h2>
      <div className={style.container}>
        {!loading ? (
          commentsUser.map((comment) => {
            return (
              <CardComment
                key={comment.id}
                comment={comment}
                allProjects={allProjects}
              />
            );
          })
        ) : (
          <div className={style.loading}>
            <h3>No haz hecho ningun comentario</h3>
          </div>
        )}
      </div>
      <Link to={`/miperfil`}>
        <Button id="btn_personalinformation" variant="contained">
          {" "}
          Mi Perfil{" "}
        </Button>
      </Link>
    </div>
  );
}
