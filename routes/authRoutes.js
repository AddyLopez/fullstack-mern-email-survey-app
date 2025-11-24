// Whenever a user visits this endpoint, attempt to authenticate that user (no code property has been sent from Google yet)
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// In this case, Passport will see the code property sent from Google. Exchange code for user's profile.
app.get("/auth/google/callback", passport.authenticate("google"));
