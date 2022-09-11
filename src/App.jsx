import Navbar from "./components/Navbar";
import CommentList from "./components/CommentList";
import CommentsStats from "./components/CommentsStats";
import CommentForm from "./components/CommentForm";
import { FeedbackProvider } from "./context/feedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Navbar />
      <div className="container">
        <CommentForm />
        <CommentsStats />
        <CommentList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
