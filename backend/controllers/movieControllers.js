const Movies = require("../models/movie")

const getMovies = async (req, res) => {
    try {

        const movies = await Movies.find({})
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

        const newMovie = new Movies({
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

module.exports = {
    getMovies,
    addMovies
}