interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: 'rgba(26, 26, 26, 0.85)' }}
    >
      <div 
        className="rounded-xl p-8 max-w-sm w-full text-center shadow-xl animate-[bounce_0.5s_ease-out] border-4 paper-texture"
        style={{
          backgroundColor: 'var(--color-manifesto-cream)',
          borderColor: 'var(--color-worker-red)'
        }}
      >
        {/* Revolutionary Banner */}
        <div 
          className="inline-block px-6 py-2 mb-4 -rotate-2"
          style={{
            backgroundColor: 'var(--color-worker-red)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h2 className="heading text-4xl font-bold" style={{ color: 'var(--color-manifesto-cream)' }}>
            SOLIDARITY
          </h2>
        </div>
        
        {/* Gold Stars */}
        <div className="text-5xl mb-3" style={{ color: 'var(--color-solidarity-gold)' }}>
          ★ ★ ★
        </div>
        
        <h3 className="heading text-2xl font-bold mb-3" style={{ color: 'var(--color-worker-red)' }}>
          ACHIEVED!
        </h3>
        
        <p className="font-semibold mb-6 text-sm" style={{ color: 'var(--color-solidarity-black)' }}>
          The collective succeeds when we unite!<br/>
          Five comrades, one line of solidarity.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={onDismiss}
          className="w-full font-bold py-3 px-6 rounded-lg heading text-lg transition-all active:translate-y-1 border-4"
          style={{
            backgroundColor: 'var(--color-solidarity-black)',
            color: 'var(--color-manifesto-cream)',
            borderColor: 'var(--color-worker-red)',
            boxShadow: '0 4px 0 var(--color-worker-red-dark), 0 6px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          CONTINUE THE STRUGGLE
        </button>
        
        {/* Decorative element */}
        <div className="mt-4 text-2xl" style={{ color: 'var(--color-solidarity-gold)' }}>
          ★
        </div>
      </div>
    </div>
  );
}
