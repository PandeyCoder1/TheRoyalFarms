import { Menu, X, ChefHat } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Privacy Policy', id: 'privacy' },
    { name: 'Terms & Conditions', id: 'terms' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-organic-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img src="/imagelogo.jpg" alt="TheRoyalFarms Logo" className="w-10 h-10 object-contain mix-blend-darken contrast-125 saturate-150" style={{filter: 'drop-shadow(0 0 0 transparent)'}} />
            <span className="text-2xl font-bold text-gray-800">TheRoyalFarms</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-organic-green-600 border-b-2 border-organic-green-600'
                    : 'text-gray-700 hover:text-organic-green-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'bg-organic-green-50 text-organic-green-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-organic-green-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
