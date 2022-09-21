import { Router } from "express";
const router = Router();
import { signup, signin, signinpassport } from "../controllers/auth.controllers.js";
import { loginWithGoogle } from "../controllers/loginWithGoogle.js";

// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", loginWithGoogle);

router.post("/passport/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.post("/passport", signinpassport);

router.get('/logout', async(req, res)=>{
  try{
      res.json({});
  } catch(err){
      res.status(500).json(err);
  }
})

export default router;
