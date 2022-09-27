import User from "../models/User.js";
import { compareSync, hashSync } from 'bcrypt';
import { secret, expires, rounds } from '../auth.js';
import jwt from 'jsonwebtoken';
// require('dotenv').config();

export const loginWithGoogle = async (req, res) => {
  try {
    const { auser } = req.body;
    let userFound = await User.findOne({ email: auser.email });
    let userToReturn = !userFound ? await createUserWithGoogleProfile(auser) : userFound;
    res.json(userWithToken(userToReturn));
  } catch (err) { 
    res.status(500).json(err);
  }
}

let createUserWithGoogleProfile = async function(auser) {
  let hpassword = hashSync('123456', Number.parseInt(rounds));
  const newUser = new User({ 
    name: auser.name, 
    email: auser.email, 
    password: hpassword, 
    image: auser.picture 
  });
  await newUser.save();

  return ({
    user: newUser
  });
};
  
let userWithToken = function(user) {
  let token = jwt.sign({ user: user }, secret, { expiresIn: expires });
  return {
    user: user,
    token: token,
    msg: 'Google User create successfully.' 
  }
};