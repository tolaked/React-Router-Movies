import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} className="App" />
      {/* <Route exact path="/" component={MovieList} /> */}
      <Route path="/movies/:id" component={MovieList} />
    </div>
  );
};

export default App;
