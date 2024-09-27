import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCritic } from "../context";
import ReviewForm from "../components/ReviewForm";
import MovieForm from "../components/MovieForm";
import ReviewCard from "../components/ReviewCard";
import { getAllReviews } from "../service/index";
const Review = () => {
  const { id } = useParams();
  const {
    movieMode,

    reviewMode,
    movie,
    setMovie,
    reviews,
    setReviews,
  } = useCritic();

  const getReviews = async (id: string) => {
    const { data } = await getAllReviews(id);

    setMovie(data?.movie);
    setReviews(data?.review);
  };

  useEffect(() => {
    getReviews(id as string);
  }, [id]);

  return (
    <div className="max-w-[1440px] m-auto px-[20px]  relative ">
      <div className="flex justify-between  my-10">
        <h1 className="text-4xl capitalize">{movie?.name}</h1>
        <h1 className="text-4xl uppercase  text-purple-600">
          {movie?.averageRating ? movie?.averageRating : 0}/10
        </h1>
      </div>

      <div>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <h1 className="text-4xl text-center ">No reviews yet</h1>
        )}
      </div>
      {movieMode && <MovieForm />}
      {reviewMode && <ReviewForm />}
    </div>
  );
};

export default Review;
