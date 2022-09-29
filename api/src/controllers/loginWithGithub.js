import User from "../models/User.js";
import { hashSync } from 'bcrypt';
import axios from 'axios';
import { secret, expires, rounds } from '../auth.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

export const loginWithGithub = async (req, res) => {
    const code = req.query.code;
    const access_token = await getAccessToken({ code, client_id, client_secret });
    const user = await getGitHubUser(access_token);
    
    if (user) {
        try {
            let userFound = await User.findOne({ email: user.email });
            let userToReturn = !userFound ? await createUserWithGithubProfile(user) : userFound;
            res.json(userGHWithToken(userToReturn));
        } catch (err) { 
            res.status(500).json(err);
        }
    } else {
        res.send("Login did not succeed!");
    }
};

async function getAccessToken({ code, client_id, client_secret }) {
    const request = await axios.post("https://github.com/login/oauth/access_token", {
        client_id,
        client_secret,
        code
      })
    
    .then((response) => { return response })
    .catch((err) => {
      console.log('ERROR EN getAccessToken', err);
    });
    const data = await request.data;
    const params = new URLSearchParams(data);
    return params.get('access_token');
}
  
async function getGitHubUser(token) {
const request = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: "token " + token
      }
  })
  .then((response) => { return response })
  .catch((err) => {
  });
  return await request.data;
}
  
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