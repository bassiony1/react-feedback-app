export default function CommentRating({ rating, handleRating }) {
  return (
    <div className="row row-cols-auto my-4 gap-4 justify-content-center align-items-center">
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="1"
          name="rating"
          id="Rating-1"
          checked={rating === 1}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-1">1</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="2"
          name="rating"
          id="Rating-2"
          checked={rating === 2}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-2">2</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="3"
          name="rating"
          id="Rating-3"
          checked={rating === 3}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-3">3</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="4"
          name="rating"
          id="Rating-4"
          checked={rating === 4}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-4">4</label>
      </div>{" "}
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="5"
          name="rating"
          id="Rating-5"
          checked={rating === 5}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-5">5</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="6"
          name="rating"
          id="Rating-6"
          checked={rating === 6}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-6">6</label>
      </div>{" "}
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="7"
          name="rating"
          id="Rating-7"
          checked={rating === 7}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-7">7</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          className="radio-check"
          value="8"
          name="rating"
          id="Rating-8"
          checked={rating === 8}
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-8">8</label>
      </div>
      <div className="radio-group">
        <input
          checked={rating === 9}
          type="radio"
          className="radio-check"
          value="9"
          name="rating"
          id="Rating-9"
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-9">9</label>
      </div>
      <div className="radio-group">
        <input
          checked={rating === 10}
          type="radio"
          className="radio-check"
          value="10"
          name="rating"
          id="Rating-10"
          onChange={(e) => {
            handleRating(+e.target.value);
          }}
        ></input>
        <label htmlFor="Rating-10">10</label>
      </div>
    </div>
  );
}
