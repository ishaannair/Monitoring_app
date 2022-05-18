import './index.css';

import Navbarfinal from './components/Navbar';
import HomePage from './components/HomePage';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
export default App;
