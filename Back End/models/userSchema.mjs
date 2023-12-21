import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// const SECRET = process.env.SECRET || "Hassan Nadeem";

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

// json web token 
// instance methode
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        "userId": this?._id.toString(),
        "email": this?.email,
        "isAdmin": this?.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      // process.env.JWT_SECRET_KEY || "Hassan Nadeem",
      {
        expiresIn: "30d",
      });
    // console.log("this:", this);
  } catch (error) {
    console.log("error: ", error);
    res.status(401).send({ message: "Incorrect email or password" });

  }
};

// Define the module or the collection name
const userModel = new mongoose.model("users", userSchema);
export default userModel;
