import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RecipePage from '../pages/RecipePage';
import PlannerPage from '../pages/PlannerPage';

const HeaderNav = () => {
    return (
        <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/planner'>Planner</Link>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/recipes' element={<RecipePage />}></Route>
          <Route path='/planner' element={<PlannerPage />}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default HeaderNav;