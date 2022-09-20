import User from "../models/User.js";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../auth');
require('dotenv').config();

// const image = "https://res.cloudinary.com/techmarket/image/upload/v1657452330/rwbzsixizmehnudxgtg0.gif"

// const sgMail = require('@sendgrid/mail');
// const API_KEY = process.env.SENDGRID_API_KEY
// sgMail.setApiKey(API_KEY)

let loginWithGoogle = async function(auser) {
  let userFound = await User.findOne({ where: { email: auser.email } });
  let userToReturn = !userFound ? await createUserWithGoogleProfile(auser) : { ...userFound.dataValues };
  return userWithToken(userToReturn);
}

let createUserWithGoogleProfile = async function(auser) {
  //console.log('Debo crear un usuario...');
  let password = bcrypt.hashSync('123456', Number.parseInt(authConfig.rounds));
  let newUser = await User.create({
    name: auser.name,
    email: auser.email,
    password: password,
    image: auser.picture 
  });
  // try{
  //   const msg={
  //     to: profile.emails[0].value,
  //     from: "techmarketpf@gmail.com",
  //     subject:"Successful Registration",
  //     text:"Welcome, you have successfully registered",
  //     html:`<h1>Welcome ${profile.name.givenName} to Techmarket</h1><img src=${image} alt="" />`
  //   }
  //   await sgMail.send(msg);
  //   }catch(error){
  //     console.log(error)
  // }
  return newUser;
}

let userWithToken = function(user) {
  let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires });
  return {
    user: user,
    token: token
  }
}

module.exports = loginWithGoogle;