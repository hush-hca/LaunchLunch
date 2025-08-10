'use client';
import React from 'react';
import WalletConnect from './WalletConnect';

interface UserData {
  profilePic: string;
  nickname: string;
  points: number;
  registeredMenus: number;
  myLunches: { id: number; name: string; postUrl: string; imageUrl: string; }[];
}

interface MyPageProps {
  userData: UserData;
}

function MyPage({ userData }: MyPageProps) {
  return (
    <div>
      <div id="my-profile-info" className="flex items-center mb-6 bg-white p-4 rounded-lg shadow-md">
        <img src={userData.profilePic} alt="Profile" className="w-16 h-16 rounded-full border-4 border-blue-200" />
        <div className="ml-4">
          <p className="text-xl font-bold text-gray-800">{userData.nickname}</p>
          <p className="text-sm text-gray-500">My Points: {userData.points}</p>
        </div>
      </div>
      <div className="flex justify-around mb-6 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-800">{userData.points}</p>
          <p className="text-sm text-gray-500">My Points</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{userData.registeredMenus}</p>
          <p className="text-sm text-gray-500">My Menus</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">My Lunch</h3>
      <div id="my-lunch-list" className="space-y-4">
        {userData.myLunches.length === 0 ? (
          <p className="text-center text-gray-500">You haven't registered any menus yet.</p>
        ) : (
          userData.myLunches.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
              <div className="flex-1">
                <p className="text-lg font-bold text-gray-800">{item.name}</p>
                <a href={item.postUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                  View Post →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyPage;
