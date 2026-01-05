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

### Pre-Commit Checklist
Before committing changes, always verify:
- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] `npm run test` all tests pass

Run all three commands to ensure code quality and prevent breaking changes.

### Styling
- **Tailwind CSS v4** with custom CSS properties defined in `src/index.css`
- **Custom theme vars**: `--color-accent`, `--color-marked`, `--color-bingo` for game states
- **Mobile-first** responsive design with `aspect-square`, `grid-cols-5` layout
- **Interactive states**: `active:` classes for touch feedback

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