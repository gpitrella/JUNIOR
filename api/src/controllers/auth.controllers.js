import User from "../models/User.js";
import { compareSync, hashSync } from 'bcrypt';
import { secret, expires, rounds } from '../auth.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { config } from "dotenv";
config();

const CLIENT_URL = process.env.CLIENT_URL
// require('dotenv').config();

export const signin = async (req, res) => {
  try {
      const { email, password } = req.body;
      const userFound = await User.findOne({ email: email });
      if (!userFound) {
            res.status(404).json({ msg: "User with this email not found" });
      } else {
          if (compareSync(password, userFound.password)) {
            // Creamos el token
            let token = jwt.sign({ user: userFound }, secret, {expiresIn: expires});
            res.json({
                user: userFound,
                token: token,
                msg: 'User login successfully.' 
            })
          } else {
            // Unauthorized Access
            res.status(401).json({ msg: "Incorrect password" })
        }        
      }
  } catch (err) { 
      res.status(500).json(err);
  }
}

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// export const signin = passport.authenticate("local", {
//   successRedirect: CLIENT_URL,
//   failureRedirect: "/login/failed",
//   failureFlash: true,
// });


export const signup = async (req, res) => {
  try {
      const { name, email, password, confirm_password } = req.body;
      if (password !== confirm_password) {
        res.status(401).json({ msg: "Passwords do not match." })
      }
      if (password.length < 4) {
        res.status(401).json({ msg: "Incorrect length password" })
      }

      // Look for email coincidence
      const userFound = await User.findOne({ email: email });
      if (userFound) {
        res.status(404).json({ msg: "Email already used" });
      } else {
        // Saving a New User
        let hpassword = hashSync(password, Number.parseInt(rounds))
        const newUser = new User({ name, email, password: hpassword });
        await newUser.save();
        // newUser.password = await newUser.encryptPassword(password);
        let token = jwt.sign({ user: newUser }, secret, {expiresIn: expires});

        res.json({
          user: newUser,
          token: token,
          msg: 'User create successfully.' 
        });
      }
        
    } catch (err) { 
        res.status(500).json(err);
    }
};


export const logout = async (req, res) => {
  if (req.logout) req.logout();
    res.status(201).json({
      success: true
  })
};

