
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
          className: 'text-gray-400',
          animation: 'animate-pulse-soft',
          icon: '👀'
        };
      case 'too-high':
        return {
          message: 'Too High',
          detail: previousGuess ? `${previousGuess} is too high` : '',
          className: 'text-red-500',
          animation: 'animate-slide-up',
          icon: '⬆️'
        };
      case 'too-low':
        return {
          message: 'Too Low',
          detail: previousGuess ? `${previousGuess} is too low` : '',
          className: 'text-amber-500',
          animation: 'animate-slide-up',
          icon: '⬇️'
        };
      case 'correct':
        return {
          message: 'Correct!',
          detail: previousGuess ? `${previousGuess} is the right number!` : '',
          className: 'text-green-500',
          animation: 'animate-scale-in',
          icon: '🎉'
        };
      default:
        return {
          message: '',
          className: '',
          animation: '',
          icon: ''
        };
    }
  };

  const { message, detail, className, animation, icon } = getStatusInfo();

  if (!message) return null;

  return (
    <div className={cn("text-center my-8", animation)}>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className={cn("text-2xl font-bold", className)}>
        {message}
      </h3>
      {detail && (
        <p className="text-sm text-gray-500 mt-1">{detail}</p>
      )}
    </div>
  );
};

export default GameStatus;
