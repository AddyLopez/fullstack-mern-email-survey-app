const Mailgun = require("mailgun-js");
const formData = require("form-date");
const mailgun = new Mailgun(formData);
const keys = require("../config/keys");

class Mailer /*extends helper.Mail*/ {
  constructor({ subject, recipients }, content) {
    this.mailgun = mailgun.client({
      username: "api",
      key: keys.mailgunKey,
      url: keys.mailgunDomain,
    });

    this.data = {
      from: "shandelaide@gmail.com",
      to: recipients,
      subject: subject,
      html: content,
      "o:tracking-clicks": true,
    };
  }

  async send() {
    return await this.mailgun.messages
      .create(keys.mailgunDomain, this.data)
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  }
}

module.exports = Mailer;
