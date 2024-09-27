import React from "react";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import { useCritic } from "../context";
import { deleteMovie } from "../service";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: any) => {
  const { movieMode, setMovieMode, setSelectedMovie, movies, setMovies } =
    useCritic();

  const dateString = movie.releaseDate;
  const date = new Date(dateString);

  // Options for formatting the date
  const options: any = { year: "numeric", month: "long", day: "numeric" };

  // Format the date
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const deleteHandler = async (id: string) => {
    const data = await deleteMovie({ id });

    if (data.status === 200) {
      setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
    }
  };

  return (
    <div className="bg-purple-100  flex justify-center flex-col space-y-2  px-5 py-5 min-w-[250px]">
      <Link to={`/review/${movie._id}`}>
        <p className="text-2xl font-semibold">{movie.name}</p>
        <p className="text-lg font-semibold">
          <span>Released:</span>
          {formattedDate}
        </p>
        <p className="text-lg font-bold">
          <span>Rating:</span>
          8.9
        </p>

        <p className="flex gap-4 justify-end">
          <span>
            {" "}
            <img
              src={deleteIcon}
              className="w-5 h-5  cursor-pointer"
              onClick={() => deleteHandler(movie._id)}
            />
          </span>
          <span>
            {" "}
            <img
              src={editIcon}
              className="w-5 h-5  cursor-pointer"
              onClick={() => {
                setMovieMode("edit");
                setSelectedMovie(movie);
              }}
            />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
