import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = ({ isAuthenticated, onLogout, disableScrollBg = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const profileDropdownRef = useRef(null);

  // Navigation Configuration
  const authenticatedMenuItems = [
    { path: '/dashboard', label: 'Home' },
    { path: '/profile', label: 'My Profile' },
    { path: '/confetti', label: 'Confetti' },
    { path: '/wallet', label: 'Wallet' },
    { path: '/settings', label: 'Settings', icon: 'mdi:cog' },
    { path: '/about', label: 'About', icon: 'mdi:information' },
    { path: '/privacy', label: 'Privacy Statement', icon: 'mdi:open-in-new' },
    { path: '/terms', label: 'Terms of Use', icon: 'mdi:open-in-new' },
    { path: null, label: 'Logout', icon: 'mdi:logout', action: 'logout' },
  ];

  // Navigation Segments
  const navigationItems = authenticatedMenuItems.slice(0, 4);           // Main nav items
  const additionalMenuItems = authenticatedMenuItems.slice(4);          // Dropdown menu items
  const allNavItems = authenticatedMenuItems.filter(item => item.action !== 'logout'); // Mobile menu items

  // Authentication Options
  const authItems = [
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Signup' }
  ];

  // Helper function to check if a nav item is active
  const isNavItemActive = (itemPath) => {
    if (itemPath === '/dashboard') {
      return location.pathname === '/' || location.pathname === '/dashboard';
    }
    return location.pathname === itemPath;
  };

  useEffect(() => {
    if (disableScrollBg) {
      setIsScrolled(false);
      return;
    }
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disableScrollBg]);

  // Handle clicking outside profile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeMobileMenu();
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out navbar ${
        disableScrollBg 
          ? 'bg-transparent' 
          : isScrolled
            ? 'navbar-scrolled'
            : ''
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img 
              src="/images/Logo.png" 
              alt="Properhaze Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Large Screens (xl+) */}
          {isAuthenticated && (
            <div className="hidden xl:flex items-center space-x-8 navbar-nav-large">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-all duration-200 font-light text-lg ${
                    isNavItemActive(item.path) 
                      ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Navigation - Medium Screens (lg to xl) */}
          {isAuthenticated && (
            <div className="hidden lg:flex xl:hidden items-center space-x-6 navbar-nav-medium">
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-all duration-200 font-light text-lg ${
                    isNavItemActive(item.path)
                      ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Right Section - Profile & Auth */}
          <div className="hidden xl:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden ring-2 ring-transparent group-hover:ring-[var(--color-accent)] transition-all duration-200">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Icon icon="mdi:chevron-down" className={`w-4 h-4 text-white transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 profile-dropdown">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Robin Inzama</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-1">
                      {additionalMenuItems.map((item) => (
                        item.action === 'logout' ? (
                          <button
                            key={item.path || item.action}
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                          >
                            <Icon icon={item.icon} className="w-4 h-4 mr-3" />
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                            onClick={closeMobileMenu}
                          >
                            <Icon icon={item.icon} className="w-4 h-4 mr-3" />
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Authentication Buttons */
              authItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
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

          {/* Mobile Menu Toggle - Medium Screens */}
          {isAuthenticated && (
            <button
              onClick={toggleMobileMenu}
              className="hidden lg:block xl:hidden p-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Icon icon="mdi:menu" className="w-6 h-6" />
            </button>
          )}

          {/* Mobile Menu Toggle - Small Screens */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] transition-colors duration-200"
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
            {/* Authenticated User Menu */}
            {isAuthenticated && (
              <div className="lg:hidden py-6 bg-[var(--color-black-canvas)]/90 backdrop-blur-xl shadow-2xl mobile-menu">
                <div className="space-y-2">
                  {allNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-lg ${
                        isNavItemActive(item.path)
                          ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30'
                          : 'text-[var(--color-cream-canvas)] hover:text-[var(--color-accent)] hover:bg-[var(--color-base)]/5'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  
                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--color-error)]/20 text-[var(--color-error)] border border-[var(--color-error)]/30 hover:bg-[var(--color-error)]/30 transition-all duration-300 font-bold text-lg"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}

            {/* Non-Authenticated User Menu */}
            {!isAuthenticated && (
              <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[var(--color-black-canvas)]/90 backdrop-blur-xl shadow-2xl rounded-2xl mx-6 mobile-menu">
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