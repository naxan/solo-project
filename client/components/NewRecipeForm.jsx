import React from 'react';

const NewRecipeForm = () => {
  return (
    <div id='recipe-form-container'>
      <h2>Recipe Form</h2>
      <div id='new-recipe-form'>
        <form>
          <label for='title'>Name:</label>
          <br></br>
          <input type='text' id='title' name='title' />
          <br></br>
          <label for='description'>Description:</label>
          <br></br>
          <input type='text' id='description' name='description' />
          <br></br>
          <label for='instructions'>Instructions: </label>
          <br></br>
          <input type='text' id='instructions' name='instructions' />
          <br></br>
          <label for='prep-time'>Prep Time:</label>
          <br></br>
          <input type='text' id='prep-time' name='prep-time' />
          <br></br>
          <input type='submit' value='Save' />
          {/* stretch goals: add ingredients, tags, rating, and image */}
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
