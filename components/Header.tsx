import React, { useState } from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = ['Bombada Label', 'Tech', 'Development', 'Design'];

  // Helper to determine accent color based on page
  const getAccentColor = () => {
    if (currentPage === 'bombada') return 'bg-pink-500';
    if (currentPage === 'development') return 'bg-cyan-500';
    if (currentPage === 'about') return 'bg-amber-500';
    return 'bg-purple-500';
  };

  const getLogoGradient = () => {
    if (currentPage === 'bombada') return 'bg-gradient-to-br from-pink-500 to-rose-500';
    if (currentPage === 'development') return 'bg-gradient-to-br from-cyan-500 to-blue-500';
    if (currentPage === 'about') return 'bg-gradient-to-br from-amber-500 to-yellow-500';
    return 'bg-gradient-to-br from-purple-500 to-pink-500';
  };

  return (
    <header className="sticky top-0 z-50 pointer-events-none">
      <div className="backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 pointer-events-auto cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-lg transition-colors ${getLogoGradient()}`}>
              B
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Bombada
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className={`text-sm font-medium transition-colors relative group ${currentPage === 'home' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${currentPage === 'home' ? `w-full ${getAccentColor()}` : `w-0 ${getAccentColor()} group-hover:w-full`}`} />
            </a>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${currentPage === 'bombada' || currentPage === 'development' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onMouseEnter={() => setIsCategoriesOpen(true)}
              >
                Categories
                <ChevronDown size={14} className={`transform transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 origin-top-left ${isCategoriesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <div className="py-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (category === 'Bombada Label') {
                          onNavigate('bombada');
                        } else if (category === 'Development') {
                          onNavigate('development');
                        } else {
                          // Placeholder for others or go home
                          onNavigate('home'); 
                        }
                        setIsCategoriesOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
              className={`text-sm font-medium transition-colors relative group ${currentPage === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${currentPage === 'about' ? `w-full ${getAccentColor()}` : `w-0 ${getAccentColor()} group-hover:w-full`}`} />
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <button className="p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10">
              <Search size={20} />
            </button>
            <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
              <Menu size={24} />
            </button>
            <button className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
