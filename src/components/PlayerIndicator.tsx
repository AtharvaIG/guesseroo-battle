
import React from 'react';
import { cn } from '@/lib/utils';

interface PlayerIndicatorProps {
  currentPlayer: number;
}

const PlayerIndicator: React.FC<PlayerIndicatorProps> = ({ currentPlayer }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative flex rounded-full overflow-hidden h-14 w-72 p-1 bg-gray-100 dark:bg-gray-700/50 shadow-inner">
        <div 
          className={cn(
            "absolute inset-y-1 w-1/2 rounded-full transition-all duration-500 ease-out shadow-md",
            currentPlayer === 1 
              ? "left-1 bg-gradient-to-r from-game-player1 to-game-player1/80" 
              : "left-[50%] -ml-1 bg-gradient-to-r from-game-player2/80 to-game-player2"
          )}
        />
        <div 
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center font-medium text-sm transition-all duration-300",
            currentPlayer === 1 ? "text-white scale-105" : "text-gray-500 dark:text-gray-400"
          )}
        >
          Player 1
        </div>
        <div 
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center font-medium text-sm transition-all duration-300",
            currentPlayer === 2 ? "text-white scale-105" : "text-gray-500 dark:text-gray-400"
          )}
        >
          Player 2
        </div>
      </div>
    </div>
  );
};

export default PlayerIndicator;
