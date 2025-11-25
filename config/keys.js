// Determine whether it's a production or development environment
if (process.env.NODE_ENV === "production") {
  // return production keys
  module.exports = require("./prod"); // Import and export contents
} else {
  // return development keys
  module.exports = require("./dev"); // Import and export contents
}
