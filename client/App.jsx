import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderNav from './components/HeaderNav';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the App!</h1>
      </div>
      <Routes>
        <Route path='/' element={HeaderNav}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
