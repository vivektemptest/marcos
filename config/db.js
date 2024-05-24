const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose
    //   .connect(
    //     "mongodb+srv://vivektemptest:pgWNVtFVowkm1puH@macros.bpdde9f.mongodb.net/?retryWrites=true&w=majority&appName=macros"
    //   )
    //   .then(() => app.listen(5000, () => console.log("connected database")))
    //   .catch((err) => console.log(err));

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
