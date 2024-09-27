const Movie = require("../models/movie")
const Review = require("../models/review");
const getMovies = async (req, res) => {
    try {

        const movies = await Movie.find({})
        res.json({
            status: 201, data: movies
        })

    } catch (err) {
        res.status(500).json({ message: err.message });

    }


}


const addMovies = async (req, res) => {

    try {
        const {
            name,
            releaseDate,

        } = req.body;


        const newMovie = await Movie.create({
            name,
            releaseDate
        })

        await newMovie.save()

        res.json({
            status: 201, data: newMovie
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}


const editMovies = async (req, res) => {
    const { id, name, releaseDate } = req.body;

    try {
        const movie = await Movie.findById({ _id: id })

        if (!movie) {
            res.json({ status: 404, message: "Movie not found" })
        }

        movie.name = name;
        movie.releaseDate = releaseDate;
        await movie.save();
        res.json({ status: 200, data: movie })



    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const deleteMovies = async (req, res) => {
    const { id } = req.params;


    try {
        const data = await Movie.deleteOne({ _id: id })
        await Review.deleteMany({ movieId: id });
        res.json({ status: 200, data: data })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getMovies,
    addMovies,
    editMovies,
    deleteMovies

}