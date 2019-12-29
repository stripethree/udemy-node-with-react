const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./recipient");

const surveySchema = new Schema({
  body: String,
  recipients: [RecipientSchema],
  subject: String,
  title: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model("surveys", surveySchema);
