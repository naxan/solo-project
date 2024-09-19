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
  search: '',
  newRecipe: {},
};

// example of what a recipe object should look like
const exampleRecipe = {
  id: 'num?',
  title: '',
  description: '',
  instructions: '',
  ingredients: [],
  tags: [],
  prepTime: '',
  rating: '(num value)',
  img: 'img src/url',
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TESTING: {
      console.log('testing');
    }
    case types.ADD_RECIPE: {
      // would need to increment nextId with each new recipe (after assigning nextId to newRecipe id)
      // should replace with database id once backend is implemented

      // take newRecipe state object
      // create new array that is a deep copy of the recipeList array
      // push newRecipe onto the new recipe list
      // declare variable newRecipe and set it equal to an empty object
      // return state, new recipe list, and new newRecipe (empty object)
      const recipeList = structuredClone(state.recipeList);
      let newRecipe = structuredClone(state.newRecipe);
      let nextId = state.nextId;
      newRecipe.id = nextId;
      nextId++;
      recipeList.push(newRecipe);
      newRecipe = {};

      return {
        ...state,
        recipeList,
        newRecipe,
        nextId,
      };
    }
    case types.DELETE_RECIPE: {
      // get id from payload
      // create deep copy of recipe list
      // iterate through recipe list for recipe matching payload id
      // splice out that recipe from the array
      // return state with new recipe list array

      const recipeList = structuredClone(state.recipeList);
      for (let i = 0; i < recipeList.length; i++) {
        if (recipeList[i].id === action.payload) {
          recipeList.splice(i, 1);
          break;
        }
      }

      return {
        ...state,
        recipeList,
      };
    }
    case types.SET_SEARCH: {
      // get search from payload
      // set new search var equal to payload
      // return state with new search
      const search = action.payload;
      console.log(search);

      return {
        ...state,
        search,
      };
    }
    case types.SET_TITLE: {
      // update newRecipe.title
      const newRecipe = {
        title: action.payload,
        description: state.newRecipe.description,
        instructions: state.newRecipe.instructions,
        prepTime: state.newRecipe.prepTime,
        ingredients: [],
        tags: [],
        rating: 0,
        img: '',
      };

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_DESCRIPTION: {
      // update newRecipe.description
      const newRecipe = {
        title: state.newRecipe.title,
        description: action.payload,
        instructions: state.newRecipe.instructions,
        prepTime: state.newRecipe.prepTime,
        ingredients: [],
        tags: [],
        rating: 0,
        img: '',
      };

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_INSTRUCTIONS: {
      // update newRecipe.instructions
      const newRecipe = {
        title: state.newRecipe.title,
        description: state.newRecipe.description,
        instructions: action.payload,
        prepTime: state.newRecipe.prepTime,
        ingredients: [],
        tags: [],
        rating: 0,
        img: '',
      };

      return {
        ...state,
        newRecipe,
      };
    }
    case types.SET_PREPTIME: {
      // update newRecipe.prepTime
      const newRecipe = {
        title: state.newRecipe.title,
        description: state.newRecipe.description,
        instructions: state.newRecipe.instructions,
        prepTime: action.payload,
        ingredients: [],
        tags: [],
        rating: 0,
        img: '',
      };

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
