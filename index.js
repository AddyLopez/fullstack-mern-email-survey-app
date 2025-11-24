const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoURI); // Use Mongoose to connect with MongoDB instance

const PORT = process.env.PORT || 5001;
const app = express();

require("./routes/authRoutes")(app); // Require in this module and call its function with app as its argument

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
