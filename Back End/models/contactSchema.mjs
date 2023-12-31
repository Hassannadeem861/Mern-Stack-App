import { Schema, model } from "mongoose";

// Create a contactSchema
const contactSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// Create a Model
const contactModel = new model("contacts", contactSchema);
export default contactModel;
