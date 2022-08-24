import { Router } from "express";
import {
    createNewTech,
//   renderNoteForm,
//   renderNotes,
//   renderEditForm,
//   updateNote,
//   deleteNote,
} from "../controllers/tech.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// New Note
// router.get("/projects/add", isAuthenticated, renderNoteForm);
router.post("/newtech", createNewTech);

// // Get All Notes
// router.get("/notes", isAuthenticated, renderNotes);

// // Edit Notes
// router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

// router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// // Delete Notes
// router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

export default router;