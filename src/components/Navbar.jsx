import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items for authenticated users
  const authenticatedNavItems = [
    { path: '/', label: 'Home', icon: 'mdi:home' },
    { path: '/profile', label: 'My profile', icon: 'mdi:account' },
    { path: '/confetti', label: 'Confetti', icon: 'mdi:party-popper' },
    { path: '/wallet', label: 'Wallet', icon: 'mdi:wallet' },
  ];

  // Auth items for non-authenticated users
  const authItems = [
    { path: '/login', label: 'Login', icon: 'mdi:login' },
    { path: '/signup', label: 'Signup', icon: 'mdi:account-plus' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeMobileMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[var(--color-black-canvas)]/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always visible */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img src="/Logo.png" alt="Properhaze Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation - Only show when authenticated */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center space-x-8">
              {authenticatedNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-all ${
                    location.pathname === item.path ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-all"
                  onClick={closeMobileMenu}
                >
                  <Icon icon="mdi:account-circle" className="w-6 h-6" />
                  <span>Profile</span>
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[var(--color-error)] text-[var(--color-base)] hover:bg-[var(--color-error)]/90 transition-all"
                >
                  <Icon icon="mdi:logout" className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              /* Auth Buttons for non-authenticated users */
              authItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    item.path === '/signup'
                      ? 'bg-[var(--color-base)] text-[var(--color-black-canvas)] hover:bg-[var(--color-hover)]'
                      : 'bg-transparent text-[var(--color-base)] border border-[var(--color-base)] hover:bg-[var(--color-base)]/10'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span>{item.label}</span>
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button - Always visible */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon
              icon={isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile Menu Container - Only for authenticated users */}
            {isAuthenticated && (
              <div className="lg:hidden py-6 bg-[var(--color-black-canvas)]/90 backdrop-blur-xl shadow-2xl">
                <div className="space-y-2">
                  {authenticatedNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30'
                          : 'text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] hover:bg-[var(--color-base)]/5'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <Icon icon={item.icon} className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                  
                  {/* Profile Link */}
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 px-6 py-4 rounded-2xl text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] hover:bg-[var(--color-base)]/5 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    <Icon icon="mdi:account-circle" className="w-5 h-5" />
                    <span className="font-medium">Profile</span>
                  </Link>
                  
                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-6 py-4 rounded-2xl bg-[var(--color-error)]/20 text-[var(--color-error)] border border-[var(--color-error)]/30 hover:bg-[var(--color-error)]/30 transition-all duration-300"
                  >
                    <Icon icon="mdi:logout" className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}

            {/* Dropdown for non-authenticated users - Absolutely positioned */}
            {!isAuthenticated && (
              <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[var(--color-black-canvas)]/90 backdrop-blur-xl shadow-2xl rounded-2xl mx-6">
                <div className="space-y-4 p-10">
                  {authItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block w-full text-center px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                        item.path === '/signup'
                          ? 'bg-[var(--color-base)] text-[var(--color-black-canvas)] hover:bg-[var(--color-hover)]'
                          : 'bg-transparent text-[var(--color-base)] border border-[var(--color-base)] hover:bg-[var(--color-base)]/10'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;