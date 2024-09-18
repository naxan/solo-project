import { configureStore } from '@reduxjs/toolkit';
// import reducers here
import plansReducer from './reducers/plansReducer';
import recipesReducer from './reducers/recipesReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    recipes: recipesReducer,
    plans: plansReducer,
  },
});

export default store;
