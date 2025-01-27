import { useEffect, useState } from "react";
import { useCritic } from "../context";
import { addReview, editReview } from "../service/index";
import cancelIcon from "../assets/cancel.svg";

const ReviewForm = () => {
  const {
    movies,
    reviewMode,
    setReviewMode,
    selectedReview,
    movie,
    setReviews,
  } = useCritic();

  console.log(movie, "movie");
  const [selectMovie, setSelectMovie] = useState(movie?._id);

  useEffect(() => {
    setSelectMovie(movie?._id);
  }, [movie]);
  console.log(selectMovie, "selecte move");
  const [name, setName] = useState(
    reviewMode === "edit" ? selectedReview?.reviewerName : ""
  );
  const [rating, setRating] = useState(
    reviewMode === "edit" ? selectedReview?.rating : ""
  );
  const [comment, setComment] = useState(
    reviewMode === "edit" ? selectedReview?.reviewComment : ""
  );

  const [loading, setLoading] = useState(false);
  const options = movies.map((item) => {
    return {
      id: item._id,
      name: item.name,
    };
  });

  const clickHandler = async (
    selectMovie: string,
    name: string,
    rating: number,
    comment: string
  ) => {
    setLoading(true);
    if (reviewMode === "add") {
      const data = await addReview({
        movieId: selectMovie,
        reviewerName: name,
        rating: Number(rating),
        reviewComment: comment,
      });

      setReviews((prev: Review[]) => [...prev, data?.data]);
      console.log(data, "reviwed data");

      setReviewMode(null);
      setName("");
      setRating("");
      setComment("");
      setSelectMovie("");
    } else {
      const { data } = await editReview({
        rating: Number(rating),
        reviewComment: comment,
        movieId: movie?._id,
        reviewerName: name,
        id: selectedReview?._id,
      });

      if (data) {
        // Update the reviews array
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review._id === selectedReview?._id ? { ...review, ...data } : review
          )
        );

        setReviewMode(null);
        setName("");
        setRating("");
        setComment("");
        setSelectMovie("");
        setLoading(true);
      }
    }
  };
  return (
    <div className="fixed inset-0  flex justify-center items-center">
      <div className="bg-white p-4 md:p-6 border-2 border-gray-400 rounded-md shadow-xl  relative">
        <button
          className="absolute top-2 right-2 text-black  rounded-full"
          onClick={() => setReviewMode(null)}
        >
          <img src={cancelIcon} className="w-8 h-8" />
        </button>
        <h1 className="text-xl font-bold mb-4">
          {reviewMode === "add" ? "Add new review" : "Edit review"}
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            clickHandler(selectMovie, name, Number(rating), comment);
          }}
        >
          <div className="mb-4">
            <select
              value={selectMovie}
              className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2 min-w-[300px]  md:min-w-[350px]"
              onChange={(e) => setSelectMovie(e.target.value)}
            >
              <option>select a movie</option>
              {options.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2   min-w-[300px]  md:min-w-[350px]"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              max={10}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating out of 10"
              className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2  min-w-[300px]  md:min-w-[350px]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Review comments"
              className="w-full p-2 border border-gray-300 rounded-md  outline-none py-2 min-w-[300px]  md:min-w-[350px]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500  text-white py-2 px-4 rounded-md  flex ml-auto justify-end self-end `}
            // onClick={() =>
            //   clickHandler(selectMovie, name, Number(rating), comment)
            // }
          >
            {reviewMode === "add" ? "add review" : "Edit review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
