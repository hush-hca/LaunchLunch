// src/components/Ranking.tsx
'use client';
import React from 'react';

// Ranking 컴포넌트가 받을 props 타입을 정의합니다.
interface RankingProps {
  rankingData: { id: number; name: string; score: number; }[];
}

function Ranking({ rankingData }: RankingProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center font-bold text-gray-500 pb-2 mb-2 border-b-2">
        <h3>Leaderboard</h3>
        <h3>Score</h3>
      </div>
      <ul id="ranking-list" className="space-y-2">
        {rankingData.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-3 px-2 rounded-lg">
            <div className="flex items-center">
              <span className="font-black text-lg mr-4 w-8 text-center text-gray-600">#{item.id}</span>
              <span className="text-gray-800">{item.name}</span>
            </div>
            <span className="font-bold text-gray-800">{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;