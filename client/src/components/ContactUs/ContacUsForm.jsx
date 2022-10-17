import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, CardContent, Card, Grid, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import s from './Contactus.module.css';
dotenv.config()

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const serviceID = process.env.REACT_APP_SERVICEID;
const templateID = process.env.REACT_APP_TEMPLATEID; 
const publicKey = process.env.REACT_APP_PUBLICKEY;

export default function ContacUsForm () {

  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    phone: "",
    msg: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    return setOpen(false), navigate("/home");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, subject, email, phone, msg } = input;
    const templateParams = {
      name: name,
      lastName: lastName,
      subject: subject,
      email: email,
      phone: phone,
      notes: msg
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
          setOpen(true);
        });
    
    setInput({
      name: "",
      lastName: "",
      email: "",
      subject: "",
      phone: "",
      msg: "",
    });
  };
  
  return (
    <div>
      <div className={s.contactus_content}>
					<h1 className='gradient__text'>
            CONTACTANOS
					</h1>
					<p>
            Completa todos los datos del formulario y en breve nos pondremos en contacto.
					</p>
      </div>
      <div className="App">
       <br />
       <br />
       <br />
       <br />
        <Grid>
          <Card
            sx={{ 
              maxWidth: 450, 
              padding: "20px 5px", 
              margin: "0 auto", 
              backgroundColor: "rgba(32, 32, 36, 1)",
              boxShadow: "2px 3px 5px rgba(150, 150, 150, 0.5)" }}
          >
            <CardContent >
              {/* <Typography gutterBottom variant="h5" sx={{ color: 'white' }}>
                Contactanos
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
                sx={{ color: 'white' }}
              >
                Completa todos los datos del formulario y en breve nos pondremos en contacto.
              </Typography> */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item id={s.input_contactus}>
                    <TextField
                      name="name"
                      value={input.name}
                      placeholder="Nombre"
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                      sx={{ color: 'white' }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item id={s.input_contactus}>
                    <TextField
                      name="lastName"
                      value={input.lastName}
                      placeholder="Apellido"
                      label="Apellido"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                      sx={{ color: 'white' }}
                    />
                  </Grid>
                  <Grid item xs={12} id={s.input_contactus}>
                    <TextField
                      name="email"
                      value={input.email}
                      type="email"
                      placeholder="Ingresar Email"
                      label="Ingresar Email"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12} id={s.input_contactus}>
                    <TextField
                      name="subject"
                      value={input.subject}
                      placeholder="Ingresar Asunto"
                      label="Ingresar Asunto"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12} id={s.input_contactus}>
                    <TextField
                      name="phone"
                      type="number"
                      value={input.phone}
                      placeholder="Número de Contacto"
                      label="Número de Contacto"
                      variant="outlined"
                      fullWidth
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12} id={s.input_contactus}>
                    <TextField
                      name="msg"
                      label="Escribi tu consulta o duda"
                      value={input.msg}
                      multiline
                      rows={4}
                      placeholder="Escribi tu consulta o duda"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <br />
       <br />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ 
                    mt: 2, 
                    borderRadius: 5, 
                    backgroundColor: "rgba(32, 32, 36, 1)",
                    boxShadow: "2px 3px 5px rgba(150, 150, 150, 0.5)", 
                    color: "white"}}>
            Tu Email ha sido enviado correctamente. En breve te contactamos!
          </Typography>
          <Button onClick={handleClose}> X </Button>
        </Box>
      </Modal>
    </div>
  );
};