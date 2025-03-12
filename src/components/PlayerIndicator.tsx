
import React from 'react';
import { cn } from '@/lib/utils';

interface PlayerIndicatorProps {
  currentPlayer: number;
}

const PlayerIndicator: React.FC<PlayerIndicatorProps> = ({ currentPlayer }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative flex rounded-full overflow-hidden h-12 w-64 p-1 bg-gray-100">
        <div 
          className={cn(
            "absolute inset-y-1 w-1/2 rounded-full transition-all duration-500 ease-out",
            currentPlayer === 1 ? "left-1 bg-game-player1" : "left-[50%] -ml-1 bg-game-player2"
          )}
        />
        <div 
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center font-medium text-sm",
            currentPlayer === 1 ? "text-white" : "text-game-muted"
          )}
        >
          Player 1
        </div>
        <div 
          className={cn(
            "relative z-10 flex-1 flex items-center justify-center font-medium text-sm",
            currentPlayer === 2 ? "text-white" : "text-game-muted"
          )}
        >
          Player 2
        </div>
      </div>
    </div>
  );
};

export default PlayerIndicator;
