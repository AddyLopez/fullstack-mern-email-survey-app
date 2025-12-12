const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/email_templates/surveyTemplate");

const Survey = mongoose.model("Survey");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // Create new Survey instance
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => {
        ({ email: email.trim() });
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Attempt to create and send email
    const mailer = new Mailer(survey, surveyTemplate(survey)); // 1st arg passes survey object to extract subject and recipients properties. 2nd arg is HTML content to use in body of email.

    // Email sent successfully?
    // Save survey!
  });
};
