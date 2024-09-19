import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/planner'>Planner</Link>
    </div>
  );
};

export default HeaderNav;
