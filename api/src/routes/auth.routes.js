import { Router } from "express";
const router = Router();
import {
  signup,
  signin
} from "../controllers/auth.controllers.js";


// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.get("/logout", (req, res) => {
  if (req.logout) { req.logout(); }
  res.status(201).json({
    success: true
  })
});

export default router;
