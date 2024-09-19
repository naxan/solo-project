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
  ingredients.forEach((el, index) => {
    ingredientList.push(
      <li key={index}>
        {el.amount} {el.ingredient}
      </li>
    );
  });

  const tagList = [];
  for (let item of tags) {
    tagList.push(<Tag key={item} tag={item} />);
  }

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
        <div id='tag-list'>{tagList}</div>
        <div>
          <button>Add to Meal Plan</button>
          <button>View Full Recipe</button>
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
