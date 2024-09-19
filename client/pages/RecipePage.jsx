import React from 'react';

import RecipeSidebar from '../components/RecipeSidebar';
import RecipeAndSearchContainer from '../containers/RecipeAndSearchContainer';
import NewRecipeForm from '../components/NewRecipeForm';
import { Routes, Route} from 'react-router-dom';

// should have a search bar at the top
// sidebar on the left
// RecipeContainer
// recipe cards in recipe container

const RecipePage = () => {
  return (
    <div id='recipe-page'>
      {/* <h2>Recipe Page</h2> */}
      <RecipeSidebar />
        <Routes>
            {/* change path to /recipes later */}
          <Route path='/' element={<RecipeAndSearchContainer />}></Route>
          <Route path='/recipes/new' element={<NewRecipeForm />}></Route>
        </Routes>
    </div>
  );
};

export default RecipePage;
