import * as types from '../constants/actionTypes';

const initialState = {
    recipeList: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TESTING: {
      console.log('testing');
    }
    case types.ADD_RECIPE: {
        const newRecipe = {
            title: '',
            description: '',
            instructions: '',
            ingredients: [],
            tags: new Set(),
            prepTime: '',
            rating: '(num value)',
            img: 'img src/url'
        }
    }
    default: {
      return state;
    }
  }
};

export default recipesReducer;
