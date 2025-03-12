
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Target } from 'lucide-react';

interface NumberInputProps {
  onSubmit: (value: number) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ 
  onSubmit, 
  disabled = false,
  min = 1,
  max = 100
}) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.value.replace(/[^0-9]/g, '');
    setValue(numValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onSubmit(numValue);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto">
      <div className="relative group">
        <div className="absolute -top-2.5 left-3 px-2 text-xs font-medium bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-400">
          {min}-{max}
        </div>
        
        <div className="relative flex items-center">
          <div className="absolute left-4 text-gray-400 dark:text-gray-500 pointer-events-none transition-opacity duration-300 opacity-80 group-focus-within:opacity-100">
            <Target size={16} className="animate-pulse-soft" />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            disabled={disabled}
            placeholder="Enter a number"
            className={cn(
              "w-full h-16 px-4 pl-10 text-center text-xl font-medium bg-white dark:bg-gray-700 border-2 rounded-xl",
              "outline-none transition-all duration-300 placeholder:text-gray-300 dark:placeholder:text-gray-500",
              "focus:border-game-primary focus:ring-2 focus:ring-game-primary/20 dark:text-white",
              "dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/30",
              "cursor-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M12 2v4\"/><path d=\"M12 18v4\"/><path d=\"M4.93 4.93l2.83 2.83\"/><path d=\"M16.24 16.24l2.83 2.83\"/><path d=\"M2 12h4\"/><path d=\"M18 12h4\"/><path d=\"M4.93 19.07l2.83-2.83\"/><path d=\"M16.24 7.76l2.83-2.83\"/></svg>'),auto]",
              disabled ? "opacity-50 cursor-not-allowed" : "game-input",
            )}
          />
          
          <button
            type="submit"
            disabled={disabled || !value}
            className={cn(
              "absolute right-2 top-2 h-12 px-5 rounded-lg font-medium text-sm",
              "transition-all duration-300 transform",
              !value || disabled
                ? "bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-game-primary to-game-primary/90 text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            )}
          >
            Guess
          </button>
        </div>
      </div>
      
      <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 py-2 px-4 rounded-full border border-gray-100 dark:border-gray-700/50">
        Make your guess!
      </div>
    </form>
  );
};

export default NumberInput;
