import React from 'react';

import Tag from './Tag';

const RecipeCard = ({
  title,
  description,
  instructions,
  ingredients,
  tags,
  prepTime,
  rating,
  img,
}) => {
  const ingredientList = [];
  ingredients.forEach((el) => {
    ingredientList.push(
      <li>
        {el.amount} {el.ingredient}
      </li>
    );
  });

  const tagList = [];
  for (const tag of tags) {
    tagList.push(<Tag tag />);
  }

  return (
    <div className='recipe-card'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h5>{prepTime}</h5>
      <span>{rating}</span>
      <em>Description</em>
      <p>{description}</p>
      <em>Instructions</em>
      <p>{instructions}</p>
      <em>Ingredients</em>
      <ul>{ingredientList}</ul>
      <div>{tagList}</div>
      <div>
        <button>Add to Meal Plan</button>
        <button>View Full Recipe</button>
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
