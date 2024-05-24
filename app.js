require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://vivektemptest:wGG62CicX1IGDwBn@macros.bpdde9f.mongodb.net/?retryWrites=true&w=majority&appName=macros"
  )
  .then(() => app.listen(5000, () => console.log("connected database")))
  .catch((err) => console.log(err));

//routes
app.use(express.json());
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
app.get("/", (request, response) => {
  response.status(200).json({
    status: "success",
    message: "hello",
  });
});

//all routes here
app.use("/api/v1/auth", authRoute);

//users routes
app.use("/users", userRoute);

//route not found
app.use("*", (request, response, next) => {
  response.status(404).json({
    status: false,
    message: "Route not found",
  });
});

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, function () {
  console.log("server running");
});
