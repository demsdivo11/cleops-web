import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HostPage from './pages/HostPage';
import RulesPage from './pages/RulesPage';
import CommunityPage from './pages/CommunityPage';
import RolePage from './pages/RolePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a0231]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/role" element={<RolePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;