const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  body: String,
  dateSent: Date,
  lastResponded: Date,
  recipients: [RecipientSchema],
  subject: String,
  title: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("surveys", surveySchema);
