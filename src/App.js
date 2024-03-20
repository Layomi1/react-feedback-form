import "./App.css";
import { useState } from "react";
function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please, provide a comment explaining why the experience poor.");
      console.log("form submitted");
      setComment("");
    }
    console.log("submitted");
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="field">
            <label htmlFor="score">Score:{score} ⭐</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="comment-area">
            <label htmlFor="comment">Comment: </label>
            <textarea
              rows="10"
              columns="30"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="Submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
