//config/passport.js
require('dotenv').config()

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');


console.log(process.env.GOOGLE_CLIENT_ID)
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
},
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }, (err, user) => {
      if (err) return done(err);
      if (user) return done(null, user);

      const newUser = new User({ googleId: profile.id });
      newUser.save((err) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    });
  }
));

module.exports = passport;
