import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addRecipeActionCreator,
  setDescriptionActionCreator,
  setInstructionsActionCreator,
  setPrepTimeActionCreator,
  setTitleActionCreator,
} from '../actions/recipeActions';
// each input, on change, will dispatch an action creator that creates an action of SET_TITLE, or SET_DESCRIPTION, etc
// will pass in event.target.value to send as payload
// reducer will take payload and assign it's value to the corresponding key on newRecipe object in state

// need to save all form inputs to state (newRecipe: {})
// submit button should dispatch an action creator that creates an action with ADD_RECIPE type
// reducer will take newRecipe state and push it to recipeList array, then set newRecipe back to default values

const NewRecipeForm = () => {
  const dispatch = useDispatch();

  const handleTitle = (title) => {
    dispatch(setTitleActionCreator(title));
  };
  const handleDescription = (des) => {
    dispatch(setDescriptionActionCreator(des));
  };
  const handleInstructions = (ins) => {
    dispatch(setInstructionsActionCreator(ins));
  };
  const handlePrepTime = (prep) => {
    dispatch(setPrepTimeActionCreator(prep));
  };

  const handleRecipeSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipeActionCreator());
  };

  return (
    <div id='new-recipe-form-page'>
      <h2>Recipe Form</h2>
      <div id='new-recipe-form-container'>
        <form id='new-recipe-form' onSubmit={handleRecipeSubmit}>
          <label htmlFor='title'>Name:</label>
          <br></br>
          <input
            type='text'
            id='title'
            name='title'
            onChange={(e) => handleTitle(e.target.value)}
          />
          <br></br>
          <label htmlFor='description'>Description:</label>
          <br></br>
          <input
            type='text'
            id='description'
            name='description'
            onChange={(e) => handleDescription(e.target.value)}
          />
          <br></br>
          <label htmlFor='instructions'>Instructions: </label>
          <br></br>
          <input
            type='text'
            id='instructions'
            name='instructions'
            onChange={(e) => handleInstructions(e.target.value)}
          />
          <br></br>
          <label htmlFor='prep-time'>Prep Time:</label>
          <br></br>
          <input
            type='text'
            id='prep-time'
            name='prep-time'
            onChange={(e) => handlePrepTime(e.target.value)}
          />
          <br></br>
          <input type='submit' value='Save' id='save-recipe-button' />
          {/* stretch goals: add ingredients, tags, rating, and image */}
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
