const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI); // Use Mongoose to connect with MongoDB instance

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json()); // Middleware parses req.body

// Cookie automatically expires after 30 days. Keys property encrypts the cookie.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Tell app to make use of cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // Require in this module and call its function with app as its argument
require("./routes/billingRoutes")(app); // More function currying as above
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up specific static production assets (e.g. main.js or main.css)
  app.use(express.static("client/build"));

  // Catch-all/Fallback: Express will serve up index.html if it doesn't recognize the route.
  const path = require("path");
  app.get("/*path", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
