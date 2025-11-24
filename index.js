const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const PORT = process.env.PORT || 5001;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
