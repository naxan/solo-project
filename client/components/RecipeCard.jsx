import React from 'react';

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
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{instructions}</li>
        <li>{ingredients[0].ingredient}</li>
        <li>{tags}</li>
        <li>{prepTime}</li>
        <li>{rating}</li>
        <li>{img}</li>
      </ul>
    </div>
  );
};

export default RecipeCard;
