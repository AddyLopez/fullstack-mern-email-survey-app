const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("./api/create-checkout-session", requireLogin, async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Inquire Credits",
              description: "$5 for 5 credits",
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${keys.redirectDomain}/api/stripe/sucess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${keys.redirectDomain}/api/stripe/cancel`,
    });

    res.json({ id: session.id });
  });

  app.get("api/stripe/success", requireLogin, async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id,
    );
    const paymentIntent = await stripe.paymentIntents.retrieve(
      session.payment_intent,
    );

    if (paymentIntent.status === "succeeded") {
      req.user.credits += 5; // Add credits to current user model
      const user = await req.user.save(); // Save user to persist changes. user variable represents most up-to-date user model copied from database (returned from save function).
      res.redirect("/surveys");
    } else {
      res.status(400).send("Payment failed");
    }
  });

  app.get("/api/stripe/cancel", (req, res) => {
    res.redirect("/");
  });
};
