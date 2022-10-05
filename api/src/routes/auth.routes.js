import { Router } from "express";
const router = Router();
import { signup, signin, logout } from "../controllers/auth.controllers.js";
import { loginWithGoogle } from "../controllers/loginWithGoogle.js";
import { loginWithGithub } from "../controllers/loginWithGithub.js";

// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", loginWithGoogle);

router.get("/login/github/callback", loginWithGithub);

router.post('/logout', logout);

export default router;
