import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div id='header-nav'>
      <Link to='/' className='nav-link'>
        Home
      </Link>
      <Link to='/recipes' className='nav-link'>
        Recipes
      </Link>
      <Link to='/planner' className='nav-link'>
        Planner
      </Link>
    </div>
  );
};

export default HeaderNav;
