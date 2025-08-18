import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Navigation Components
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';

// Page Components
import DashboardPage from './pages/1.dashboard/1.Home/DashboardHome';
import LoginPage from './pages/0.auth/LoginPage';
import SignupPage from './pages/0.auth/SignupPage';
import ForgotPasswordPage from './pages/0.auth/ForgotPasswordPage';
import ProfilePage from './pages/1.dashboard/2.Profile/MyProfile';    
import ConfettiHistory from './pages/1.dashboard/3.Confetti/0.Confetti';
import Settings from './pages/1.dashboard/5.Settings/0.Settings';
import PrivacyStatement from './pages/2.Legal/PrivacyStatement';
import TermsOfUse from './pages/2.Legal/TermsOfUse';
import AboutPage from './pages/3.About/0.about';

function App() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication Management
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="app bg-black-canvas min-h-screen text-cream-canvas">
        <Routes>
          
          {/* Public Landing Page */}
          <Route path="/" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <DashboardPage />
              <Footer />
            </>
          } />
          
          {/* Authentication Pages */}
          <Route path="/login" element={
            <LoginPage navigateTo={(path) => {
              if (path === 'dashboard') {
                handleLogin();
                window.location.href = '/dashboard';
              } else {
                window.location.href = `/${path}`;
              }
            }} />
          } />
          
          <Route path="/signup" element={
            <SignupPage navigateTo={(path) => {
              if (path === 'dashboard') {
                handleLogin();
                window.location.href = '/dashboard';
              } else {
                window.location.href = `/${path}`;
              }
            }} />
          } />
          
          <Route path="/forgot-password" element={
            <ForgotPasswordPage navigateTo={(path) => {
              window.location.href = `/${path}`;
            }} />
          } />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <DashboardPage />
              <Footer />
            </>
          } />
          
          {/* Protected User Profile Route */}
          <Route path="/profile" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <ProfilePage />
              <Footer />
            </>
          } />
          
          {/* Protected Confetti History Route */}
          <Route path="/confetti" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <ConfettiHistory />
              <Footer />
            </>
          } />
          
          {/* Protected Wallet Route */}
          <Route path="/wallet" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">Wallet</h1>
                  <p className="text-[var(--color-placeholder)]">Wallet functionality coming soon...</p>
                </div>
              </div>
              <Footer />
            </>
          } />
          
          {/* Protected Settings Route */}
          <Route path="/settings" element={
            <>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <Settings />
              <Footer />
            </>
          } />
          
          {/* Public Legal Pages */}
          <Route path="/privacy" element={
            <>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <PrivacyStatement />
              <Footer />
            </>
          } />
          
          <Route path="/terms" element={
            <>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <TermsOfUse />
              <Footer />
            </>
          } />
          
          {/* Public About Page */}
          <Route path="/about" element={
            <>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <AboutPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;