const passport = require("passport"); // Require in original Passport NPM module here (not directly related to Passport config in services/passport.js)

module.exports = (app) => {
  // Whenever a user visits this endpoint, attempt to authenticate that user (no code property has been sent from Google yet)
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // In this case, Passport will see the code property sent from Google. Exchange code for user's profile.
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout(); // Strips user ID from cookie to log out user
    res.send(req.user); // To prove that user is no longer logged in
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
