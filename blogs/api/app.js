const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/Post");
const categoriesRoute = require("./routes/categories");

//config
const app = express();
app.use(express.json());
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res, next) => {
  res.status(200).json("File has been uploaded");
});

// routers
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", categoriesRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("Mongodb connected!");
    app.listen("8000", () => console.log("Server is running on port 8000"));
  })
  .catch((err) => console.log(err));
