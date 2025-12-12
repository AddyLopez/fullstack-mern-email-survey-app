const sendGrid = require("sendgrid");
const helper = sendGrid.mail; // Mail class from sendgrid library
const keys = require("../config/keys");

class Mailer extends helper.Mail {}

module.exports = Mailer;
