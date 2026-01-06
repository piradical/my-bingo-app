interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 paper-texture" style={{ backgroundColor: 'var(--color-manifesto-cream)' }}>
      <div className="text-center max-w-sm">
        {/* Revolutionary Header */}
        <div className="mb-8">
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
        
        {/* Instructions Card */}
        <div className="rounded-lg p-6 mb-8 border-2" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderColor: 'var(--color-solidarity-black)',
          boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h3 className="heading text-xl mb-3" style={{ color: 'var(--color-worker-red)' }}>
            The Collective Game
          </h3>
          <ul className="text-left text-sm space-y-2" style={{ color: 'var(--color-solidarity-black)' }}>
            <li>★ Find comrades who match the prompts</li>
            <li>★ Mark squares as you build connections</li>
            <li>★ Five in a row achieves solidarity!</li>
          </ul>
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
        <div className="mt-6 text-4xl" style={{ color: 'var(--color-solidarity-gold)' }}>
          ★
        </div>
      </div>
    </div>
  );
}
