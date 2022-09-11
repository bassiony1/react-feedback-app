import React, { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

export default function CommentsStats() {
  const { feedback } = useContext(FeedbackContext);
  let avg =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;

  avg = isNaN(avg) ? "0" : avg.toFixed(1);
  return (
    <div className="mt-3">
      <div className="row px-2 row-cols-auto justify-content-between align-items-center">
        <div className="review-num  fw-bold text-white">
          {feedback.length} Reviews
        </div>
        <div className="review-rate  fw-bold text-white">
          Average Rating: {avg}
        </div>
      </div>
    </div>
  );
}
