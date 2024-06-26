const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const cors = require("cors");
const conn = require("./config/db");
require("dotenv").config();
// const client = require("twilio")(
//   process.env.ACCOUNT_SID,
//   process.env.AUTH_TOKEN
// );
const userRoute = require("./middleware/user.Route");
const bagRoute = require("./middleware/bag.Router");
const addressRoute = require("./middleware/address.Route");

//app.use(cors());//only this comment off
// app.use(bodyParser.json());


//checking
app.use(cors({
  origin:"*",
  methods:"GET,POST, PATCH,DELETE",
  credentials:true,

}))

app.use(express.json());









//checking

app.get('/', (req, res) => {
  res.send('Hello World')
})



app.use("/", userRoute);
app.use("/", bagRoute);
app.use("/", addressRoute);

// const sentOpt = (mobileNumber) => {
//   const otp = "124589";
//   return client.message.create({
//     body: `Your OTP is ${otp}`,
//     from: process.env.TWILIO_NUMBER,
//     to: mobileNumber,
//   });
// };

// app.post("/sentOTP", async (req, res) => {
//   const { mobileNumber } = req.body;
//   if (!mobileNumber) {
//     res.status(400).json({ error: "mobile number is required" });
//   }
//   try {
//     await sentOpt(mobileNumber);
//     res.json({ message: "OTP sent successfully" });
//   } catch (err) {
//     res.json({ error: "something went wrong" });
//   }
// });

app.listen(process.env.PORT, async () => {
  try {
    await conn;
    console.log("connected");
  } catch {
    console.log("not connected");
  }
  console.log("port is running on 8000");
});
