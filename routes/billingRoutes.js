module.exports = (app) => {
  app.post("/api/stripe", (req, res) => {
    // Handle token, reach out to Stripe API, finalize charge, update user's credits
  });
};
