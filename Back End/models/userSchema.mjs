import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


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

// Compare Password
userSchema.methods.comparePassword = async function(password){
  return bcrypt.compare(password, this.password );
}

// json web token
// instance methode
userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      {
        userId: this?._id?.toString(),
        email: this?.email,
        isAdmin: this?.isAdmin,
      },

      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    console.log("token:", token);
    console.log("this:", this);
    // console.log("userId:", userId);
    // console.log("email:", email);
    // console.log("isAdmin:", isAdmin);
    // console.log("JWT_SECRET_KEY:", JWT_SECRET_KEY);

    return token;
  } catch (error) {
    console.log("Token Generation Error: ", error);
    // res.status(401).send({ message: "Incorrect email or password" });
  }
};

// Define the module or the collection name
const userModel = new mongoose.model("users", userSchema);
export default userModel;
