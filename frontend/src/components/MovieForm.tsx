import { useCritic } from "../context";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { addMovie } from "../service";
const MovieForm = () => {
  const { movieMode, setMovieMode, setMovies } = useCritic();
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const clickHandler = async () => {
    if (movieMode === "add") {
      const { data } = await addMovie({ name, date: startDate });

      setMovies((prev) => [...prev, data]);
      console.log(data, "data");
      setMovieMode();
    } else {
      console.log("edit here");
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
