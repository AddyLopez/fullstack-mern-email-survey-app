const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const PORT = process.env.PORT || 5001;
const app = express();

passport.use(new GoogleStrategy()); // Authenticate users with Google

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
