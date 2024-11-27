const express = require('express');
const { connectDB } = require('./config/dbConnection');
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001;
const bodyParser = require("body-parser");
const cors = require('cors');
// rate limiter
const rateLimit = require('express-rate-limit');



const limiter = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : 100,
    message : 'Too Many Requests From This IP Address , Try Again After 15 Minutes'
});

app.use(limiter);

// db connection
connectDB();

// cross origin resource sharing
app.use(cors());

app.use(express.json({extended : false}));
app.use(bodyParser.urlencoded({extended : false}));

app.use("/api/auth",require("./Routers/authRouter"));
app.use("/api/recipe",require("./Routers/recipeRouter"));
app.use("/api/user/recipe",require("./Routers/mailRouter"));
app.use("/api/user",require("./Routers/feedbackRouter"));


app.listen(PORT,()=>console.log(`Server Is Running In The PORT Of ${PORT}`));