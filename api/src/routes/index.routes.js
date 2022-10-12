import { Router } from "express";
// import { renderIndex, renderAbout } from "../controllers/index.controller.js";
import authRoutes from "./auth.routes.js";
import filterRoutes from "./filters.routes.js";
import techRoutes from "./tech.routes.js";
import projectsRoutes from "./project.routes.js";
import userRoutes from "./user.routes.js";


const router = Router();

// router.get("/", renderIndex);
// router.get("/about", renderAbout);

router.use("/auth", authRoutes);
router.use("/filters", filterRoutes);
router.use("/tech", techRoutes);
router.use("/user", userRoutes);
router.use("/projects", projectsRoutes);

export default router;
