const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const User = require('../models/User');

passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if (currentUser) {
        console.log('user is: ', currentUser);
      } else {
        new User({
          googleId: profile.id,
          username: profile.displayName
        }).save().then((newUser) => {
          console.log('created new user: ', newUser);
        });
      }
    });
  })
);