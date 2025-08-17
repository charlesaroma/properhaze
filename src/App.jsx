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
import ConfettiHistory from './pages/1.dashboard/3.Confetti/Confetti';
import Settings from './pages/1.dashboard/5.Settings/0.Settings';
import PrivacyStatement from './pages/2.Legal/PrivacyStatement';
import TermsOfUse from './pages/2.Legal/TermsOfUse';
import AboutPage from './pages/3.About/0.about';

function App() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Authentication Management
  useEffect(() => {
    // Check for existing authentication on app load
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
    // Redirect to landing page after logout
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="app bg-black-canvas min-h-screen text-cream-canvas">
        <Routes>
          
          {/* Public Landing Page */}
          <Route path="/" element={
            <div>
              <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              <DashboardPage />
              <Footer />
            </div>
          } />
          
          {/* Authentication Pages */}
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
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            isAuthenticated ? (
              <div>
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <DashboardPage />
                <Footer />
              </div>
            ) : (
              <div>
                <Navbar isAuthenticated={false} onLogout={handleLogout} />
                <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
                    <p className="text-[var(--color-placeholder)] mb-6">Please log in to access the dashboard.</p>
                    <button 
                      onClick={() => window.location.href = '/login'}
                      className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            )
          } />
          
          {/* Protected User Profile Route */}
          <Route path="/profile" element={
            isAuthenticated ? (
              <div>
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <ProfilePage />
                <Footer />
              </div>
            ) : (
              <div>
                <Navbar isAuthenticated={false} onLogout={handleLogout} />
                <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
                    <p className="text-[var(--color-placeholder)] mb-6">Please log in to access your profile.</p>
                    <button 
                      onClick={() => window.location.href = '/login'}
                      className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            )
          } />
          
          {/* Protected Confetti History Route */}
          <Route path="/confetti" element={
            isAuthenticated ? (
              <div>
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <ConfettiHistory />
                <Footer />
              </div>
            ) : (
              <div>
                <Navbar isAuthenticated={false} onLogout={handleLogout} />
                <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
                    <p className="text-[var(--color-placeholder)] mb-6">Please log in to access confetti features.</p>
                    <button 
                      onClick={() => window.location.href = '/login'}
                      className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            )
          } />
          
          {/* Protected Wallet Route */}
          <Route path="/wallet" element={
            isAuthenticated ? (
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
            ) : (
              <div>
                <Navbar isAuthenticated={false} onLogout={handleLogout} />
                <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
                    <p className="text-[var(--color-placeholder)] mb-6">Please log in to access your wallet.</p>
                    <button 
                      onClick={() => window.location.href = '/login'}
                      className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            )
          } />
          
          {/* Protected Settings Route */}
          <Route path="/settings" element={
            isAuthenticated ? (
              <div>
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <Settings />
                <Footer />
              </div>
            ) : (
              <div>
                <Navbar isAuthenticated={false} onLogout={handleLogout} />
                <div className="pt-20 min-h-screen bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
                    <p className="text-[var(--color-placeholder)] mb-6">Please log in to access settings.</p>
                    <button 
                      onClick={() => window.location.href = '/login'}
                      className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors"
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            )
          } />
          
          {/* Public Legal Pages */}
          <Route path="/privacy" element={
            <div>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <PrivacyStatement />
              <Footer />
            </div>
          } />
          <Route path="/terms" element={
            <div>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <TermsOfUse />
              <Footer />
            </div>
          } />
          
          {/* Public About Page */}
          <Route path="/about" element={
            <div>
              <div className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-black-canvas)] shadow-lg">
                <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
              </div>
              <AboutPage />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;