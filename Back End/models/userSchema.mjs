import mongoose from "mongoose";
import JWT from 'jsonwebtoken'

const SECRET = process.env.SECRET || "Hassan Nadeem";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// Define the module or the collection name
const userModel = new mongoose.model("users", userSchema);
export default userModel;
