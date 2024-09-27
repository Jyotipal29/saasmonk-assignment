import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import { useEffect } from "react";
import { getAllMovies } from "../service";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import { useCritic } from "../context";
const Home = () => {
  const { movieMode, movies, setMovies } = useCritic();

  const getData = async () => {
    const { data } = await getAllMovies();

    setMovies(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="max-w-[1440px] m-auto px-[20px]  relative ">
      <h1 className="my-6  text-4xl  font-semibold">
        The best movie reviews site
      </h1>
      <Searchbar text={"search for your favourite movie"} />

      <div className=" my-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {movieMode && <MovieForm />}
    </div>
  );
};

export default Home;
