import React from 'react';
import { useNavigate } from 'react-router-dom';
// button onclick needs to lead to form page for new recipe

const RecipeSidebar = () => {
  const navigate = useNavigate();
  return (
    <div id='recipe-sidebar'>
      <h2>Recipe Sidebar</h2>
      <button id='add-recipe' onClick={() => navigate('/recipes/new')}>
        Add New Recipe
      </button>
    </div>
  );
};

export default RecipeSidebar;
