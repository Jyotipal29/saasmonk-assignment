const Review = require("../models/review")
const Movie = require("../models/movie")
const getReviews = async (req, res) => {
    const { id } = req.params

    try {

        const review = await Review.find({ movieId: id })
        const movie = await Movie.findOne({ _id: id });
        res.json({
            status: 201, data: { review, movie }
        })

    } catch (err) {
        res.status(500).json({ message: err.message });

    }


}


const addReviews = async (req, res) => {

    try {

        const {

            movieId,
            reviewerName,
            rating,
            reviewComment

        } = req.body;


        const newReview = new Review({
            reviewerName,
            rating,
            reviewComment,
            movieId,
        });
        await newReview.save();
        const reviews = await Review.find({ movieId });
        const averageRating = reviews.length
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
            : 0;

        // Update the movie's average rating
        const movie = await Movie.findById(movieId);
        if (movie) {
            movie.averageRating = averageRating;
            await movie.save();
        }

        res.json({
            status: 201, data: newReview
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


const editReviews = async (req, res) => {
    const { rating, reviewComment, movieId, reviewerName, id } = req.body;

    try {
        const review = await Review.findById({ _id: id })

        if (!review) {
            res.json({ status: 404, message: "review not found" })
        }

        review.reviewerName = reviewerName;
        review.rating = Number(rating);
        review.reviewComment = reviewComment;
        review.movieId = movieId;
        await review.save();

        const reviews = await Review.find({ movieId });
        const averageRating = reviews.length
            ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
            : 0;

        // Update the movie's average rating
        const movie = await Movie.findById(movieId);
        if (movie) {
            movie.averageRating = averageRating;
            await movie.save();
        }




        res.json({ status: 200, data: review })



    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const deleteReviews = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findOne({ _id: id });
        if (review) {
            await Review.deleteOne({ _id: req.params.id });

            const reviews = await Review.find({ movieId: review.movieId });
            const averageRating = reviews.length
                ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
                : 0;

            // Update the movie's average rating
            const movie = await Movie.findById(review.movieId);
            if (movie) {
                movie.averageRating = averageRating;
                await movie.save();
            }
            res.json({ status: 200, message: "Deleted Successfully" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getReviews,
    addReviews,
    editReviews,
    deleteReviews

}