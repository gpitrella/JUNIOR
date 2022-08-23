import { Router } from "express";
import { renderIndex, renderAbout } from "../controllers/index.controller.js";

import authRoutes from "./auth.routes";
import filterRoutes from "./filters.routes";
import techRoutes from "./tech.routes";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);

router.use("/auth", authRoutes);
router.use("filters", filterRoutes);
router.use("notes", notesRoutes);
router.use("tech", techRoutes);

export default router;
