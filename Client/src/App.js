import './index.css';

import Navbarfinal from './components/Navbar';
import HomePage from './components/HomePage';
import InsightsPage from './components/InsightsPage';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Routes, Route, BrowserRouter as Router,} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="insights" element={<InsightsPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
