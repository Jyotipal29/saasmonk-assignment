const express = require('express');
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const movieRouter = require("./routes/movieRoutes")
const reviewRouter = require("./routes/reviewRoutes")
const app = express();
connectDB();
// app.get('/', (req, res) => res.send('Home Page Route'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));