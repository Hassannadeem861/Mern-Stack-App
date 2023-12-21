//0.0.0.0/0 = is database ko kahi sai bhi access kya g sakai 
//Document base dataBase
//Mongodb schema less hai mongodb big data ko handle karna ka lya bnanya gya hai
//hum sehema is banata hai is sai huma validation mil gati hai

// database.js
import mongoose from "mongoose";
//Mongodb Uri = ya mera database ki connect Url hain
// ya mera database taak gana ki rasta hain
// connection string
// const URI = "mongodb://127.0.0.1:27017/my_database";
const MONGODB_URI = 
  process.env.MONGODB_URI ||
  "mongodb+srv://Hassan:Hassan741883@cluster0.jjpseix.mongodb.net/my_database?retryWrites=true&w=majority";

// connect to database
const connectDB = async () => {
  try {
   const response =  await mongoose.connect(MONGODB_URI);
    // console.log("response: ", response);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
    //connect is closing
    // await client.close();
  }
};
// response().catch(console.dir)

//application ko exit karna
process.on("SIGINT", async function () {
  console.log("app is terminating");
  await client.close();
  process.exit(0);
});

// export connection
export default connectDB;


// const mongodbURI = process.env.mongodbURI || "mongodb+srv://dbuser:dbpassword@cluster0.gq9n2zr.mongodb.net/abcdatabase?retryWrites=true&w=majority";
// /////////////////////////////////////////////////////////////////////////////////////////////////
// mongoose.connect(mongodbURI);

// ////////////////mongodb connected disconnected events///////////////////////////////////////////////
// mongoose.connection.on('connected', function () {//connected
//     console.log("Mongoose is connected");
// });

// mongoose.connection.on('disconnected', function () {//disconnected
//     console.log("Mongoose is disconnected");
//     process.exit(1);
// });

// mongoose.connection.on('error', function (err) {//any error
//     console.log('Mongoose connection error: ', err);
//     process.exit(1);
// });

// process.on('SIGINT', function () {/////this function will run jst before app is closing
//     console.log("app is terminating");
//     mongoose.connection.close(function () {
//         console.log('Mongoose default connection closed');
//         process.exit(0);
//     });
// });
