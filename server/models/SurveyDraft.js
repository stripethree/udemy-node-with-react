const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveyDraftSchema = new Schema({
  body: String,
  dateSaved: Date,
  recipients: String,
  subject: String,
  title: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("surveyDrafts", surveyDraftSchema);
