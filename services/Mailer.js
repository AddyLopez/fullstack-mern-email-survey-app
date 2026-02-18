const Mailgun = require("mailgun-js");
//const mailgun = new Mailgun(FormData);
// const sendGrid = require("sendgrid");
// const helper = sendGrid.mail; // Mail class from SendGrid library
const keys = require("../config/keys");

class Mailer /*extends helper.Mail*/ {
  constructor({ subject, recipients }, content) {
    this.mailgun = mailgun({
      apiKey: keys.mailgunKey,
      domain: keys.mailgunDomain,
    });

    this.data = {
      from: "shandelaide@gmail.com",
      to: this.formatAddresses(recipients),
      subject: subject,
      html: content,
      "o:tracking-clicks": true,
    };
    /*super();

    this.sgAPI = sendGrid(keys.sendGridKey); // Pass in API key to communicate with sendGrid API
    this.from_email = new helper.Email(keys.sendGridFromEmail);
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // Built-in functionality from SendGrid's helper.Mail base class
    this.addClickTracking(); // To have SendGrid keep track of which recipient clicked a link in the email
    this.addRecipients(); // Add recipients to the mailer
    */
  }

  formatAddresses(recipients) {
    return recipients
      .map(({ email }) => {
        return email; /* new helper.Email(email); // Format each recipient's email with SendGrid's helper function */
      })
      .join(",");
  }

  /*
  addClickTracking() {
    // SendGrid boilerplate (not well-documented)
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    // Add each recipient to the personalize object
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    // Add completed personalization object
    this.addPersonalization(personalize); // Built-in functionality from SendGrid's helper.Mail base class
  }
  */

  async send() {
    return new Promise((resolve, reject) => {
      this.mailgun.messages().send(this.data, (error, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
    /*
    try {
      // toJSON and API methods are defined by base class
      const request = this.sgAPI.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: this.toJSON(),
      });

      const response = await this.sgAPI.API(request);
      console.log(response);
      return response;
    } catch (error) {
      console.log("error", error.message);
    }
    */
  }
}

module.exports = Mailer;
