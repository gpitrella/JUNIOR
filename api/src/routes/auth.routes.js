import { Router } from "express";
const router = Router();
import {
  signup,
  signin
} from "../controllers/auth.controllers.js";


// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.get('/logout', async(req, res)=>{
  try{
      res.json({});
  } catch(err){
      res.status(500).json(err);
  }
})

export default router;
