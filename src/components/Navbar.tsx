// src/components/Navbar.tsx
'use client';
import React from 'react';
import WalletConnect from './WalletConnect';

// onAboutClick 속성 타입을 정의합니다.
interface NavbarProps {
    onAboutClick: () => void;
}

// Navbar 함수가 NavbarProps 타입을 받도록 수정합니다.
function Navbar({ onAboutClick }: NavbarProps) {
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