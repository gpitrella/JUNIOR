import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField, CardContent, Card, Grid, Button } from "@mui/material";

export default function FAQs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <Grid>
                <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: "0 auto" }}>
                    <Typography gutterBottom variant="h5">
                        Frequently Asqued Questions
                    </Typography>
                    <CardContent>
                        <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                    ¿Qué es Junior?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    JUNIOR es un proyecto colaborativo que tiene como objetivo potenciar el desarrollo de programadores/as o
                                    cualquier otro profesional entusiasta, como pueden ser diseñadores, emprendedores y más.<br />
                                    El aporte de JUNIOR es brindar un
                                    espacio de colaboración que permita al usuario no solo ser parte de un proyecto, sino que también aportar con conocimiento,
                                    aprender de la experiencia de los demás, aprender haciendo y además tener la posibilidad de publicar un proyecto propio liderando
                                    el desarrollo.<br />
                                    Además de este espacio de colaboración en JUNIOR se puede encontrar links a otras plataformas de aprendizaje de interés,
                                    herramientas de desarrollo y demás recursos útiles para potenciar el crecimiento profesional.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel2"}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: "50%", flexShrink: 0 }}>
                                    ¿Cómo empiezo a colaborar en un proyecto?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Para poder colaborar en uno de los proyectos publicados en JUNIOR unicamente tenes que registrarte, luego ingresar en la sección de proyectos
                                    y cliquear en el boton "COLABORAR" del proyecto que elijas, asi inicias el primer paso para la colaboración.<br />
                                    Con esto le enviamos tus datos al creador del proyecto para que sepa que tenes intenciones de colaborar.<br />
                                    Te sugerimos de todas formas que seas proactivo y que te pongas en contacto con el creador del proyecto
                                    para que puedan coordinar las tareas pendientes, y de esta manera ya puedas empezar a colaborar en el proyecto y sumar la experiencia a tu CV.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography sx={{ width: "50%", flexShrink: 0 }}>
                                    ¿Por qué es necesario cargar mis datos o registrame?
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Creemos que una de herramientas más importantes para poder completar con éxito un proyecto es la comunicación entre sus miembros, por lo que los datos que carges en
                                    JUNIOR van a ser enviados al creador del proyecto o servirán para que se pongan en contacto con vos para avanzar en el desarrollo del proyecto. <br />
                                    Además los datos van a estar disponibles en la sección "DESARROLLADORES" para que recluiter puedan acceder a ellos, ver quienes son los colaboradores, poder contactarte y brindate alguna
                                    propuesta laboral.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel4"}
                            onChange={handleChange("panel4")}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                    ¿Como hago para crear un proyecto?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Para crear un proyecto es necesario registrarse, luego ingresar en la sección de proyectos y cliquear en el boton "CREAR PROYECTO".<b />
                                    Es necesario que cargues todos los datos correspondientes al proyecto para que futuros colaboradores puedan sumarse y avanzar en la finalización del mismo. <b />
                                    Te sugerimos una vez creado el proyecto ponerte en contacto con desarrolladores que esten disponibles e invitarlos a colaborar , los cuales podrás encontrar en la sección "USUARIOS".
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel5"}
                            onChange={handleChange("panel5")}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography sx={{ width: "50%", flexShrink: 0 }}>
                                    No soy desarrollador.. ¿Puedo crear un Proyecto?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Si nos sos desarrollador y queres crear una pagina con JUNIOR, tambien podes hacerlo. <b />
                                    Va a ser necesario registrarse, luego ingresar en la sección de proyectos y
                                    cliquear en el boton "CREAR PROYECTO". <b />
                                    En esta sección va a ser necesario que cargues todos los datos correspondientes al proyecto para que futuros colaboradores
                                    puedan sumarse y avanzar en la finalización del mismo.<b />
                                     Selecciona el tipo de proyecto pago de acuerdo a tu presupuesto y te solicitamos que te pongas en contacto con
                                    nosotros (JUNIOR) para que podamos coordinar y elegir a los desarrolladores disponibles para que completen tu proyecto.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                       
                    </CardContent>
                </Card>
            </Grid>
            <br />
            <br />
        </div>
    );
};