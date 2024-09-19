import React from 'react';
// want to use useNavigate for components that I want to navigate via the react router

import HeaderNav from './components/HeaderNav';
import RecipeContainer from './containers/RecipeContainer';

const App = () => {
  return (
    <div>
    <HeaderNav />
    </div>
  );
};

export default App;
