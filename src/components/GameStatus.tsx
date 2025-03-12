
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'waiting' | 'too-high' | 'too-low' | 'correct' | null;

interface GameStatusProps {
  status: StatusType;
  previousGuess: number | null;
}

const GameStatus: React.FC<GameStatusProps> = ({ status, previousGuess }) => {
  
  const getStatusInfo = () => {
    switch (status) {
      case 'waiting':
        return {
          message: 'Make your guess!',
          className: 'text-game-muted',
          animation: 'animate-pulse-soft'
        };
      case 'too-high':
        return {
          message: 'Too High',
          detail: previousGuess ? `${previousGuess} is too high` : '',
          className: 'text-red-500',
          animation: 'animate-slide-up'
        };
      case 'too-low':
        return {
          message: 'Too Low',
          detail: previousGuess ? `${previousGuess} is too low` : '',
          className: 'text-amber-500',
          animation: 'animate-slide-up'
        };
      case 'correct':
        return {
          message: 'Correct!',
          detail: previousGuess ? `${previousGuess} is the right number!` : '',
          className: 'text-green-500',
          animation: 'animate-scale-in'
        };
      default:
        return {
          message: '',
          className: '',
          animation: ''
        };
    }
  };

  const { message, detail, className, animation } = getStatusInfo();

  if (!message) return null;

  return (
    <div className={cn("text-center my-6", animation)}>
      <h3 className={cn("text-2xl font-semibold", className)}>
        {message}
      </h3>
      {detail && (
        <p className="text-sm text-gray-500 mt-1">{detail}</p>
      )}
    </div>
  );
};

export default GameStatus;
