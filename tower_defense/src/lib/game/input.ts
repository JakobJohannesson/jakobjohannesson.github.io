import { COLS, ROWS, TILE } from '../constants';
import { entities } from './entities.svelte';
import { attemptPlace, canPlace } from './placement';
import { gameState } from './state.svelte';
import { TOWER_KINDS, TOWER_STATS } from '../towers/definitions';
import type { TowerKind } from '../towers/types';
import { beginWave } from './loop';

export function selectTowerKind(kind: TowerKind) {
  if (gameState.phase === 'gameover' || gameState.phase === 'victory') return;
  if (gameState.money < TOWER_STATS[kind].cost) return;
  gameState.selectedKind = kind;
  gameState.selectedTowerId = null;
  gameState.phase = 'placing';
}

export function cancelSelection() {
  gameState.selectedKind = null;
  gameState.selectedTowerId = null;
  if (gameState.phase === 'placing') {
    gameState.phase = gameState.waveRunning ? 'playing' : 'between-waves';
  }
}

export function selectTower(id: number | null) {
  gameState.selectedTowerId = id;
  gameState.selectedKind = null;
  if (gameState.phase === 'placing') {
    gameState.phase = gameState.waveRunning ? 'playing' : 'between-waves';
  }
}

function canvasCoords(canvas: HTMLCanvasElement, ev: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const sx = canvas.width / rect.width;
  const sy = canvas.height / rect.height;
  return {
    x: (ev.clientX - rect.left) * sx,
    y: (ev.clientY - rect.top) * sy
  };
}

export function onCanvasMouseMove(canvas: HTMLCanvasElement, ev: MouseEvent) {
  const { x, y } = canvasCoords(canvas, ev);
  const col = Math.floor(x / TILE);
  const row = Math.floor(y / TILE);
  gameState.hoverCol = col >= 0 && col < COLS ? col : -1;
  gameState.hoverRow = row >= 0 && row < ROWS ? row : -1;
  if (gameState.phase === 'placing' && gameState.selectedKind) {
    gameState.hoverValid =
      canPlace(gameState.hoverCol, gameState.hoverRow) &&
      gameState.money >= TOWER_STATS[gameState.selectedKind].cost;
  } else {
    gameState.hoverValid = false;
  }
}

export function onCanvasMouseLeave() {
  gameState.hoverCol = -1;
  gameState.hoverRow = -1;
  gameState.hoverValid = false;
}

export function onCanvasMouseDown(
  canvas: HTMLCanvasElement,
  ev: MouseEvent,
  onSelect: (id: number | null) => void
) {
  const { x, y } = canvasCoords(canvas, ev);
  const col = Math.floor(x / TILE);
  const row = Math.floor(y / TILE);

  // Right-click or shift = cancel placement
  if (ev.button === 2 || ev.shiftKey) {
    cancelSelection();
    onSelect(null);
    return;
  }

  if (ev.button !== 0) return;

  if (gameState.phase === 'placing' && gameState.selectedKind) {
    if (attemptPlace(gameState.selectedKind, col, row)) {
      // stay in placing mode
      // but if can't afford next, exit
      if (gameState.money < TOWER_STATS[gameState.selectedKind].cost) {
        cancelSelection();
        onSelect(null);
      } else {
        // refresh hover valid
        gameState.hoverValid = canPlace(col, row);
      }
      return;
    }
  }

  // Otherwise try to select an existing tower
  const hit = entities.towers.find((t) => t.col === col && t.row === row);
  if (hit) {
    selectTower(hit.id);
    onSelect(hit.id);
  } else {
    selectTower(null);
    onSelect(null);
  }
}

export function setSpeed(mult: 0 | 1 | 2 | 3) {
  if (gameState.phase === 'gameover' || gameState.phase === 'victory') return;
  if (mult === 0) {
    if (gameState.speedMultiplier !== 0) {
      gameState.prevSpeed = gameState.speedMultiplier;
      gameState.speedMultiplier = 0;
      gameState.phase = gameState.waveRunning ? 'paused' : gameState.phase;
    }
  } else {
    gameState.speedMultiplier = mult;
    if (gameState.phase === 'paused') {
      gameState.phase = gameState.waveRunning ? 'playing' : 'between-waves';
    }
  }
}

export function togglePause() {
  if (gameState.speedMultiplier === 0) {
    const restore = gameState.prevSpeed && gameState.prevSpeed > 0 ? gameState.prevSpeed : 1;
    setSpeed(restore as 1 | 2 | 3);
  } else {
    setSpeed(0);
  }
}

export function onKeyDown(ev: KeyboardEvent, onSelect: (id: number | null) => void) {
  if (ev.key === 'Escape') {
    cancelSelection();
    onSelect(null);
    return;
  }
  if (ev.key === 'p' || ev.key === 'P') {
    togglePause();
    return;
  }
  if (ev.key === ' ') {
    ev.preventDefault();
    if (gameState.phase === 'between-waves') beginWave();
    else togglePause();
    return;
  }
  if (ev.key === 'f' || ev.key === 'F') {
    if (ev.shiftKey) setSpeed(3);
    else setSpeed(2);
    return;
  }
  if (ev.key >= '1' && ev.key <= '6') {
    const idx = parseInt(ev.key, 10) - 1;
    selectTowerKind(TOWER_KINDS[idx]);
    onSelect(null);
    return;
  }
}
