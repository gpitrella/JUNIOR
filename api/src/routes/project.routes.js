import { Router } from "express";
import { filterByTechs } from "../controllers/filters.controllers.js";
import { createNewProject, getAllProyect, projectDelete, updateProject } from "../controllers/project.controller.js";
import { isAuthenticated } from "../helpers/auth.js";
const router = Router();
//GET
router.get("/allprojects", getAllProyect)
//POST
router.post("/newproject", createNewProject);
//PUT
router.put("/updateproject", updateProject)
//DELETE
router.delete("/deleteproject", projectDelete)

export default router;


