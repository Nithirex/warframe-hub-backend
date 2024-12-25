// Dependencies
require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")

// Routes
const warframeRoutes = require("./routes/warframes")

// Express App
const app = express();

// Initializing PORT
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json())

// Using routes
app.use("/api/warframes", warframeRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(
            PORT,
            () => console.log("Connected to MongoDB & Listening on port", PORT)
        )
    })
    .catch((err) => { console.log(err) })