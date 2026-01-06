# Copilot Instructions for Soc Ops Bingo

## Project Overview
**Soc Ops** is a React TypeScript social bingo game for in-person mixers. Players find people who match bingo prompts to get 5 in a row. The app uses state-first architecture with persistent game storage and clean separation of concerns.

## Architecture Patterns

### State Management
- **Central hook**: `useBingoGame()` manages all game state and provides actions interface
- **Persistent state**: Game state automatically saved/restored from localStorage with versioning
- **Pure functions**: All game logic in `src/utils/bingoLogic.ts` uses pure functions for predictable behavior
- **State validation**: Robust validation when loading saved games (see `validateStoredData`)

### Component Structure
```
App (orchestrator)
├── StartScreen (entry point)
├── GameScreen (game container)
│   └── BingoBoard (5x5 grid)
│       └── BingoSquare (individual cells)
└── BingoModal (win celebration)
```

### Data Flow
1. Questions from `src/data/questions.ts` are shuffled and placed on 5x5 grid
2. Center square (index 12) is always FREE SPACE, pre-marked
3. Click handlers bubble up: BingoSquare → BingoBoard → GameScreen → useBingoGame
4. Game logic functions return new state (immutable updates)
5. Win detection checks rows, columns, and diagonals after each move

## Key Conventions

### TypeScript Patterns
- **Domain types** centralized in `src/types/index.ts` 
- **Interface exports** from utils (e.g., `export type { BingoSquareData } from '../types'`)
- **Strict validation** for localStorage data with explicit type guards

### Component Patterns
- **Props interfaces** defined inline above components
- **Prop drilling** preferred over context for this small app
- **Conditional rendering** using early returns and logical operators
- **Event handlers** passed down as `on*` props

### Testing Approach
- **Vitest** for unit tests with jsdom environment
- **Pure function testing** focused on `bingoLogic.ts` utilities
- **Deterministic tests** using mocked Math.random for board generation
- **Edge case coverage** for win conditions, state transitions, and persistence

## Development Workflows

### Commands
- `npm run dev` - Start development server (already running)
- `npm run build` - TypeScript compile + Vite build for production
- `npm run test` - Run Vitest test suite
- `npm run lint` - ESLint check

### Linting Rules
- **Unused variables**: Error on unused vars (prefix with `_` to ignore, e.g., `_unusedParam`)
- **Async functions**: Error on `async` functions that don't use `await`

### Pre-Commit Checklist
Before committing changes, always verify:
- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] `npm run test` all tests pass

Run all three commands to ensure code quality and prevent breaking changes.

### Styling
- **Tailwind CSS v4** with custom CSS properties defined in `src/index.css`
- **Custom theme vars**: CSS custom properties for theming (see Design System below)
- **Mobile-first** responsive design with `aspect-square`, `grid-cols-5` layout
- **Interactive states**: `active:` classes for touch feedback

## Design System: Bold Marxism Coffee House

### Theme Overview
Revolutionary propaganda poster aesthetic merged with cozy coffeehouse warmth. Bold red/black/cream palette with vintage paper textures and constructivist typography creates an ideologically playful yet accessible interface.

### Color Palette
**Primary Colors:**
- `--color-worker-red: #C41E3A` - Primary accent, headers, CTAs
- `--color-worker-red-dark: #8B1528` - Button shadows, borders
- `--color-solidarity-black: #1A1A1A` - Dark backgrounds, primary text
- `--color-manifesto-cream: #F5E6D3` - Light backgrounds, paper cards
- `--color-solidarity-gold: #D4AF37` - Win states, highlights
- `--color-gold-glow: #FFD700` - Winning square borders with glow

**Functional Colors:**
- `--color-bg-dark: #2A2520` - Game screen background
- `--color-bg-card: #F5E6D3` - Card/square backgrounds
- `--color-border-dark: #3A3530` - Subtle borders
- `--color-marked-stamp: #C41E3A` - Red star stamp on marked squares

