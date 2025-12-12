const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, (req, res) => {
    // Is user logged in?
    // Do they have enough credits?
  });
};
