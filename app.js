const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require('./config/db');


const userRoutes = require('./routes/userRoute');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
