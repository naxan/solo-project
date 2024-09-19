import React from 'react';

import RecipeSearch from '../components/RecipeSearch';
import RecipeContainer from '../containers/RecipeContainer';

const RecipeAndSearchContainer = () => {
  return (
      <div id="recipe-and-search-container">
      <RecipeSearch />
      <RecipeContainer />
      </div>
  );
};

export default RecipeAndSearchContainer;
