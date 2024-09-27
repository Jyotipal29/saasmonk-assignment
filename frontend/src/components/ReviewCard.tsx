import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import { deleteReview } from "../service/index";
import { useCritic } from "../context";

type ReviewCardProps = {
  review: Review; // Using the Movie type you defined globally
};
const ReviewCard = ({ review }: ReviewCardProps) => {
  const { setReviews, setSelectedReview, setReviewMode } = useCritic();
  const deleteHandler = async (id: string) => {
    const data = await deleteReview(id);
    if (data.status === 200) {
      setReviews((prev) => prev.filter((item) => item._id !== id));
    }
  };
  return (
    <div className="border border-gray-600 my-10  p-3  flex flex-col justify-center space-y-4">
      <div className="flex justify-between  items-center">
        <p className="text-xl capitalize font-semibold  text-gray-900">
          {review.reviewComment}
        </p>
        <p className="text-xl capitalize font-semibold  text-purple-600">
          {review.rating}/10
        </p>
      </div>
      <div className="flex justify-between  items-center">
        <p className="text-xl capitalize font-semibold  text-gray-900 italic">
          <span>By</span> {review.reviewerName}
        </p>
        <p className="flex gap-4 justify-end">
          <span>
            {" "}
            <img
              src={deleteIcon}
              className="w-5 h-5  cursor-pointer"
              onClick={() => deleteHandler(review._id)}
            />
          </span>
          <span>
            {" "}
            <img
              src={editIcon}
              className="w-5 h-5  cursor-pointer"
              onClick={() => {
                setReviewMode("edit");
                setSelectedReview(review);
              }}
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
