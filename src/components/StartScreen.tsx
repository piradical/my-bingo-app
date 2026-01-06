import type { BingoSquareData } from '../types';

interface StartScreenProps {
  onStart: () => void;
}

// Static preview board data with curated examples
const PREVIEW_BOARD: BingoSquareData[] = [
  { id: 0, text: 'has a pet', isMarked: false, isFreeSpace: false },
  { id: 1, text: 'speaks more than 2 languages', isMarked: true, isFreeSpace: false },
  { id: 2, text: 'loves cooking', isMarked: false, isFreeSpace: false },
  { id: 3, text: 'plays an instrument', isMarked: true, isFreeSpace: false },
  { id: 4, text: 'has traveled to Asia', isMarked: false, isFreeSpace: false },
  
  { id: 5, text: 'bikes to work', isMarked: true, isFreeSpace: false },
  { id: 6, text: 'has lived in another country', isMarked: false, isFreeSpace: false },
  { id: 7, text: 'prefers tea over coffee', isMarked: true, isFreeSpace: false },
  { id: 8, text: 'has run a marathon', isMarked: false, isFreeSpace: false },
  { id: 9, text: 'is left-handed', isMarked: true, isFreeSpace: false },
  
  { id: 10, text: 'was born in a different state', isMarked: false, isFreeSpace: false },
  { id: 11, text: 'has met a celebrity', isMarked: true, isFreeSpace: false },
  { id: 12, text: 'FREE SPACE', isMarked: true, isFreeSpace: true },
  { id: 13, text: 'can juggle', isMarked: true, isFreeSpace: false },
  { id: 14, text: 'has been skydiving', isMarked: false, isFreeSpace: false },
  
  { id: 15, text: 'has a garden', isMarked: true, isFreeSpace: false },
  { id: 16, text: 'has a twin', isMarked: false, isFreeSpace: false },
  { id: 17, text: 'plays video games', isMarked: true, isFreeSpace: false },
  { id: 18, text: 'does yoga', isMarked: false, isFreeSpace: false },
  { id: 19, text: 'has a hidden talent', isMarked: true, isFreeSpace: false },
  
  { id: 20, text: 'loves spicy food', isMarked: false, isFreeSpace: false },
  { id: 21, text: 'has been on TV', isMarked: true, isFreeSpace: false },
  { id: 22, text: 'collects something unique', isMarked: false, isFreeSpace: false },
  { id: 23, text: 'has read a book this month', isMarked: true, isFreeSpace: false },
  { id: 24, text: 'knows sign language', isMarked: false, isFreeSpace: false },
];

// Winning squares for the preview (diagonal line)
const WINNING_SQUARE_IDS = new Set([1, 7, 12, 17, 23]);

interface PreviewSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
}