### Typography
**Display Font:**
- `font-family: 'Bebas Neue', 'Impact', sans-serif` - All headings
- Applied via `.heading` class
- `text-transform: uppercase` + `letter-spacing: 0.05em` for propaganda effect
- Font loaded from Google Fonts (must be first @import in CSS)

**Body Font:**
- System font stack: `system-ui, -apple-system, sans-serif`
- Preserves performance and accessibility
- Used for all body text and square content

### Component Design Language

**StartScreen:**
- Cream paper texture background (`paper-texture` class)
- Rotated red banner with "SOLIDARITY" in Bebas Neue
- Chunky black button with red border and shadow
- Gold decorative stars
- "Workers' Social Hour" subheading

**BingoSquare States:**
1. **Unmarked**: Cream paper card, dark border, semibold text
2. **Marked**: Red star stamp overlay (opacity 0.4, rotated -15deg)
3. **Winning**: Gold border glow with `box-shadow`, increased star opacity
4. **Free Space**: Bold, larger text with `.heading` class

**GameScreen:**
- Dark revolutionary background (`--color-bg-dark`)
- Red header bar with gold stars and "SOLIDARITY BINGO"
- Cream/transparent instruction banner
- Gold "SOLIDARITY ACHIEVED!" alert when winning
- Dark inset container for board (semi-transparent black)

**BingoModal:**
- Rotated red banner with "SOLIDARITY"
- Triple gold stars (★ ★ ★)
- "ACHIEVED!" in red heading font
- Solidarity-themed body copy
- Black button with red border and shadow
- "CONTINUE THE STRUGGLE" CTA

### Visual Effects
- **Paper Texture**: `.paper-texture` class adds subtle radial gradients
- **Stamp Effect**: Red star (★) overlaid on marked squares, rotated and semi-transparent
- **Button Depth**: `box-shadow` creates 3D push-button effect with red shadow
- **Gold Glow**: Winning squares use `box-shadow` with gold color spread
- **Rotated Elements**: `-rotate-2`, `rotate(-12deg)` for playful vintage poster feel

### Layout Principles
- **Centered content**: max-width containers with auto margins
- **Consistent spacing**: gap-1.5 on grid, p-3 to p-8 on containers
- **Mobile-first**: Single-column, touch-optimized (active states, no hover)
- **Aspect-square**: Maintains 1:1 grid ratio across all screen sizes
- **Bold borders**: `border-2` to `border-4` for strong visual separation

### Animation & Interaction
- `transition-all` on buttons and squares for smooth state changes
- `active:translate-y-1` on buttons for press effect
- `active:scale-95` on unmarked squares
- `animate-[bounce_0.5s_ease-out]` on modal entrance
- Minimal animation philosophy for performance

### Accessibility Considerations
- High contrast maintained (WCAG AA+)
- `aria-pressed` states on squares
- Semantic button elements with labels
- Touch target size ≥44px (min-h-[60px] on squares)
- No color-only information (stamps and borders reinforce states)

### When Modifying Design
1. **Color changes**: Update CSS custom properties in `@theme` block
2. **Typography**: Modify `.heading` class or update Google Fonts import
3. **New components**: Follow paper card + stamp/glow pattern
4. **State additions**: Extend color palette with new `--color-*` variables
5. **Testing**: Verify mobile touch interactions and contrast ratios

### Key Files to Modify
- `src/data/questions.ts` - Add/modify bingo prompts
- `src/utils/bingoLogic.ts` - Game rules and win detection
- `src/hooks/useBingoGame.ts` - State management and persistence
- `src/components/` - UI components following established patterns

### Constants
- **Board size**: 5x5 grid (25 squares), center index is 12
- **Storage key**: `'bingo-game-state'` with version 1
- **Win condition**: 5 in a row (horizontal, vertical, or diagonal)

## Integration Points
- **GitHub Pages** deployment on main branch push (auto-configured)
- **localStorage** for game state persistence across sessions
- **Vite** build system with React and Tailwind plugins
- **Environment variables**: `VITE_REPO_NAME` for deployment base path