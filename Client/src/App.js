import './index.css';

import Navbarfinal from './components/Navbar';
import TestPage from './components/TestPage';
import HomePage from './components/HomePage';
import InsightsPage from './components/InsightsPage';
import MyComponent from './components/InsightsTest';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Route, BrowserRouter as Router,Routes ,Link} from "react-router-dom";
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    
    <div>
       <Router>
   
        <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/test" element={<TestPage/>} />
        <Route path="insights" element={<InsightsPage/>} />
        <Route path="profile" element={<ProfilePage/>} />
      </Routes >
        
    
  
      </Router>
    </div>
  )
}
export default App;
