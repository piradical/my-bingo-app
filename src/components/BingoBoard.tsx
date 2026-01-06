import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div 
      className="grid grid-cols-5 gap-1.5 w-full max-w-md mx-auto aspect-square p-3 rounded-lg"
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.5)',
        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.3)'
      }}
    >
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
