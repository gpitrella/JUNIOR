import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, CardContent, Card, Grid, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config()

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const serviceID = process.env.serviceID;
const templateID = process.env.templateID; 
const publicKey = process.env.publicKey;

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
    return setOpen(false), navigate("/");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const templateParams = {
    name: 'Junior',
    notes: 'Nuevo Consulta!'
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
    // init(`${KEY}`);
    console.log(serviceID)
    console.log(templateID)
    console.log(templateParams)
    console.log(process.env.publicKey)

    emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
          console.log(response.status, response.text);
          setOpen(true);
        });
    // send(
    //   "service_h4stj4s",
    //   "template_c38r8ts",
    //   { name, lastName, subject, email, phone, msg },
    //   "NPC49Hu7bfisw1Zjw"
    // )
    //   .then((response) => {
    //     console.log(response.status, response.text);
    //     setOpen(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
      <div className="App">
       <br />
       <br />
       <br />
       <br />
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Contactanos
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Completa todos los datos del formulario y en breve nos pondremos en contacto.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      name="name"
                      value={input.name}
                      placeholder="Nombre"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      name="lastName"
                      value={input.lastName}
                      placeholder="Apellido"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      value={input.email}
                      type="email"
                      placeholder="Ingresar Email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      name="subject"
                      value={input.subject}
                      placeholder="Ingresar Asunto"
                      label="subject"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      type="number"
                      value={input.phone}
                      placeholder="Número de Teléfono"
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="msg"
                      label="Message"
                      value={input.msg}
                      multiline
                      rows={4}
                      placeholder="Escribi tu consulta o duda."
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tu Email ha sido enviado correctamente. En breve te contactamos!
          </Typography>
          <Button onClick={handleClose}> X </Button>
        </Box>
      </Modal>
    </div>
  );
};