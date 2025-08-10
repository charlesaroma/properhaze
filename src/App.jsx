import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import LandingPage from './pages/1.LandingPage/LandingPage';
import LoginPage from './pages/0.auth/LoginPage';
import SignupPage from './pages/0.auth/SignupPage';
import ForgotPasswordPage from './pages/0.auth/ForgotPasswordPage';
import DashboardHome from './pages/2.dashboard/1.Home/DashboardHome';
import MyProfile from './pages/2.dashboard/2.Profile/MyProfile';    
import Confetti from './pages/2.dashboard/3.Confetti/Confetti';
import PrivacyStatement from './pages/3.Legal/PrivacyStatement';
import TermsOfUse from './pages/3.Legal/TermsOfUse';
import Footer from './components/Navigation/Footer';
import Settings from './pages/2.dashboard/5.Settings/0.Settings';

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
              <Settings />
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
              <DashboardHome />
              <Footer />
            </div>
          } />
          
          <Route path="/profile" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <MyProfile />
              <Footer />
            </div>
          } />
          
          <Route path="/confetti" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <Confetti />
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