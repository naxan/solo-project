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
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 1,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 2,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 3,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 4,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 5,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 6,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
    {
      id: 7,
      title: 'Mixed Berry Smoothie',
      description: 'A cold refreshing drink for summer',
      instructions:
        'Add your mixed berries, orange juice, banana, and yogurt into a blender. Blend on pulse a few times at first, and then blend it with the smoothie setting.',
      ingredients: [{ ingredient: 'milk', amount: '1 cup' }],
      tags: new Set(['breakfast', 'lunch', 'dinner']),
      prepTime: '35 min',
      rating: 4,
      img: 'img src/url',
    },
  ],
  nextId: 8,
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