function PreviewSquare({ square, isWinning }: PreviewSquareProps) {
  const winningStyle = isWinning ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-gold-glow)',
    boxShadow: '0 0 8px var(--color-solidarity-gold)'
  } : {};

  const markedStyle = square.isMarked && !isWinning ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-worker-red)',
  } : {};

  const unmarkedStyle = !square.isMarked ? {
    backgroundColor: 'var(--color-manifesto-cream)',
    borderColor: 'var(--color-border-dark)',
  } : {};

  const combinedStyle = {
    ...unmarkedStyle,
    ...markedStyle,
    ...winningStyle
  };

  return (
    <div
      className="relative flex items-center justify-center p-0.5 border rounded text-center paper-texture"
      style={combinedStyle}
    >
      <span className={`text-[0.4rem] leading-tight font-semibold ${square.isFreeSpace ? 'heading' : ''}`}>
        {square.isFreeSpace ? 'FREE' : square.text}
      </span>
      
      {square.isMarked && !square.isFreeSpace && (
        <span 
          className="absolute pointer-events-none"
          style={{
            color: 'var(--color-worker-red)',
            opacity: isWinning ? 0.6 : 0.4,
            transform: 'rotate(-15deg)',
            fontSize: '0.75rem',
            top: '50%',
            left: '50%',
            marginLeft: '-0.375rem',
            marginTop: '-0.375rem'
          }}
        >
          ★
        </span>
      )}
    </div>
  );
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center min-h-full p-6 paper-texture overflow-y-auto" style={{ backgroundColor: 'var(--color-manifesto-cream)' }}>
      <div className="w-full max-w-md">
        {/* Revolutionary Header */}
        <div className="text-center mb-6">
          <div className="inline-block px-6 py-2 mb-3" style={{ 
            backgroundColor: 'var(--color-worker-red)',
            transform: 'rotate(-2deg)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
          }}>
            <h1 className="heading text-5xl font-bold" style={{ color: 'var(--color-manifesto-cream)' }}>
              SOLIDARITY
            </h1>
          </div>
          <h2 className="heading text-3xl font-bold" style={{ color: 'var(--color-worker-red)' }}>
            BINGO
          </h2>
          <p className="text-sm mt-2 uppercase tracking-wide font-semibold" style={{ color: 'var(--color-solidarity-black)' }}>
            Workers' Social Hour
          </p>
        </div>

        {/* Context Header */}
        <div className="mb-6 p-4 rounded-lg border-2" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderColor: 'var(--color-solidarity-black)',
        }}>
          <div className="flex justify-between text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-solidarity-black)' }}>
            <span>⏱ 15-min rounds</span>
            <span>👥 3-50 players</span>
          </div>
          <p className="text-center text-xs mt-2 font-semibold uppercase" style={{ color: 'var(--color-worker-red)' }}>
            Perfect for in-person mixers
          </p>
        </div>

        {/* Gameplay Feature Cards */}
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-lg border-2" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'var(--color-worker-red)',
            boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-worker-red)' }}>
                <span className="text-2xl" style={{ color: 'var(--color-manifesto-cream)' }}>👁</span>
              </div>
              <div className="flex-1">
                <h3 className="heading text-xl" style={{ color: 'var(--color-worker-red)' }}>FIND</h3>
                <p className="text-xs" style={{ color: 'var(--color-solidarity-black)' }}>People matching prompts</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'var(--color-solidarity-black)',
            boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-solidarity-black)' }}>
                <span className="text-2xl" style={{ color: 'var(--color-worker-red)' }}>★</span>
              </div>
              <div className="flex-1">
                <h3 className="heading text-xl" style={{ color: 'var(--color-solidarity-black)' }}>MARK</h3>
                <p className="text-xs" style={{ color: 'var(--color-solidarity-black)' }}>Mark your bingo squares</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'var(--color-solidarity-gold)',
            boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-solidarity-gold)' }}>
                <span className="text-2xl" style={{ color: 'var(--color-solidarity-black)' }}>✓</span>
              </div>
              <div className="flex-1">
                <h3 className="heading text-xl" style={{ color: 'var(--color-solidarity-gold)' }}>WIN</h3>
                <p className="text-xs" style={{ color: 'var(--color-solidarity-black)' }}>Get 5 in a row</p>
              </div>
            </div>
          </div>
        </div>

        {/* Static Board Preview */}
        <div className="mb-6">
          <h3 className="heading text-sm text-center mb-2" style={{ color: 'var(--color-worker-red)' }}>
            Preview
          </h3>
          <div 
            className="grid grid-cols-5 gap-1 mx-auto p-2 rounded border-2" 
            style={{ 
              width: '16rem',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              borderColor: 'var(--color-border-dark)'
            }}
          >
            {PREVIEW_BOARD.map((square) => (
              <PreviewSquare 
                key={square.id} 
                square={square} 
                isWinning={WINNING_SQUARE_IDS.has(square.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full font-bold py-4 px-8 rounded-lg active:translate-y-1 transition-all heading text-xl border-4"
          style={{
            backgroundColor: 'var(--color-solidarity-black)',
            color: 'var(--color-manifesto-cream)',
            borderColor: 'var(--color-worker-red)',
            boxShadow: '0 6px 0 var(--color-worker-red-dark), 0 8px 12px rgba(0, 0, 0, 0.3)'
          }}
        >
          ORGANIZE A GAME
        </button>
        
        {/* Decorative Star */}
        <div className="mt-6 text-center text-4xl" style={{ color: 'var(--color-solidarity-gold)' }}>
          ★
        </div>
      </div>
    </div>
  );
}
