import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Roulette from './components/Roulette';
import Ranking from './components/Ranking';
import MyPage from './components/MyPage';
import AboutModal from './components/AboutModal';

// Mock data to simulate backend database
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

function App() {
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

export default App;
