const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define properties of user inside Users collection
const userSchema = new Schema({
  googleId: String,
});

// (If "users" collection not already created then) Create users Model Class with the userSchema using Mongoose
mongoose.model("users", userSchema);
