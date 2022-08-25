import { Router } from "express";
import {
    createNewTech,
    getAllTech,
} from "../controllers/tech.controller.js";
import { isAuthenticated } from "../helpers/auth.js";


const router = Router();

//Post (crea tecnologias)
router.post("/newtech", createNewTech);
//Get (trae tecnologias)
router.get("/alltechs", getAllTech)
//Delete (elimina tecnologias)


export default router;