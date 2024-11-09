import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'host', label: 'Host', path: '/host' },
    { id: 'rules', label: 'Rules', path: '/rules' },
    { id: 'community', label: 'Community', path: '/community' },
    { id: 'role', label: 'Role', path: '/role' },
  ];

  return (
    <nav className="bg-[#2d0353] px-4 py-3 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl tracking-wider cursor-pointer pixel-font">
            CleoPS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-white hover:text-purple-400 transition-colors pixel-font ${
                  location.pathname === item.path ? 'text-purple-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#1a0231] rounded-lg p-4 animate-slideDown">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-4 py-2 text-white hover:bg-purple-900 rounded transition-colors pixel-font ${
                  location.pathname === item.path ? 'bg-purple-900' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;