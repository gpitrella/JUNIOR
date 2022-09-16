import { Router } from "express";
import { filterByTechs } from "../controllers/filters.controllers.js";
import { createNewProject, getAllProyect, projectDelete, updateProject } from "../controllers/project.controller.js";
import { isAuthenticated } from "../helpers/auth.js";
const router = Router();
//GET
router.get("/projects/allprojects", getAllProyect)
//POST
router.post("/projects/newproject", createNewProject);
//PUT
router.put("/projects/updateproject", updateProject)
//DELETE
router.delete("/projects/deleteproject", projectDelete)

export default router;