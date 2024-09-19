import React from 'react';
// save search to state
// on change of input, run function that sends dispatch of action creator that ends an action of type SET_SEARCH and payload of input value

const RecipeSearch = () => {
  return (
    <div id='recipe-search-container'>
      <input type='search' id='recipe-search'></input>
    </div>
  );
};

export default RecipeSearch;
