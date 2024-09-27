const express = require("express");
const router = express.Router();

const {
    getReviews,
    addReviews,
    editReviews,
    deleteReviews

} = require(
    "../controllers/reviewControllers"
)



router.get("/:id", getReviews)
router.post("/add", addReviews)
router.post("/edit", editReviews)
router.delete("/delete/:id", deleteReviews)


module.exports = router