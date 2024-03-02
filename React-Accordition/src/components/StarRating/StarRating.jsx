import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseIn(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseOut() {
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseIn(index)}
              onMouseLeave={() => handleMouseOut()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
