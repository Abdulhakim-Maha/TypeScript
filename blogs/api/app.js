const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());
dotenv.config();

// routers
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("Mongodb connected!");
    app.listen("8000", () => console.log("Server is running on port 8000"));
  })
  .catch((err) => console.log(err));
