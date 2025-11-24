const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define properties of user inside Users collection
const userSchema = new Schema({
  googleId: String,
});

// Create users Model Class with the userSchema using Mongoose
mongoose.model("users", userSchema);
