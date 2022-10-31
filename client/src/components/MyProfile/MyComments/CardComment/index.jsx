import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FindUserProject } from "../Helper";
import style from "../Comment.module.css"

export const CardComment = ({ comment, allProjects }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        width:"100%",
        backgroundColor: "#ffffff21",
        color: "#fff",
        margin: "2% 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <span className={style.comment}>{comment.comment}</span>
              <span className={style.titleProject}>
                {FindUserProject(comment, allProjects)?.title.toUpperCase()}{" "}
              </span>
            </Stack>
            <Divider />
            {open && (
              <Stack>
                {comment.answer ? (
                  <>
                    <span style={{ fontSize: "0.9em", marginBottom: "1.5%",borderBottom:"1px solid white",width:"fit-content"}}>
                      {FindUserProject(comment, allProjects).emailUser}{" "}
                      respondió :
                    </span>
                    <span className={style.answer}>
                      {comment.answer}
                    </span>
                  </>
                ) : (
                  <Typography>No tienes ninguna respuesta</Typography>
                  )}
                  <Divider/>
              </Stack>
            )}
          </Stack>
        </CardContent>
        <Button sx={{width:"fit-content",margin:"0 0 1% 1%"}} variant="contained" onClick={() => setOpen(!open)}>
          <Typography sx={{ fontSize: "0.8rem" }}>Respuestas</Typography>
        </Button>
      </Box>
    </Card>
  );
};
