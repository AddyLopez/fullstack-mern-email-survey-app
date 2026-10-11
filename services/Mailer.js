const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(FormData);
const keys = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content) {
    this.mailgun = mailgun.client({
      username: "api",
      key: keys.mailgunKey,
      url: `https://api.mailgun.net/v3/${keys.mailgunDomain}/messages`,
    });

    this.data = {
      from: "shandelaide@gmail.com",
      to: [this.formatAddresses(recipients)],
      subject: subject,
      html: content,
      "o:tracking-clicks": true,
    };
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email).join();
  }

  async send() {
    console.log("This.mailgun: ", this.mailgun);
    console.log("This.data ", this.data);

    return await this.mailgun.messages
      .create(keys.mailgunDomain, this.data)
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  }
}

module.exports = Mailer;
