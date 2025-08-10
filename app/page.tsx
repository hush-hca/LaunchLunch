// page.tsx
// 필요한 React 및 컴포넌트들을 import 합니다.
'use client';

import React, { useState } from 'react';

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Roulette from '../src/components/Roulette';
import Ranking from '../src/components/Ranking';
import MyPage from '../src/components/MyPage';
import AboutModal from '../src/components/AboutModal';

// Mock data (실제로는 데이터베이스에서 가져와야 합니다)
const mockUserData = {
  profilePic: "https://placehold.co/100x100",
  nickname: "Loza Kilomanzero",
  points: 120,
  registeredMenus: 3,
  myLunches: [
    { id: 1, name: "Boiled Pork", postUrl: "https://farcaster.com/post/123", imageUrl: "https://placehold.co/100x100" },
    { id: 2, name: "Pizza", postUrl: "https://farcaster.com/post/124", imageUrl: "https://placehold.co/100x100" },
  ]
};

const mockRankingData = [
  { id: 1, name: "Gamguyul", score: 200 },
  { id: 2, name: "Gamguyul", score: 200 },
  { id: 3, name: "Gamguyul", score: 200 },
];


function Home() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <Roulette />;
      case 'ranking':
        return <Ranking rankingData={mockRankingData} />;
      case 'mypage':
        return <MyPage userData={mockUserData} />;
      default:
        return <Roulette />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar onAboutClick={() => setIsModalOpen(true)} />
      <main className="flex-grow p-4 md:p-8 flex justify-center items-center">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {isModalOpen && <AboutModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// 이 파일에서는 Home 컴포넌트만 내보냅니다.
// 기존 App.js에 있던 `export default App;`을 삭제합니다.
export default Home;