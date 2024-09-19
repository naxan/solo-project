import React from 'react';

import RecipeSearch from '../components/RecipeSearch';
import RecipeSidebar from '../components/RecipeSidebar';
import RecipeContainer from '../containers/RecipeContainer';

// should have a search bar at the top
// sidebar on the left
// RecipeContainer
// recipe cards in recipe container

const RecipePage = () => {
  return (
    <div id="recipe-page">
      {/* <h2>Recipe Page</h2> */}
      <RecipeSidebar />
      <div id="recipe-and-search-container">
      <RecipeSearch />
      <RecipeContainer />
      </div>
    </div>
  );
};

export default RecipePage;
