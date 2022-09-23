import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";
import { compareSync } from 'bcrypt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
// const passport = require("passport");


const GOOGLE_CLIENT_ID="744815306098-6j8n1eua04vepnaccbsj45crs1v7cr4b.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

// const GITHUB_CLIENT_ID = "0b2f76a40f13d7dfb4f1";
// const GITHUB_CLIENT_SECRET = "0c89dde188fb50cd9e50a055eb2a67a6db8c5776";

// const FACEBOOK_APP_ID = "your-id";
// const FACEBOOK_APP_SECRET = "your-id";

// passport.use(
//   new LocalStrategy(
//     function(email, password, done) {
//       console.log('entre a passport')
//       User.findOne({ email: email }, function (err, user) {
//         if (err) { return done(err, { msg: "Error in login (Passport)" }); }
//         if (!user) { return done(null, false, { msg: "User with this email not found" }); }
//         if (!compareSync(password, user.password)) { return done(null, false, { msg: "Incorrect password" }); }
//         return done(null, user);
//       });
//     }
//   )
// );



passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { msg: "User with this email not found" });
      }
      // Match Password's User
      if (!compareSync(password, user.password)){
        return done(null, false, { msg: "Incorrect password" });
      } else {
        return done(null, user)
      }
    }
  )
);

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  } 
// function(accessToken, refreshToken, profile, cb) { // PODEMOS USAR EL CB PARA CREAR UN USUARIO SINO EXISTE
//   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });
// }
));

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
