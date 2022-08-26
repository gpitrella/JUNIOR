import { Router } from "express";
import {
    createNewTech,
    deleteTech,
    getAllTech,
} from "../controllers/tech.controller.js";
import { isAuthenticated } from "../helpers/auth.js";


const router = Router();

//Post (crea tecnologias)
router.post("/newtech", createNewTech);
//Get (trae tecnologias)
router.get("/alltechs", getAllTech)
//Delete (elimina tecnologias)
router.delete("/deletetech", deleteTech)

export default router;