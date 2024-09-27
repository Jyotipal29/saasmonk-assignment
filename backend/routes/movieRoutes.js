const express = require("express");
const router = express.Router();

const {
    getMovies,
    addMovies
} = require(
    "../controllers/movieControllers"
)



router.get("/", getMovies)
router.post("/add", addMovies)


module.exports = router