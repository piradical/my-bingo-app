import { AnimatedBoardPreview } from './AnimatedBoardPreview';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-full overflow-y-auto paper-texture" style={{ backgroundColor: 'var(--color-manifesto-cream)' }}>
      <div className="flex flex-col items-center px-6 py-8 max-w-2xl mx-auto">
        {/* Hero Section with Header and Animated Board */}
        <div className="text-center mb-8 w-full animate-fade-in">
          {/* Revolutionary Header */}
          <div className="mb-6">
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
              Bringing People Together
            </p>
          </div>

          {/* Animated Board Preview */}
          <div className="mb-6">
            <AnimatedBoardPreview />
          </div>
        </div>

        {/* Context Section */}
        <div className="rounded-lg p-5 mb-8 w-full animate-fade-in-up" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderColor: 'var(--color-worker-red)',
          boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.1)',
          animationDelay: '0.2s',
          opacity: 0,
          borderWidth: '2px'
        }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span style={{ color: 'var(--color-solidarity-gold)' }}>★</span>
            <h3 className="heading text-lg" style={{ color: 'var(--color-worker-red)' }}>
              Perfect for Any Gathering
            </h3>
            <span style={{ color: 'var(--color-solidarity-gold)' }}>★</span>
          </div>
          <ul className="text-sm space-y-1.5" style={{ color: 'var(--color-solidarity-black)' }}>
            <li>🎯 Icebreaker for any group size (3-50 people)</li>
            <li>⏱️ Rounds take about 15 minutes</li>
            <li>💝 Brings people together through shared discovery</li>
          </ul>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 w-full mb-8">
          {/* FIND Card */}
          <div 
            className="rounded-lg p-5 border-2 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderColor: 'var(--color-border-dark)',
              boxShadow: '2px 2px 0 rgba(0, 0, 0, 0.1)',
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl" style={{ color: 'var(--color-worker-red)' }}>🔍</div>
              <div className="flex-1">
                <h4 className="heading text-xl mb-1" style={{ color: 'var(--color-worker-red)' }}>
                  FIND
                </h4>
                <p className="text-sm" style={{ color: 'var(--color-solidarity-black)' }}>
                  Connect with people matching fun prompts. Each conversation is a chance to discover something new about someone.
                </p>
              </div>
            </div>
          </div>

          {/* MARK Card */}
          <div 
            className="rounded-lg p-5 border-2 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderColor: 'var(--color-border-dark)',
              boxShadow: '2px 2px 0 rgba(0, 0, 0, 0.1)',
              animationDelay: '0.4s',
              opacity: 0
            }}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl" style={{ color: 'var(--color-worker-red)' }}>✓</div>
              <div className="flex-1">
                <h4 className="heading text-xl mb-1" style={{ color: 'var(--color-worker-red)' }}>
                  MARK
                </h4>
                <p className="text-sm" style={{ color: 'var(--color-solidarity-black)' }}>
                  Mark squares as you meet your matches. Watch your board fill up as you make meaningful connections.
                </p>
              </div>
            </div>
          </div>

          {/* WIN Card */}
          <div 
            className="rounded-lg p-5 border-2 transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderColor: 'var(--color-border-dark)',
              boxShadow: '2px 2px 0 rgba(0, 0, 0, 0.1)',
              animationDelay: '0.5s',
              opacity: 0
            }}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl" style={{ color: 'var(--color-solidarity-gold)' }}>🎉</div>
              <div className="flex-1">
                <h4 className="heading text-xl mb-1" style={{ color: 'var(--color-worker-red)' }}>
                  WIN
                </h4>
                <p className="text-sm" style={{ color: 'var(--color-solidarity-black)' }}>
                  Get 5 in a row and celebrate together! Victory is sweeter when you've built genuine connections along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for sticky button */}
        <div className="h-20"></div>
      </div>

      {/* Sticky CTA Button */}
      <div 
        className="sticky bottom-0 left-0 right-0 p-4 animate-fade-in"
        style={{ 
          backgroundColor: 'var(--color-manifesto-cream)',
          boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
          animationDelay: '0.6s',
          opacity: 0
        }}
      >
        <button
          onClick={onStart}
          className="w-full max-w-md mx-auto block font-bold py-4 px-8 rounded-lg active:translate-y-1 transition-all heading text-xl border-4 animate-pulse-subtle"
          style={{
            backgroundColor: 'var(--color-solidarity-black)',
            color: 'var(--color-manifesto-cream)',
            borderColor: 'var(--color-worker-red)',
            boxShadow: '0 6px 0 var(--color-worker-red-dark), 0 8px 12px rgba(0, 0, 0, 0.3)'
          }}
        >
          START CONNECTING
        </button>
      </div>
    </div>
  );
}
