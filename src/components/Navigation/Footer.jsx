import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-black-canvas)]/80 backdrop-blur-xl shadow-lg border-t border-[var(--color-border)]/20 min-h-14 lg:min-h-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-[var(--color-placeholder)] text-sm">
            <span>&copy; 2024 Properhaze Ltd.</span>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center justify-center space-x-6 text-sm">
            <Link to="/privacy" className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors">
              Privacy Statement
            </Link>
            <Link to="/terms" className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors">
              Terms of Use
            </Link>
            <Link to="/about" className="text-[var(--color-placeholder)] hover:text-[var(--color-accent)] transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
