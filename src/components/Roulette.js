import React from 'react';
import WalletConnect from './WalletConnect';

function Navbar({ onAboutClick }) {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LaunchLunch</h1>
        <nav className="flex items-center space-x-4">
          <button onClick={onAboutClick} className="hover:text-gray-300">
            About
          </button>
          <WalletConnect />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
