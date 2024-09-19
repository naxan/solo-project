import React from 'react';
// want to use useNavigate for components that I want to navigate via the react router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import PlannerPage from './pages/PlannerPage';

import HeaderNav from './components/HeaderNav';
import RecipeContainer from './containers/RecipeContainer';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        {/* <Route path='/' element={<HomePage />}></Route> */}
        {/* change back to /recipes */}
        <Route path='/*' element={<RecipePage />}></Route>
        <Route path='/planner' element={<PlannerPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
