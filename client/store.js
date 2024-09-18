import { configureStore } from '@reduxjs/toolkit';
// import reducers here

const store = configureStore({
  reducer: {
    users: usersReducer,
    recipes: recipesReducer,
    plans: plansReducer,
  },
});

export default store;
