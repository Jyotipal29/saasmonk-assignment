import { useCritic } from "../context";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import cancelIcon from "../assets/cancel.svg";
import { addMovie, editMovie } from "../service";
const MovieForm = () => {
  const {
    movieMode,
    setMovieMode,
    setMovies,
    selectedMovie,
    setSelectedMovie,
    movies,
  } = useCritic();
  const [startDate, setStartDate] = useState(
    movieMode === "edit" ? new Date(selectedMovie?.releaseDate) : new Date()
  );
  const [name, setName] = useState(
    movieMode === "edit" ? selectedMovie?.name : ""
  );

  const updateMovieInArray = (editedMovie: Movie) => {
    const updatedMovies = movies.map((movie) =>
      movie._id === editedMovie._id ? editedMovie : movie
    );
    setMovies(updatedMovies);
  };
  const clickHandler = async () => {
    if (movieMode === "add") {
      const { data } = await addMovie({ name, date: startDate.toString() });

      setMovies((prev) => [...prev, data]);
      setMovieMode(null);
    } else {
      const { data } = await editMovie({
        id: selectedMovie?._id,
        name: name,
        date: startDate.toString(),
      });
      updateMovieInArray(data);
      setSelectedMovie(null);
      setMovieMode(null);
    }
  };
  return (
    <div className="fixed inset-0  flex justify-center items-center">
      <div className="bg-white  p-2 md:p-6 border-2 border-gray-400 rounded-md shadow-xl  relative">
        <button
          className="absolute top-2 right-2 text-black   rounded-full"
          onClick={() => setMovieMode(null)}
        >
          <img src={cancelIcon} className="w-8 h-8" />
        </button>
        <h1 className="text-xl font-bold mb-4">
          {movieMode === "add" ? "Add new movie" : "Edit movie"}
        </h1>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Movie name"
            className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2 min-w-[300px]  md:min-w-[350px]"
          />
        </div>
        <div className="mb-4">
          {/*  @ts-expect-error component error */}
          <DatePicker
            selected={startDate}
            // @ts-expect-error component error
            onChange={(date) => setStartDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2 min-w-[300px]  md:min-w-[350px]"
          />
        </div>
        <button
          className="bg-blue-500   text-white py-2 px-4 rounded-md  flex ml-auto justify-end self-end"
          onClick={clickHandler}
        >
          {movieMode === "add" ? "Create movie" : "Edit movie"}
        </button>
      </div>
    </div>
  );
};

export default MovieForm;
