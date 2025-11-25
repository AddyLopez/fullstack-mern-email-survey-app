const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); // Access Mongoose's User model class

// Authenticate users with Google Strategy. Function in second argument is where app can get user details, create new record in database, etc.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save(); // Create new Model Instance of a User (one discrete record) and save it (otherwise it won't persist in the database)
    }
  )
);
