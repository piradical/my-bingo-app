import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-2 rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight paper-texture';

  // Winning state: gold border with glow
  const winningStyle = isWinning ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-gold-glow)',
    color: 'var(--color-solidarity-black)',
    boxShadow: '0 0 12px var(--color-solidarity-gold), inset 0 0 20px rgba(212, 175, 55, 0.2)'
  } : {};

  // Marked state: red stamp effect
  const markedStyle = square.isMarked && !isWinning ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-worker-red)',
    color: 'var(--color-solidarity-black)',
    boxShadow: 'inset 0 0 30px rgba(196, 30, 58, 0.15)'
  } : {};

  // Unmarked state: clean cream card
  const unmarkedStyle = !square.isMarked ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-border-dark)',
    color: 'var(--color-solidarity-black)',
  } : {};

  const combinedStyle = {
    ...unmarkedStyle,
    ...markedStyle,
    ...winningStyle
  };

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm heading' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${freeSpaceClasses} ${!square.isMarked ? 'active:scale-95' : ''}`}
      style={combinedStyle}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto font-semibold">{square.text}</span>
      
      {/* Red Star Stamp for marked squares */}
      {square.isMarked && !square.isFreeSpace && (
        <span 
          className="absolute text-3xl pointer-events-none"
          style={{
            color: 'var(--color-worker-red)',
            opacity: isWinning ? 0.6 : 0.4,
            transform: 'rotate(-15deg)',
            top: '50%',
            left: '50%',
            marginLeft: '-0.75rem',
            marginTop: '-0.75rem'
          }}
        >
          ★
        </span>
      )}
      
      {/* Gold stars for winning squares */}
      {isWinning && (
        <span 
          className="absolute text-xs"
          style={{
            color: 'var(--color-solidarity-gold)',
            top: '2px',
            right: '4px'
          }}
        >
          ★
        </span>
      )}
    </button>
  );
}
