import { Router } from "express";
import { filterByTechs } from '../controllers/filters.controllers.js';
const router = Router();

// Routes
router.post("/",filterByTechs);

export default router