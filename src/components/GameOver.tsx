
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
      <div className="glass-panel rounded-2xl p-10 max-w-md mx-auto text-center dark:bg-gray-800/80 dark:backdrop-blur-md dark:border-gray-700">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Game Over</h2>
        <div className={cn(
          "text-4xl font-bold my-6",
          "text-transparent bg-clip-text",
          winner === 1 
            ? "bg-gradient-to-r from-game-player1 to-blue-400" 
            : "bg-gradient-to-r from-game-player2 to-violet-400"
        )}>
          Player {winner} Wins!
        </div>
        
        <div className="my-8 py-4 px-6 rounded-xl bg-gray-50 border border-gray-100 dark:bg-gray-700/30 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">The number was</div>
          <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-game-primary to-game-secondary dark:from-blue-400 dark:to-teal-400">
            {targetNumber}
          </div>
        </div>
        
        <button
          onClick={onReset}
          className="mt-4 px-8 py-4 w-full bg-gradient-to-r from-gray-800 to-gray-700 dark:from-blue-600 dark:to-purple-600 text-white rounded-xl font-medium
            transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
