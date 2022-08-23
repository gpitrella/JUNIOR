import { Router } from "express";
import { filterByTechs } from "../controllers/filters.controllers.js";
import {
    createNewProject,
//   renderNoteForm,
//   renderNotes,
//   renderEditForm,
//   updateNote,
//   deleteNote,
} from "../controllers/project.controller.js";
import { isAuthenticated } from "../helpers/auth.js";
const router = Router();

router.post("/projects/filter",filterByTechs);
// router.post("/projects/newproject", createNewProject);

export default router;