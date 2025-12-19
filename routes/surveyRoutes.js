const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("Survey");

module.exports = (app) => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for your feedback!");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // Create new Survey instance
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((recipient) => {
        return { email: recipient.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Create and send email, then save survey
    const mailer = new Mailer(survey, surveyTemplate(survey)); // 1st arg passes survey object to extract subject and recipients properties. 2nd arg is HTML content to use in body of email.
    try {
      await mailer.send();
      await survey.save();

      // Deduct one credit for services
      req.user.credits -= 1;
      const user = await req.user.save(); // The constant user is the updated user model that is returned

      res.send(user); // Will enable updated number of credits to appear on frontend
    } catch (err) {
      res.status(422).send(err); // Unprocessable Entity status code
    }
  });
};
