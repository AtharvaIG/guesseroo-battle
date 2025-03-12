
import React from 'react';
import { cn } from '@/lib/utils';

interface GameOverProps {
  winner: number;
  targetNumber: number;
  onReset: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, targetNumber, onReset }) => {
  return (
    <div className="animate-scale-in">
      <div className="glass-panel rounded-2xl p-8 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Game Over</h2>
        <div className={cn(
          "text-4xl font-bold my-4",
          winner === 1 ? "text-game-player1" : "text-game-player2"
        )}>
          Player {winner} Wins!
        </div>
        
        <div className="my-6">
          <div className="text-sm text-gray-500 mb-1">The number was</div>
          <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-game-primary to-game-secondary">
            {targetNumber}
          </div>
        </div>
        
        <button
          onClick={onReset}
          className="mt-6 px-6 py-3 bg-black text-white rounded-xl font-medium
            transition-all duration-200 hover:bg-gray-800 active:scale-95"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
