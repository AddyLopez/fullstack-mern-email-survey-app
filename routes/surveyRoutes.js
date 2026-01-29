const _ = require("lodash");
const { Path } = require("path-parser"); // To help extract survey ID and choice properties from path
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
    const pathToParse = new Path("/api/surveys/:surveyId/:choice"); // Uses path-parser library. Goal is to extract surveyId and choice from URL.

    _.chain(body)
      .map((event) => {
        const pathName = new URL(event.url).pathname; // Extract the path from the URL
        const match = pathToParse.test(pathName); // Will return either an object (with surveyId and choice properties) or null
        // Discard records without surveyId and choice properties
        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice,
          };
        }
      })
      .compact() // Remove undefined elements from unfilteredEvents list using Lodash library
      .uniqWith((a, b) => a.email === b.email && a.surveyId === b.surveyId) // Feed comparator function (of two elements in array) into uniqWith method to remove duplicates (i.e. only return unique elements). (The email and surveyId properties have one-to-many and many-to-one relationships.)
      .each((event) => {
        // This Mongoose query and update is executed entirely within Mongo database. Advantage: No need to freight data back and forth between Express and Mongo.
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 }, // Mongo operator. Find 'choice' property (i.e. 'yes' or 'no') and increment its value by one (i.e. one vote). ES16 key interpolation used (e.g. [choice]).
            $set: { "recipients.$.responded": true }, // Mongo operator. Set recipients 'responded' property to 'true'. The $ corresponds to element matched in subdocument collection using $elemMatch in query
          }
        ).exec(); // Execute the query
      })
      .value(); // Pull out the array

    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // Create new Survey instance
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((recipient) => {
        return { email: recipient.toLowerCase().trim() };
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
