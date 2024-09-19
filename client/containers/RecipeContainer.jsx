import React from 'react';
import { useSelector } from 'react-redux';

import RecipeCard from '../components/RecipeCard';

// should access the recipe card array from state
// should iterate through array, creating a new RecipeCard component with a key, and props of the current object in the array

const RecipeContainer = () => {
  // get recipe card array state
  const recipeList = useSelector((state) => state.recipes.recipeList);
  const search = useSelector((state) => state.recipes.search);

  // if search is empty, show all recipe cards
  // if search is not empty, filter recipe list by those whose titles include the search string

  const recipeCards = [];

  if (search.length === 0) {
    for (let i = 0; i < recipeList.length; i++) {
      const recipe = recipeList[i];
      recipeCards.push(<RecipeCard key={recipe.id} {...recipe} />);
    }
  } else {
    for (let i = 0; i < recipeList.length; i++) {
      const recipe = recipeList[i];
      const title = recipe.title.toUpperCase();
      const currentSearch = search.toUpperCase();
      console.log(title, currentSearch);
      if (title.includes(currentSearch)) {
        recipeCards.push(<RecipeCard key={recipe.id} {...recipe} />);
      }
    }
  }

  return <div id='recipe-container'>{recipeCards}</div>;
};

export default RecipeContainer;
