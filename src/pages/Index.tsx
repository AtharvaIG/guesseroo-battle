
import React from 'react';
import GameContainer from '@/components/GameContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-12">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-game-primary to-game-player2 text-smooth">Higher or Lower</h1>
          <p className="text-gray-500 text-center mb-4 max-w-md mx-auto">
            A two-player guessing game. Take turns guessing a number between 1 and 100.
          </p>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-game-primary to-game-player2 rounded-full"></div>
        </div>
        
        <GameContainer />
        
        <div className="mt-8 text-xs text-gray-400 text-center">
          First player to guess the correct number wins
        </div>
      </div>
    </div>
  );
};

export default Index;
