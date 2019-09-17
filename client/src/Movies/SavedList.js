import React from "react";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className={`saved-movie ${props.className}`}>{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
};
export default SavedList;
