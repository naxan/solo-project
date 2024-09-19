import React from 'react';
import { useSelector } from 'react-redux';

import RecipeCard from '../components/RecipeCard';

// should access the recipe card array from state
// should iterate through array, creating a new RecipeCard component with a key, and props of the current object in the array

const RecipeContainer = () => {
  // get recipe card array state
  const recipeList = useSelector((state) => state.recipes.recipeList);
  const recipeCards = [];
  for (let i = 0; i < recipeList.length; i++) {
    const recipe = recipeList[i];
    recipeCards.push(<RecipeCard key={recipe.id} {...recipe} />);
  }

  return (
    <div>
      <h2>Recipe Container</h2>
      {recipeCards}
    </div>
  );
};

export default RecipeContainer;
