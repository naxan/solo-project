import * as types from '../constants/actionTypes';

const initialState = {
  recipeList: [
    {
      id: 0,
      title: 'Testing',
      description: 'Testing',
      instructions: 'asifbdsdfjgh',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
  ],
  nextId: 1,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TESTING: {
      console.log('testing');
    }
    case types.ADD_RECIPE: {
      // would need to increment nextId with each new recipe
      // should replace with database id once backend is implemented
      const newRecipe = {
        id: 'num?',
        title: '',
        description: '',
        instructions: '',
        ingredients: [],
        tags: new Set(),
        prepTime: '',
        rating: '(num value)',
        img: 'img src/url',
      };
    }
    default: {
      return state;
    }
  }
};

export default recipesReducer;
