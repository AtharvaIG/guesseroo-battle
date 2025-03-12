
import React from 'react';
import GameContainer from '@/components/GameContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center text-smooth">Higher or Lower</h1>
      <p className="text-gray-500 text-center mb-12 max-w-md">
        A two-player guessing game. Take turns guessing a number between 1 and 100.
      </p>
      
      <div className="w-full max-w-md animate-fade-in">
        <GameContainer />
      </div>
      
      <div className="mt-8 text-xs text-gray-400 text-center">
        First player to guess the correct number wins
      </div>
    </div>
  );
};

export default Index;
