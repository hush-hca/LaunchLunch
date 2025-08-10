'use client';
import React from 'react';
import WalletConnect from './WalletConnect';

interface AboutModalProps {
  onClose: () => void;
}

function AboutModal({ onClose }: AboutModalProps) {
  return (
    <div id="about-modal" className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative shadow-xl animate-popup">
        <button id="close-about-modal-btn" onClick={onClose} className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md">
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h3 className="text-2xl font-bold mb-4 text-[#1E40AF]">About LaunchLunch (Beta)</h3>
        <div className="text-gray-600 space-y-3 text-sm">
          <p><strong>1. Add a menu:</strong> To add a food to the roulette, mention <span className="font-bold text-[#1E40AF]">@LaunchLunch</span> in a Farcaster post with the food name.</p>
          <p><strong>2. Spin the wheel:</strong> You get 2 free spins every day! More spins cost 10 Luntzy points.</p>
          <p><strong>3. Earn points:</strong> When your submitted food gets picked by the roulette, you earn 10 points!</p>
          <p><strong>4. Climb the ranks:</strong> Check the weekly leaderboard to see who is the most popular food contributor!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
