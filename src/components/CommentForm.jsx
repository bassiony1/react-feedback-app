import React, { useContext, useEffect, useState } from "react";
import CommentRating from "./CommentRating";
import FeedbackContext from "../context/feedbackContext";
export default function CommentForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const { CommentAdd, commentEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    if (commentEdit.edit === true) {
      setText(commentEdit.comment.text);
      setRating(commentEdit.comment.rating);
    }
  }, [commentEdit]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const NewComment = {
          text,
          rating,
        };
        if (commentEdit.edit === true) {
          updateFeedback(commentEdit.comment.id, NewComment);
        } else {
          CommentAdd(NewComment);
        }
        setText("");
      }}
      className="card mt-3 align-items-center rounded rounded-4 pb-2 text-center bg-dark"
    >
      <div className="card-header w-100 p-3 fw-bold text-white">Rate Us</div>
      <div className="card-body d-flex flex-column align-items-center text-white">
        <h5 className="card-title mb-2">Choose Your Rating</h5>
        <CommentRating rating={rating} handleRating={handleRating} />
        <div className="input-group rounded row rounded-3 flex-column flex-sm-row mt-4 justify-content-sm-between  justify-content-center align-content-center  p-2 border border-1">
          <input
            type="text"
            className="form-control bg-dark col-sm-10 text-white text-center no-border comment-input w-100 mx-sm-auto  shadow-none fs-5 overflow-hidden "
            onChange={(e) => handleChange(e)}
            value={text}
            placeholder="Write Your Comment"
          ></input>
          <button
            disabled={text.length < 2}
            type="submit"
            className="btn btn-light col-sm-2 mt-3 mt-sm-0 comment-btn w-100 rounded rounded-3 p-3"
          >
            Add
          </button>
        </div>
        {text.length < 2 && (
          <div className="card-text mt-2 alert alert-danger error-msg w-75 ">
            Must Be More Than 2 Charecters
          </div>
        )}
      </div>
    </form>
  );
}
