import React from "react";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import { useCritic } from "../context";
const MovieCard = ({ movie }: any) => {
  const { movieMode, setMovieMode } = useCritic();

  const dateString = movie.releaseDate;
  const date = new Date(dateString);

  // Options for formatting the date
  const options: any = { year: "numeric", month: "long", day: "numeric" };

  // Format the date
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return (
    <div className="bg-purple-100  flex justify-center flex-col space-y-2  px-5 py-5 min-w-[250px]">
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
          <img src={deleteIcon} className="w-5 h-5  cursor-pointer" />
        </span>
        <span>
          {" "}
          <img
            src={editIcon}
            className="w-5 h-5  cursor-pointer"
            onClick={() => setMovieMode("edit")}
          />
        </span>
      </p>
    </div>
  );
};

export default MovieCard;
