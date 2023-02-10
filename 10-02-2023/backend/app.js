"use strict";
require("dotenv").config();
const express = require("express");
// const morgan = require('morgan')
const cors = require('cors')
const pool = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares to parse into express server
// app.use(morgan());
app.use(express.json());
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
app.use(cors(corsOptions));

// Connect Database
pool.getConnection(function (err, conn) {
  // Do something with the connection
  if (err) throw err;
  console.log("Database Connected");
});

// Routes
app.use('/api/user', require('./routes/userRoutes'))

app.get("/test", (req, res) => {
  res.json({
    message: "Api is running.",
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
