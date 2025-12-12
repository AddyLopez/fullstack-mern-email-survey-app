const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

// Survey properties: title, body, subject, recipients
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

// If "surveys" collection not already created then create surveys Model Class with the surveySchema using Mongoose
mongoose.model("surveys", surveySchema);
