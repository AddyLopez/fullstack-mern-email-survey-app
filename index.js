const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const PORT = process.env.PORT || 5001;
const app = express();

// Authenticate users with Google Strategy. Function in second argument is where app can get user details, create new record in database, etc.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token:", accessToken);
      console.log("refresh token:", refreshToken);
      console.log("profile:", profile);
    }
  )
);

// Whenever a user visits this endpoint, attempt to authenticate that user (no code property has been sent from Google yet)
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// In this case, Passport will see the code property sent from Google. Exchange code for user's profile.
app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
