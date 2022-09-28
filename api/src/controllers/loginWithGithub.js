import User from "../models/User.js";
import { compareSync, hashSync } from 'bcrypt';
import axios from 'axios';
import { secret, expires, rounds } from '../auth.js';
import jwt from 'jsonwebtoken';

const client_id = "217155178f2112b69dcb";
const client_secret = "4bde214f64234987f34a2dcc0fd0c7d93585e72b";

export const loginWithGithub = async (req, res) => {
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
            res.json(userGHWithToken(userToReturn));
        } catch (err) { 
            res.status(500).json(err);
        }
        //res.redirect("http://localhost:3000/home");
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
    // data: 'access_token=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&scope=user%3Aemail&token_type=bearer'
    console.log('DATA ACCESS_TOKEN', data);
    const params = new URLSearchParams(data);
    console.log('PARAMS getAccessToken', params.get('access_token'))
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