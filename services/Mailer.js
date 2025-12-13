const sendGrid = require("sendgrid");
const helper = sendGrid.mail; // Mail class from SendGrid library
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email(keys.sendGridFromEmail);
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // Built-in functionality from SendGrid's helper.Mail base class
    this.addClickTracking(); // To have SendGrid keep track of which recipient clicked a link in the email
    this.addRecipients(); // Add recipients to the mailer
  }

  formatAddresses(recipients) {
    const emails = recipients.map(({ email }) => {
      return new helper.Email(email); // Format each recipient's email with SendGrid's helper function
    });
    return emails;
  }

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
}

module.exports = Mailer;
