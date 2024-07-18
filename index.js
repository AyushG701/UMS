const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/user_management_system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Bind connection to open event (once the connection is established)
db.once("open", function () {
  console.log("Connected to MongoDB successfully!");
});

const express = require("express");
const app = express();

//for user routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

//for admin routes
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);

app.listen(3000, function () {
  console.log("Server is runnnig...");
});
