import { Router } from "express";
import { AllUsers, userProjects, userCollaborations, MyCollaborations, getUserBy_Id } from "../controllers/user.controllers.js";
// import {isAuthenticated} from "../helpers/auth.js";

const router = Router();

router.get("/allusers", AllUsers)
router.get("/userid/:id",getUserBy_Id )
router.post("/projects", userProjects)
router.post("/collaboration",userCollaborations)
router.post("/mycollaborations", MyCollaborations)

export default router;