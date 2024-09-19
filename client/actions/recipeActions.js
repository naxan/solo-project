import * as types from '../constants/actionTypes';

export const addRecipeActionCreator = () => ({
  type: types.ADD_RECIPE,
});

export const setTitleActionCreator = (title) => ({
  type: types.SET_TITLE,
  payload: title,
});

export const setDescriptionActionCreator = (description) => ({
  type: types.SET_DESCRIPTION,
  payload: description,
});

export const setInstructionsActionCreator = (instructions) => ({
  type: types.SET_INSTRUCTIONS,
  payload: instructions,
});

export const setPrepTimeActionCreator = (prepTime) => ({
  type: types.SET_PREPTIME,
  payload: prepTime,
});
