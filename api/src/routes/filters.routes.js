import { Router } from "express";
import { filterByTechs } from '../controllers/filters.controllers';
const router = Router();

// Routes
router.post("/",filterByTechs);

export default router