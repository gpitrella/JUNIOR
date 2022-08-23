import { Router } from "express";
import {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.get("/signup", renderSignUpForm);

router.post("/signup", singup);

router.get("/signin", renderSigninForm);

router.post("/signin", signin);

router.get("/logout", logout);

export default router;
