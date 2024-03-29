import { useState } from "react";
import "./App.css";

//Number of Stars! You can change this variable how much stars you need
let maxRating = 10;

export default function App() {
  return <StarComponent />;
}

function StarComponent() {
  // States for click Rating and Hover rating
  const [rating, setRating] = useState(0);
  const [newrating, setNewRating] = useState(0);

  function handleStarClick(rating) {
    setRating(rating);
  }

  return (
    <div className="container">
      <h1>Star Rating</h1>
      <h4>Your rating is {rating || newrating} Stars</h4>

      <div className="star-container">
        {/* Render Stars with Array.from and map() */}
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            onStarClick={() => handleStarClick(i + 1)}
            star={newrating ? newrating >= i + 1 : rating >= i + 1}
            onMouseIn={() => setNewRating(i + 1)}
            onMouseOut={() => setNewRating(0)}
          />
        ))}
        <p>{newrating || rating || ""}</p>
      </div>
      {/* Change our number when we Hover, Click, or Empty String One is True */}
    </div>
  );
}

function Star({ onStarClick, star, onMouseIn, onMouseOut }) {
  return (
    <div>
      {/* Here we put our Star  When {star} is "false" we show Empty Stars, when we click on the stars then our {star} change value to "true" and Show full Star */}
      <span
        className="star"
        role="button"
        onClick={onStarClick}
        // On Mouse Functions  Hover over Stars
        onMouseEnter={onMouseIn}
        onMouseLeave={onMouseOut}
      >
        {star ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ff471a"
            stroke="#000"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </span>
    </div>
  );
}
