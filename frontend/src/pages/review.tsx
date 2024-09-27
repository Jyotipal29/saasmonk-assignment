import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCritic } from "../context";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import { getAllReviews } from "../service/index";
const Review = () => {
  const { id } = useParams();
  const {
    movieMode,
    setMovieMode,
    setSelectedMovie,
    movies,
    setMovies,
    reviewMode,
    movie,
    setMovie,
    reviews,
    setReviews,
  } = useCritic();

  const getReviews = async (id) => {
    const { data } = await getAllReviews(id);

    setMovie(data?.movie);
    setReviews(data?.review);
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  return (
    <div className="max-w-[1440px] m-auto px-[20px]  relative ">
      <div className="flex justify-between  my-10">
        <h1 className="text-4xl capitalize">{movie?.name}</h1>
        <h1 className="text-4xl uppercase">8.9/10</h1>
      </div>

      <div>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {reviewMode && <ReviewForm />}
    </div>
  );
};

export default Review;
