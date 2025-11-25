const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI); // Use Mongoose to connect with MongoDB instance

const PORT = process.env.PORT || 5001;
const app = express();

// Cookie automatically expires after 30 days. Keys property encrypts the cookie.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

require("./routes/authRoutes")(app); // Require in this module and call its function with app as its argument

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
