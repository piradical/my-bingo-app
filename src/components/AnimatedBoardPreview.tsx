import { useState, useEffect, useMemo } from 'react';
import type { BingoSquareData } from '../types';

interface AnimatedBoardPreviewProps {
  className?: string;
}

export function AnimatedBoardPreview({ className = '' }: AnimatedBoardPreviewProps) {
  const [animationState, setAnimationState] = useState<'empty' | 'marking' | 'winning'>('empty');

  // Create a simple 5x5 board structure for preview
  const createPreviewBoard = (): BingoSquareData[] => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      text: i === 12 ? 'FREE' : '',
      isMarked: false,
      isFreeSpace: i === 12,
    }));
  };

  // Compute board based on animation state instead of using effects
  const board = useMemo(() => {
    const baseBoard = createPreviewBoard();
    
    if (animationState === 'empty') {
      return baseBoard;
    } else if (animationState === 'marking' || animationState === 'winning') {
      // Mark center column (winning pattern)
      return baseBoard.map((square) => {
        if ([2, 7, 12, 17, 22].includes(square.id)) {
          return { ...square, isMarked: true };
        }
        return square;
      });
    }
    
    return baseBoard;
  }, [animationState]);

  useEffect(() => {
    const cycleStates = () => {
      setAnimationState((prev) => {
        if (prev === 'empty') return 'marking';
        if (prev === 'marking') return 'winning';
        return 'empty';
      });
    };

    const timer = setInterval(cycleStates, 2000);
    return () => clearInterval(timer);
  }, []);

  const winningSquares = animationState === 'winning' ? new Set([2, 7, 12, 17, 22]) : new Set();

  return (
    <div className={`${className}`}>
      <div
        className="grid grid-cols-5 gap-1 w-full max-w-[200px] mx-auto aspect-square p-2 rounded-lg transition-all duration-500"
        style={{
          backgroundColor: 'rgba(26, 26, 26, 0.3)',
          boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        {board.map((square) => (
          <div
            key={square.id}
            className="relative flex items-center justify-center border rounded transition-all duration-700 paper-texture"
            style={{
              backgroundColor: 'var(--color-manifesto-cream)',
              borderColor: winningSquares.has(square.id)
                ? 'var(--color-gold-glow)'
                : square.isMarked
                ? 'var(--color-worker-red)'
                : 'var(--color-border-dark)',
              borderWidth: '1px',
              boxShadow: winningSquares.has(square.id)
                ? '0 0 8px var(--color-solidarity-gold)'
                : 'none',
            }}
          >
            {square.isFreeSpace && (
              <span className="text-[8px] font-bold heading">FREE</span>
            )}
            {square.isMarked && !square.isFreeSpace && (
              <span
                className="absolute text-base pointer-events-none transition-opacity duration-500"
                style={{
                  color: 'var(--color-worker-red)',
                  opacity: winningSquares.has(square.id) ? 0.6 : 0.4,
                  transform: 'rotate(-15deg)',
                }}
              >
                ★
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
