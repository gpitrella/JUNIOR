import { Router } from "express";
const router = Router();
import { signup, signin } from "../controllers/auth.controllers.js";
import { loginWithGoogle } from "../controllers/loginWithGoogle.js";
import { secret, expires, rounds } from '../auth.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';

// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", loginWithGoogle);

// router.post("/signin/success", (req, res) => {
//   if (req.user) {
//     let token = jwt.sign({ user: req.user }, secret, {expiresIn: expires});
//     res.json({
//       success: true,
//       message: "User login successfully.",
//       user: req.user,
//       token: token
//     });
//   }
// });

// router.post("/passport", signinpassport);

router.get('/logout', async(req, res)=>{
  try{
      res.json({});
  } catch(err){
      res.status(500).json(err);
  }
})

export default router;
