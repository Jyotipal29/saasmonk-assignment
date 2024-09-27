const express = require("express");
const router = express.Router();

const {
    getMovies,
    addMovies,
    editMovies
} = require(
    "../controllers/movieControllers"
)



router.get("/", getMovies)
router.post("/add", addMovies)
router.post("/edit", editMovies)


module.exports = router