import * as types from '../constants/actionTypes';

const initialState = {
  recipeList: [
    {
      id: 0,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 1,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 2,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 3,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 4,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 5,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 6,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
    {
      id: 7,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: ['breakfast', 'lunch', 'dinner'],
      prepTime: '35 min',
      rating: 4,
      img: '../images/mixed-berry-smoothie.jpg',
    },
  ],
  nextId: 8,
  recipeSearch: '',
  newRecipe: {},
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
    case types.SET_TITLE: {
      // update newRecipe.title
      console.log('current title state: ', state.newRecipe.title);
      const newRecipe = {
        title: action.payload,
        description: state.description,
        instructions: state.instructions,
        prepTime: state.prepTime,
      };
      console.log('title in newRecipe: ', newRecipe.title);

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_DESCRIPTION: {
      // update newRecipe.description
      console.log('current description state: ', state.newRecipe.description);
      const newRecipe = {
        title: state.title,
        description: action.payload,
        instructions: state.instructions,
        prepTime: state.prepTime,
      };
      console.log('description in newRecipe: ', newRecipe.description);

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_INSTRUCTIONS: {
      // update newRecipe.instructions
      console.log('current instructions state: ', state.newRecipe.instructions);
      const newRecipe = {
        title: state.title,
        description: state.description,
        instructions: action.payload,
        prepTime: state.prepTime,
      };
      console.log('instructions in newRecipe: ', newRecipe.instructions);

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_PREPTIME: {
      // update newRecipe.prepTime
      console.log('current prepTime state: ', state.newRecipe.prepTime);
      const newRecipe = {
        title: state.title,
        description: state.description,
        instructions: state.instructions,
        prepTime: action.payload,
      };
      console.log('prepTime in newRecipe: ', newRecipe.prepTime);

      return {
        ...state,
        newRecipe,
      };
    }
    default: {
      return state;
    }
  }
};

export default recipesReducer;
