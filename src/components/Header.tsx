import { Home, Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 h-20 border-b dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 hidden sm:block">Olá, Thiago Queiroz</div>
      </div>
      
      <div className="flex items-center">
        <div className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          <span>azo</span>
          <span className="text-gray-400">.</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          <Home className="h-6 w-6" />
        </button>
        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center">
          <span className="text-sm sm:text-base font-semibold">T</span>
        </div>
      </div>
    </header>
  );
};

export default Header;