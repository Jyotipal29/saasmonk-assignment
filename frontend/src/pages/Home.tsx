import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import { getAllMovies } from "../service";
import MovieCard from "../components/MovieCard";
import MovieForm from "../components/MovieForm";
import ReviewForm from "../components/ReviewForm";
import { useCritic } from "../context";
const Home = () => {
  const { movieMode, movies, setMovies, reviewMode } = useCritic();
  const [search, setSearch] = useState("");
  const getData = async () => {
    const { data } = await getAllMovies();

    setMovies(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const filteredMovie = () => {
    const newMovies = movies;

    if (search.trim() === "") {
      return newMovies;
    } else {
      return newMovies.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  };

  return (
    <div className="max-w-[1440px] m-auto px-[20px]  relative ">
      <h1 className="my-6  text-2xl  md:text-4xl  font-semibold">
        The best movie reviews site
      </h1>
      <Searchbar
        text={"search for your favourite movie"}
        setSearch={setSearch}
        search={search}
      />

      <div className=" my-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMovie()?.map((movie: Movie, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {movieMode && <MovieForm />}

      {reviewMode && <ReviewForm />}
    </div>
  );
};

export default Home;
