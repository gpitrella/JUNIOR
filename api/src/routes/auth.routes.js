import { Router } from "express";
import {
  singup,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.post("/signup", singup);

router.post("/signin", signin);

router.get("/logout", logout);

export default router;
