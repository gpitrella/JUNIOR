import { Router } from "express";
const router = Router();
import { signup, signin, logout } from "../controllers/auth.controllers.js";
import { loginWithGoogle } from "../controllers/loginWithGoogle.js";
import { secret, expires, rounds } from '../auth.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const CLIENT_URL = "http://localhost:3000";
// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", loginWithGoogle);

router.get("/login/success", (req, res) => {
  if (req.user) {
    // let token = jwt.sign({ user: req.user }, secret, {expiresIn: expires});
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      // token: token
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Bad login wrong password or email",
  });
});

// router.get("/logout", logout);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${CLIENT_URL}/home`,
    failureRedirect: "/login/failed",
  })
);

// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get('/logout', async(req, res)=>{
//   try{
//       res.json({});
//   } catch(err){
//       res.status(500).json(err);
//   }
// })

export default router;
