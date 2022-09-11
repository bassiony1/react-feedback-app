import React, { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

export default function Comment({ feedback }) {
  const { CommentDelete, editComment } = useContext(FeedbackContext);
  return (
    <div className="comment-card bg-dark bg-opacity-75">
      <div className="comment-rate">{feedback.rating}</div>
      <div className="comment-control flex-row ">
        <i
          onClick={() => editComment(feedback)}
          className="comment-edit fa fa-edit"
        ></i>
        <i
          onClick={() => CommentDelete(feedback.id)}
          className=" comment-delete fa fa-delete-left"
        ></i>
      </div>
      <div className="comment-content">{feedback.text}</div>
    </div>
  );
}
