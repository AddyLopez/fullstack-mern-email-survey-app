const Path = require("path-parser").default; // To help extract survey ID and choice properties from path
const { URL } = require("url"); // In-built Node module to help parse URLs.
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("Survey");

module.exports = (app) => {
  app.get("/api/surveys/thanks", (req, res) => {
    const reply = `<main style="background-color: #d3eff8ff; border-radius: 10px; font-family: Monaco, sans-serif; padding: 20px 10px 40px 10px; text-align: center;"><h1>Thanks for sharing your feedback!</h1></main>`;
    res.send(reply);
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const { body } = req;
    const events = body.map((event) => {
      const pathName = new URL(event.url).pathname; // Extract the path from the URL
      const pathToParse = new Path("/api/surveys/:surveyId/:choice"); // Uses path-parser library. Goal is to extract survey ID and choice from URL.
      console.log(pathToParse.test(pathName));
    });
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

    console.log(survey);

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
