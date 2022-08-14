import "./index.css";

import HomePage from "./components/HomePage";
import InsightsPage from "./components/InsightsPage";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
