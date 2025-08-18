import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-black-canvas)]/80 backdrop-blur-xl shadow-lg border-t border-[var(--color-border)]/20 min-h-16 sm:min-h-14 lg:min-h-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 sm:py-4 space-y-3 sm:space-y-4 md:space-y-0">
          
          {/* Copyright Section */}
          <div className="text-[var(--color-placeholder)] text-xs sm:text-sm text-center md:text-left">
            <span>&copy; 2024 Properhaze Ltd.</span>
          </div>
          
          {/* Legal & Information Links */}
          <div className="flex sm:flex-row items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
            <Link 
              to="/privacy" 
              className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors duration-200 font-medium cursor-pointer"
            >
              Privacy Statement
            </Link>
            <Link 
              to="/terms" 
              className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors duration-200 font-medium cursor-pointer"
            >
              Terms of Use
            </Link>
            <Link 
              to="/about" 
              className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors duration-200 font-medium cursor-pointer"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
