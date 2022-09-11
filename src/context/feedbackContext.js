import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();
let feedbacks = [
  {
    id: 1,
    text: " This is Feedback 1",
    rating: 7,
  },
  {
    id: 2,
    text: " This is Feedback 2",
    rating: 10,
  },
  {
    id: 3,
    text: "This is Feedback 3",
    rating: 9,
  },
];

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbacks);
  const [commentEdit, setCommentEdit] = useState({
    comment: {},
    edit: false,
  });
  const updateFeedback = (id, updatedComment) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedComment } : item
      )
    );
  };

  const CommentDelete = (id) => {
    setFeedback(
      feedback.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const CommentAdd = (NewComment) => {
    NewComment.id = uuid();
    setFeedback([NewComment, ...feedback]);
  };
  const editComment = (comment) => {
    setCommentEdit({
      comment,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        commentEdit,
        editComment,
        CommentDelete,
        CommentAdd,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
