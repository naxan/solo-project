import React from 'react';
import { useDispatch } from 'react-redux';

import Tag from './Tag';
import { deleteRecipeActionCreator } from '../actions/recipeActions';

const RecipeCard = ({
  id,
  title,
  description,
  instructions,
  ingredients,
  tags,
  prepTime,
  rating,
  img,
}) => {
  // dispatch
  const dispatch = useDispatch();

  // render ingredient list
  const ingredientList = [];
  if (ingredients) {
    ingredients.forEach((el, index) => {
      ingredientList.push(
        <li key={index}>
          {el.amount} {el.ingredient}
        </li>
      );
    });
  }

  // render tags
  const tagList = [];
  for (let item of tags) {
    tagList.push(<Tag key={item} tag={item} />);
  }

  // delete button
  const handleDeleteRecipe = () => {
    dispatch(deleteRecipeActionCreator(id));
  };

  return (
    <div className='recipe-card'>
      {/* <div className='recipe-img'> */}
      <img src={img} alt={title} />
      {/* </div> */}
      <div className='recipe-card-content'>
        <h3>{title}</h3>
        <h5>{prepTime}</h5>
        <p>{rating}</p>
        <em>Description</em>
        <p>{description}</p>
        <em>Instructions</em>
        <p>{instructions}</p>
        <em>Ingredients</em>
        <ul>{ingredientList}</ul>
        <div id='tag-list'><span>Tags: </span>{tagList}</div>
        <div>
          <button className='recipe-card-button'>Add to Meal Plan</button>
          <button className='recipe-card-button'>View Full Recipe</button>
          <button className='recipe-card-button' onClick={handleDeleteRecipe}>
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

{
  /* <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{instructions}</li>
        <li>{ingredients[0].ingredient}</li>
        <li>{tags}</li>
        <li>{prepTime}</li>
        <li>{rating}</li>
        <li>{img}</li>
      </ul> */
}
