
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
    <div className="game-container w-full max-w-md mx-auto p-8 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-gray-800/95 dark:border dark:border-gray-700">
      {!gameOver ? (
        <>
          <div className="mb-6 text-center">
            <div className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">ROUND</div>
            <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">{round}</div>
          </div>
          
          <PlayerIndicator currentPlayer={currentPlayer} />
          
          <GameStatus status={status} previousGuess={previousGuess} />
          
          <NumberInput onSubmit={handleGuess} disabled={status === 'correct'} />
          
          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 py-2 px-4 rounded-full border border-gray-100 dark:border-gray-700/50">
            Guess a number between 1 and 100
          </div>
        </>
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
