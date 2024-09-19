import React from 'react';
import { useDispatch } from 'react-redux';
import { setRecipeSearchActionCreator } from '../actions/recipeActions';
// save search to state
// on change of input, run function that sends dispatch of action creator that ends an action of type SET_SEARCH and payload of input value

const RecipeSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setRecipeSearchActionCreator(e.target.value));
  };

  return (
    <div id='recipe-search-container'>
      <input
        type='search'
        id='recipe-search'
        onChange={(e) => handleSearch(e)}
      ></input>
    </div>
  );
};

export default RecipeSearch;
