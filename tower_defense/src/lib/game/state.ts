import { START_LIVES, START_MONEY } from '../constants';
import type { TowerKind } from '../towers/types';

export type Phase =
  | 'idle'
  | 'placing'
  | 'playing'
  | 'paused'
  | 'between-waves'
  | 'gameover'
  | 'victory';

export interface GameStateShape {
  phase: Phase;
  money: number;
  lives: number;
  waveIndex: number;
  waveRunning: boolean;
  selectedKind: TowerKind | null;
  selectedTowerId: number | null;
  hoverCol: number;
  hoverRow: number;
  hoverValid: boolean;
  speedMultiplier: number;
  timeMs: number;
  tickCount: number;
  prevSpeed: number;
}

export const gameState: GameStateShape = $state<GameStateShape>({
  phase: 'idle' as Phase,
  money: START_MONEY,
  lives: START_LIVES,
  waveIndex: 0,
  waveRunning: false,
  selectedKind: null,
  selectedTowerId: null,
  hoverCol: -1,
  hoverRow: -1,
  hoverValid: false,
  speedMultiplier: 1,
  timeMs: 0,
  tickCount: 0,
  prevSpeed: 1
});

export function resetGameState() {
  gameState.phase = 'between-waves';
  gameState.money = START_MONEY;
  gameState.lives = START_LIVES;
  gameState.waveIndex = 0;
  gameState.waveRunning = false;
  gameState.selectedKind = null;
  gameState.selectedTowerId = null;
  gameState.hoverCol = -1;
  gameState.hoverRow = -1;
  gameState.hoverValid = false;
  gameState.speedMultiplier = 1;
  gameState.timeMs = 0;
  gameState.tickCount = 0;
  gameState.prevSpeed = 1;
}
