// src/components/WalletConnect.tsx
'use client';
import React from 'react';

// WalletConnect 컴포넌트는 별도의 props를 받지 않습니다.
// 따라서 props 타입을 정의하는 부분을 삭제합니다.
function WalletConnect() {
  return (
    <button id="wallet-btn" className="bg-white text-[#1E40AF] font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition-colors">
      Connect
    </button>
  );
}

export default WalletConnect;