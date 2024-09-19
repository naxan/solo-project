import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';
import RecipeContainer from './containers/RecipeContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the App!</h1>
        <Link to='/recipes'>Recipes</Link>
      </div>
      <Routes>
        <Route path='/' element={<HeaderNav />}></Route>
        <Route path='/recipes' element={<RecipeContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
