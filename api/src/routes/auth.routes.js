import { Router } from "express";
const router = Router();
import User from "../models/User.js";
import { hashSync } from 'bcrypt';
import { signup, signin, logout } from "../controllers/auth.controllers.js";
import { loginWithGoogle } from "../controllers/loginWithGoogle.js";
<<<<<<< Updated upstream
import { loginWithGithub } from "../controllers/loginWithGithub.js";
=======
import { secret, expires, rounds } from '../auth.js';
//import passport from 'passport';
import jwt from 'jsonwebtoken';
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config()

const client_url = process.env.CLIENT_URL;
const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

console.log(client_id, client_secret);
>>>>>>> Stashed changes

// Routes
router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", loginWithGoogle);

router.get("/login/github/callback", loginWithGithub);

<<<<<<< Updated upstream
router.post('/logout', logout);

export default router;
=======
// LOGIN GITHUB

router.get("/login/github", (req, res) => {
  const redirect_uri = "http://localhost:5000/login/github/callback";
  
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  });
  const data = await request.text();
  const params = new URLSearchParams(data);
  return params.get('access_token');
}

async function getGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  });
  return await request.json();
}

router.get("/login/github/callback", async (req, res) => {
  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id, client_secret });
  //console.log(access_token, 'token');
  const user = await getGitHubUser(access_token);
  //console.log(user, 'USER')
  //res.json(user);
  
  if (user) {
    try {
      let userFound = await User.findOne({ email: user.email });
      let userToReturn = !userFound ? await createUserWithGithubProfile(user) : userFound;
      //res.json(userGHWithToken(userToReturn));
      res.redirect("http://localhost:3000/home");
    } catch (err) { 
      res.status(500).json(err);
    }
    //res.redirect("http://localhost:3000/home");
  } else {
    res.send("Login did not succeed!");
  }
});

let createUserWithGithubProfile = async function(user) {
  let hpassword = hashSync('123456', Number.parseInt(rounds));
  const newUser = new User({ 
    name: user.name, 
    email: user.email, 
    password: hpassword, 
    image: user.avatar_url 
  });
  await newUser.save();

  return ({
    user: newUser
  });
};
  
let userGHWithToken = function(user) {
  let token = jwt.sign({ user: user }, secret, { expiresIn: expires });
  return {
    user: user,
    token: token,
    msg: 'GitHub User create successfully.' 
  }
};
// END LOGIN GITHUB

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Bad login wrong password or email",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(client_url);
});

export default router;
>>>>>>> Stashed changes
