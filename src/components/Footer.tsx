// src/components/Footer.tsx
'use client';
import React, { Dispatch, SetStateAction } from 'react';

// Footer 컴포넌트가 받을 props 타입을 정의합니다.
interface FooterProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  currentPage: string;
}

function Footer({ setCurrentPage, currentPage }: FooterProps) {
  // 내비게이션 버튼 클릭 시 페이지를 변경하는 함수
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <nav className="flex justify-around items-center bg-white p-2 sticky bottom-0 z-20 border-t-2 border-gray-200">
      <button
        onClick={() => handleNavClick('ranking')}
        className={`nav-btn flex flex-col items-center p-2 rounded-lg text-gray-500 w-24 ${currentPage === 'ranking' ? 'text-[#1E40AF]' : ''}`}
      >
        <span className="text-2xl">🏆</span>
        <span className="text-xs font-bold">Ranking</span>
      </button>
      <button
        onClick={() => handleNavClick('main')}
        className={`nav-btn bg-[#1E40AF] text-white w-16 h-16 rounded-full flex items-center justify-center -mt-8 shadow-lg border-4 border-white z-10 ${currentPage === 'main' ? 'bg-[#1E40AF]' : ''}`}
      >
        <span className="text-3xl">🍽️</span>
      </button>
      <button
        onClick={() => handleNavClick('mypage')}
        className={`nav-btn flex flex-col items-center p-2 rounded-lg text-gray-500 w-24 ${currentPage === 'mypage' ? 'text-[#1E40AF]' : ''}`}
      >
        <span className="text-2xl">👤</span>
        <span className="text-xs font-bold">My</span>
      </button>
    </nav>
  );
}

export default Footer;