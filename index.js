// Dependencies
require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors');

// Routes
const warframeRoutes = require("./routes/warframes")

// Express App
const app = express();

// Initializing PORT
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json())

// Middleware to deal with CORS
app.use(cors({
    origin: ['http://localhost:3000']
}));

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