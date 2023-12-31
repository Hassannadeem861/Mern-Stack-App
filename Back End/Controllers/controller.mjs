// Express.js mein "controllers" ka istemal aapke application ki logic ko tarteeb dene aur handle karne ke liye hota
// hai. Controllers incoming requests ko handle karte hain, data ko process karte hain,
// aur client ko appropriate response bhejne ke liye zimmedar hote hain.
// Yahan do aam tareeqay hain controllers ko Express.js mein organize karne ke liye:
// functional approach aur class-based approach.

// What is JWT
// authentication ka matlab hai ka ap kisi ko identify kar raha ho kya ya wohi user hai ya nahi
// authorization ka matlab hain ovens ap nai identify kar lya ka ya wohi person hai ya nahi
// to is ki base pa ap is person ko kuch access do ga

// Headers
// token ka bhi go information rakta ho
// Payload
// payload main hum user ki information add kar sakta hain asa identity
// Signature
// signature ka matla hain gaha par ak asa signature ho ga ya value ho ga go server ko pata hota hain

// JWT NOT STORE IN DATABASE
// jwt ka token ko apna cliet site browser par store karna hain like localStorge | cookies

import userModel from "../models/userSchema.mjs";
import { stringToHash, varifyHash } from "bcrypt-inzi";
// import bcrypt from "bcryptjs";
// ++++++++++++++++++++++++++++
// Home Controller
// ++++++++++++++++++++++++++++

let home = async (req, res) => {
  try {
    res.status(200).send("This is auth page");
  } catch (error) {
    console.log("error: ", error);
  }
};

// ++++++++++++++++++++++++++++
// USER Register LOGIC
// ++++++++++++++++++++++++++++

let register = async (req, res) => {
  let userCreated; // Declare userCreated outside try block

  try {
    const { username, email, password, phonenumber } = req.body;
    console.log("req.bodyRegistation : ", req.body);
    // check if user already exist // query email user
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      console.log("user is already exist is this email: ", userExist);
      return res
        .status(400)
        .json({ msg: "user already exist,, please try a different email" });
    } else {
      // Password convert to hash
      const saltRound = 10;
      const convertToHash = await stringToHash(password, saltRound);
      console.log("convertToHash: ", convertToHash);

      const result = await varifyHash(
        convertToHash,
        "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
      );

      if (result) {
        console.log("hash matched");
      } else {
        console.log("hash not matched");
      }

      // user not already exist
      userCreated = await userModel.create({
        username,
        email,
        password: convertToHash,
        phonenumber,
      });
      // console.log("userCreated: ", userCreated);
      console.log("data saved in mongodb");
    }
  } catch (error) {
    next(error);
    console.log("error: ", error);
    // return res.status(500).send("internal server error");
  }
  // If no error occurred, send the response
  res.status(201).json({
    msg: "Registration successful",
    token: await userCreated?.generateToken(),
    userId: userCreated?._id?.toString(),
  });
  console.log("userCreated Registation: ", userCreated);
};

// ++++++++++++++++++++++++++++
// USER LOGIN LOGIC
// ++++++++++++++++++++++++++++

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Email data", req.body);

    const userExist = await userModel.findOne({ email: email });
    console.log("userExist login: ", userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    // const comparePassword = await bcrypt.compare(
    //   password,
    //   userExist.password
    // );

    const comparePassword = await userExist.comparePassword(password);
    console.log("Match Password: ", comparePassword);

    if (comparePassword) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist?.generateToken(),
        userId: userExist?._id?.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email and password" });
    }
  } catch (error) {
    next(error);
    console.log("error: ", error);
    // return res.status(500).send("internal server error");
  }
};

export { home, register, login };

// console.log("req.body: ", req.body);
// const { userName, userEmail, userPassword, userPhoneNumber } = req.body;
// console.log("data: ", data)
// console.log("userName", userName);
// console.log("userEmail", userEmail);
// console.log("userPassword", userPassword);
// console.log("userPhoneNumber", userPhoneNumber);

// const userExist = await userModel.findOne({ email: userEmail });
// console.log("userExist: ", userExist);
// if (userExist) {
//   console.log("user already exist: ", userExist);
//   return res
//     .status(400)
//     .json({ msg: "user already exist,, please try a different email" });
// } else {
//   await userModel.create({
//     userName,
//     userEmail,
//     userPassword,
//     userPhoneNumber,
//   });

//   res.status(200).json({ msg: req.body });
// }

// if (
//   !data.userName ||
//   !data.userEmail ||
//   !data.userPassword ||
//   !data.userPhoneNumber
// ) {
//   res.status(400).send(`Required Fields Missing
//   {
//     "userName":"Hassan Nadeem",
//     "userEmail":"hassan@gmail.com",
//     "userPassword":"123456",
//     "userPhoneNumber":"03164593747"

//   }`);
//   return;

// }

// check if user already exist // query email user
// const userExist = await userModel.findOne({email:userEmail });
// if (userExist) {
//   console.log("User already exists: ", userExist);
//   res.status(400).json({ msg: "user already exist,, please try a different email" });
//   return
// }
//   // user not already exist
//   await userModel.create({
//     userName,
//     userEmail,
//     userPassword,
//     userPhoneNumber,
//   });

// let data = req?.body;
// if (
//   !data?.body.userName ||
//   !data?.body.userEmail ||
//   !data?.body.userPassword ||
//   !data?.body.userPhoneNumber
// ) {
//   res.status(400).send(`Required Fields Missing
// {
// "body.":"Hassan Nadeem",
// "userEmail":"hassan@gmail.com",
// "userPassword":"123456",
// "userPhoneNumber":"03164593747"

// }`);
//   // return;
// }

// req.body.email = req.body.email.toLowerCase();
