
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
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="relative">
        <div className="relative flex flex-col items-center">
          <div className="border-2 border-blue-500 dark:border-blue-400 rounded-full w-full overflow-hidden">
            <div className="flex items-center">
              <div className="text-xs text-gray-500 dark:text-gray-400 px-4">
                {min}-{max}
              </div>
              
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                disabled={disabled}
                placeholder="Enter a number"
                className={cn(
                  "w-full py-3 px-4 text-center bg-white dark:bg-gray-700",
                  "outline-none border-none text-lg font-medium placeholder:text-gray-300 dark:placeholder:text-gray-500",
                  "focus:outline-none dark:text-white",
                  disabled ? "opacity-50 cursor-not-allowed" : ""
                )}
              />
              
              <button
                type="submit"
                disabled={disabled || !value}
                className={cn(
                  "px-5 py-3 rounded-r-full font-medium text-sm",
                  !value || disabled
                    ? "bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                )}
              >
                Guess
              </button>
            </div>
          </div>
          
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            Guess a number between 1 and 100
          </div>
        </div>
      </div>
    </form>
  );
};

export default NumberInput;
