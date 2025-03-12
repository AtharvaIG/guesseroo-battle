
import React, { useState, useEffect } from 'react';
import PlayerIndicator from './PlayerIndicator';
import NumberInput from './NumberInput';
import GameStatus from './GameStatus';
import GameOver from './GameOver';

const GameContainer: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<number | null>(null);
  const [status, setStatus] = useState<'waiting' | 'too-high' | 'too-low' | 'correct' | null>('waiting');
  const [previousGuess, setPreviousGuess] = useState<number | null>(null);
  const [round, setRound] = useState<number>(1);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setCurrentPlayer(1);
    setGameOver(false);
    setWinner(null);
    setStatus('waiting');
    setPreviousGuess(null);
    setRound(1);
    console.log('New game started! Target:', randomNumber);
  };

  const handleGuess = (guess: number) => {
    setPreviousGuess(guess);

    if (guess === targetNumber) {
      setStatus('correct');
      setWinner(currentPlayer);
      setGameOver(true);
    } else if (guess > targetNumber) {
      setStatus('too-high');
      switchPlayer();
    } else {
      setStatus('too-low');
      switchPlayer();
    }
  };

  const switchPlayer = () => {
    // Short delay to allow player to see the result
    setTimeout(() => {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      setRound(prevRound => prevRound + 1);
    }, 1000);
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <div className="game-container w-full max-w-md mx-auto p-6 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-gray-800/95 dark:border dark:border-gray-700">
      {!gameOver ? (
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">ROUND</div>
            <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">{round}</div>
          </div>
          
          <div className="w-full mb-8">
            <PlayerIndicator currentPlayer={currentPlayer} />
          </div>
          
          <div className="w-full mb-6 text-center">
            <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
              Make your guess!
            </div>
            <GameStatus status={status} previousGuess={previousGuess} />
          </div>
          
          <div className="w-full">
            <NumberInput onSubmit={handleGuess} disabled={status === 'correct'} />
          </div>
        </div>
      ) : (
        <GameOver
          winner={winner!}
          targetNumber={targetNumber}
          onReset={resetGame}
        />
      )}
    </div>
  );
};

export default GameContainer;
