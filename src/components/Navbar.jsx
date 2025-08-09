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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-black-canvas)]/95 backdrop-blur-md border-b border-[var(--color-border)]'
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
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[var(--color-error)] text-white hover:bg-[var(--color-error)]/90 transition-all"
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    item.path === '/signup'
                      ? 'bg-white text-[var(--color-black-canvas)] hover:bg-gray-100'
                      : 'bg-transparent text-white border border-white hover:bg-white/10'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
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
          <div className="lg:hidden py-6 border-t border-[var(--color-border)] bg-[var(--color-black-canvas)]/95 backdrop-blur-md">
            {isAuthenticated ? (
              /* Mobile Navigation for authenticated users */
              <div className="space-y-4">
                {authenticatedNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] hover:bg-[var(--color-black-canvas)]/30'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] hover:bg-[var(--color-black-canvas)]/30 transition-all"
                  onClick={closeMobileMenu}
                >
                  <Icon icon="mdi:account-circle" className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[var(--color-error)] text-white hover:bg-[var(--color-error)]/90 transition-all"
                >
                  <Icon icon="mdi:logout" className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              /* Mobile Navigation for non-authenticated users */
              <div className="space-y-3">
                {authItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      item.path === '/signup'
                        ? 'bg-white text-[var(--color-black-canvas)] hover:bg-gray-100'
                        : 'bg-transparent text-white border border-white hover:bg-white/10'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;