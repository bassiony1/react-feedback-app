import React, { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";
import Comment from "./Comment";

export default function CommentList() {
  const { feedback } = useContext(FeedbackContext);
  return (
    <>
      {feedback.map((item) => {
        return <Comment key={item.id} feedback={item}></Comment>;
      })}
    </>
  );
}
