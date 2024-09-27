const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const movieRouter = require("./routes/movieRoutes")
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/movie", movieRouter);
const port = 8080;
app.listen(port, () => console.log(`listening in port  number ${port}`))