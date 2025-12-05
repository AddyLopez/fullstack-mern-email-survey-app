const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // Handle token, reach out to Stripe API, finalize charge, update user's credits

    if (!req.user) {
      return res.status(401).send({ error: "Please log in." }); // 401 Forbidden
    }
    // console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });

    // console.log(charge);

    req.user.credits += 5; // Add credits to current user model
    const user = await req.user.save(); // Save user to persist changes. user variable represents most up-to-date user model copied from database (returned from save function).

    res.send(user); // Send updated user model in response
  });
};
