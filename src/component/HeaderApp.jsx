import React from "react";
import StarRating from "./StarRating";
import AddMovie from "./AddMovie";

const HeaderApp = ({ text, handleText, rating, handleRating, handleAdd }) => {
  return (
    <div className="header">
      <h1> Movie App </h1>

      <form className="d-flex searchbox">
        <input
          type="search"
          placeholder="Search"
          className="mr-3"
          aria-label="Search"
          value={text}
          onChange={handleText}
        />
      </form>
      {/* <AddMovie add={handleAdd} /> */}
      <StarRating rating={rating} handleRating={handleRating} />
    </div>
  );
};

export default HeaderApp;
