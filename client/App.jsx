import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// want to use useNavigate for components that I want to navigate via the react router

import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import PlannerPage from './pages/PlannerPage';

import HeaderNav from './components/HeaderNav';
import RecipeContainer from './containers/RecipeContainer';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/planner'>Planner</Link>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/recipes' element={<RecipePage />}></Route>
        <Route path='/planner' element={<PlannerPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
