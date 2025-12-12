const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define properties of user inside Users collection
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// (If "users" collection not already created then) Create users Model Class with the userSchema using Mongoose
mongoose.model("User", userSchema);
