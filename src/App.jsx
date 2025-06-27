// File: src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatWidget from './components/ChatWidget';

function App() {
  // Chat window state is managed globally for demo simplicity
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  return (
    <Router>
      <div className="relative min-h-screen bg-white text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>

        <ChatWidget isOpen={isChatOpen} onToggle={toggleChat} />
      </div>
    </Router>
  );
}

export default App;