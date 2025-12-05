const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", (req, res) => {
    // Handle token, reach out to Stripe API, finalize charge, update user's credits
  });
};
