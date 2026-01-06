import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      {/* Header */}
      <header 
        className="flex items-center justify-between p-3 border-b-2"
        style={{ 
          backgroundColor: 'var(--color-worker-red)',
          borderColor: 'var(--color-worker-red-dark)'
        }}
      >
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded font-semibold transition-all active:scale-95"
          style={{
            backgroundColor: 'var(--color-manifesto-cream)',
            color: 'var(--color-solidarity-black)'
          }}
        >
          ← Back
        </button>
        <h1 className="heading text-xl" style={{ color: 'var(--color-manifesto-cream)' }}>
          ★ SOLIDARITY BINGO ★
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <div 
        className="text-center text-sm py-3 px-4 border-b"
        style={{ 
          backgroundColor: 'rgba(245, 230, 211, 0.1)',
          borderColor: 'var(--color-border-dark)',
          color: 'var(--color-manifesto-cream)'
        }}
      >
        <p className="font-semibold">Unite with comrades who match the prompts</p>
      </div>

      {/* Bingo indicator */}
      {hasBingo && (
        <div 
          className="text-center py-3 font-bold text-sm heading border-b-2"
          style={{
            backgroundColor: 'var(--color-solidarity-gold)',
            color: 'var(--color-solidarity-black)',
            borderColor: 'var(--color-gold-glow)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
          }}
        >
          ★★★ SOLIDARITY ACHIEVED! ★★★
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
