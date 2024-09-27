import { useCritic } from "../context";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
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
    movieMode === "edit" ? selectedMovie.releaseDate : new Date()
  );
  const [name, setName] = useState(
    movieMode === "edit" ? selectedMovie.name : ""
  );

  console.log(selectedMovie, "selected movie");

  const updateMovieInArray = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie._id === editedMovie._id ? editedMovie : movie
    );
    setMovies(updatedMovies);
  };
  const clickHandler = async () => {
    if (movieMode === "add") {
      const { data } = await addMovie({ name, date: startDate });

      setMovies((prev) => [...prev, data]);
      console.log(data, "data");
      setMovieMode();
    } else {
      const { data } = await editMovie({
        id: selectedMovie._id,
        name: name,
        date: startDate,
      });
      updateMovieInArray(data);
      setSelectedMovie();
      setMovieMode();
    }
  };
  return (
    <div className="fixed inset-0  flex justify-center items-center">
      <div className="bg-white p-6 border-2 border-gray-400 rounded-md shadow-xl   min-w-[400px] relative">
        <button
          className="absolute top-2 right-2 text-black bg-gray-300 px-1 py-2 rounded-full"
          onClick={() => setMovieMode()}
        >
          close
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
            className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2   min-w-[350px]"
          />
        </div>
        <div className="mb-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2  min-w-[350px]"
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
