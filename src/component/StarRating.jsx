import React from "react";

const StarRating = ({ rating, handelRating }) => {
  function stars(rating) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(
          <span
            onClick={() => handelRating(i)}
            // onClick={() => handleRating(i)}
            style={{ color: "gold", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else
        star.push(
          <span
            onClick={() => handelRating(i)}
            //onClick={() => handleRating(i)}
            style={{ color: "gray", cursor: "pointer" }}
          >
            {" "}
            ★
          </span>
        );
    }
    return star;
  }
  return <div>{stars(rating)}</div>;
};
export default StarRating;
