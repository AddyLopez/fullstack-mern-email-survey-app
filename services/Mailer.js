const sendGrid = require("sendgrid");
const helper = sendGrid.mail; // Mail class from sendgrid library
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email(keys.sendGridFromEmail);
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
  }

  formatAddresses(recipients) {
    const emails = recipients.map(({ email }) => {
      return new helper.Email(email); // Format each recipient's email with sendGrid's helper function
    });
    return emails;
  }
}

module.exports = Mailer;
