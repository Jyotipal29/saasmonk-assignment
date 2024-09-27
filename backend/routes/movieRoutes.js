const express = require("express");
const router = express.Router();

const {
    getMovies,
    addMovies,
    editMovies,
    deleteMovies
} = require(
    "../controllers/movieControllers"
)



router.get("/", getMovies)
router.post("/add", addMovies)
router.post("/edit", editMovies)
router.delete("/delete/:id", deleteMovies)


module.exports = router