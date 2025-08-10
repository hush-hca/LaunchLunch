// src/components/Roulette.tsx
'use client';
import React from 'react';
// 필요한 경우, 룰렛 로직에 사용될 mock data 등을 import 합니다.

function Roulette() {
  // 룰렛 관련 상태와 로직을 여기에 구현합니다.
  // 예: const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">What's for lunch today?</h2>
      <p className="text-gray-500">Spin the wheel and discover your perfect meal!</p>

      <div className="roulette-container mb-6">
        <canvas id="roulette-wheel"></canvas>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
        <button id="spin-free-btn" className="w-full sm:w-auto flex-1 bg-red-500 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:transform-none disabled:cursor-not-allowed">
          Free Spin (<span id="free-spin-count">2</span>/2)
        </button>
        <button id="spin-paid-btn" className="w-full sm:w-auto flex-1 bg-orange-500 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:transform-none disabled:cursor-not-allowed">
          Spin (<span id="luntzy-cost">10</span> Luntzy)
        </button>
      </div>
    </div>
  );
}

export default Roulette;