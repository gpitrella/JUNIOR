import { Router } from "express";
import { filterByTechs } from "../controllers/filters.controllers.js";
import { createNewProject, getAllProyect } from "../controllers/project.controller.js";
import { isAuthenticated } from "../helpers/auth.js";
const router = Router();

// router.post("/filter",filterByTechs);
router.get("/projects/allprojects", getAllProyect)
router.post("/projects/newproject", createNewProject);

export default router;