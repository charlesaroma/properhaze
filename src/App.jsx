import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ConfettiHistory from './pages/ConfettiHistory';
import PrivacyStatement from './pages/PrivacyStatement';
import TermsOfUse from './pages/TermsOfUse';
import Footer from './components/Footer';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app bg-black-canvas min-h-screen text-cream-canvas">
        <Routes>
          {/* Landing page with navbar and footer */}
          <Route path="/" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <LandingPage />
              <Footer />
            </div>
          } />
          
          <Route path="/settings" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <SettingsPage />
              <Footer />
            </div>
          } />
          
          {/* Auth pages without navbar */}
          <Route path="/login" element={<LoginPage navigateTo={(path) => {
            if (path === 'dashboard') {
              handleLogin();
              window.location.href = '/dashboard';
            } else {
              window.location.href = `/${path}`;
            }
          }} />} />
          <Route path="/signup" element={<SignupPage navigateTo={(path) => {
            if (path === 'dashboard') {
              handleLogin();
              window.location.href = '/dashboard';
            } else {
              window.location.href = `/${path}`;
            }
          }} />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage navigateTo={(path) => {
            window.location.href = `/${path}`;
          }} />} />
          
          {/* Dashboard pages with navbar */}
          <Route path="/dashboard" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <DashboardPage />
              <Footer />
            </div>
          } />
          
          <Route path="/profile" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <ProfilePage />
              <Footer />
            </div>
          } />
          
          <Route path="/confetti" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <ConfettiHistory />
              <Footer />
            </div>
          } />
          
          <Route path="/wallet" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">Wallet</h1>
                  <p className="text-[var(--color-placeholder)]">Wallet functionality coming soon...</p>
                </div>
              </div>
              <Footer />
            </div>
          } />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<PrivacyStatement />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;