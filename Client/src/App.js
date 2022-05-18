import './index.css';

import Navbarfinal from './components/Navbar';
import TestPage from './components/testingpage_1';
import HomePage from './components/HomePage';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Route, BrowserRouter as Router,Routes ,Link} from "react-router-dom";

function App() {
  return (
    
    <div>
       <Navbarfinal />
       <Router>
   
        <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="test" element={<TestPage/>} />
      </Routes >
        
    
  
      </Router>
    </div>
  )
}
export default App;
