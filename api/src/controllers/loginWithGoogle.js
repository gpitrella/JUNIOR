import User from "../models/User.js";
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
import { compareSync, hashSync } from 'bcrypt';
import { secret, expires, rounds } from '../auth.js';
import jwt from 'jsonwebtoken';
// require('dotenv').config();

// const image = "https://res.cloudinary.com/techmarket/image/upload/v1657452330/rwbzsixizmehnudxgtg0.gif"

// const sgMail = require('@sendgrid/mail');
// const API_KEY = process.env.SENDGRID_API_KEY
// sgMail.setApiKey(API_KEY)
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
  //console.log('Debo crear un usuario...');
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