
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder="Enter a number"
          className={cn(
            "w-full h-14 px-4 text-center text-lg font-medium bg-white border-2 rounded-xl",
            "outline-none transition-all duration-200 placeholder:text-gray-300",
            "focus:border-game-primary focus:shadow-sm",
            disabled ? "opacity-50 cursor-not-allowed" : "game-input",
          )}
        />
        <div className="absolute -top-2.5 left-3 px-1 text-xs font-medium bg-white text-gray-400">
          1-100
        </div>
        <button
          type="submit"
          disabled={disabled || !value}
          className={cn(
            "absolute right-2 top-2 h-10 px-4 rounded-lg font-medium text-sm",
            "transition-all duration-200 transform",
            !value || disabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-game-primary text-white hover:bg-game-primary/90 active:scale-95"
          )}
        >
          Guess
        </button>
      </div>
    </form>
  );
};

export default NumberInput;
