import { COLS, ROWS, TILE } from '../constants';
import { entities, makeTower, spawnFloater } from './entities.svelte';
import { PATH_TILES } from '../paths/track01';
import { gameState } from './state.svelte';
import { TOWER_STATS } from '../towers/definitions';
import type { TowerKind } from '../towers/types';

export function canPlace(col: number, row: number): boolean {
  if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return false;
  if (PATH_TILES.has(col + ',' + row)) return false;
  for (const t of entities.towers) if (t.col === col && t.row === row) return false;
  return true;
}

export function attemptPlace(kind: TowerKind, col: number, row: number): boolean {
  const stats = TOWER_STATS[kind];
  if (gameState.money < stats.cost) return false;
  if (!canPlace(col, row)) return false;
  makeTower(kind, col, row);
  gameState.money -= stats.cost;
  spawnFloater(col * TILE + TILE / 2, row * TILE + TILE / 2 - 10, '-' + stats.cost, '#ff3355');
  return true;
}

export function sellTower(towerId: number): number {
  const idx = entities.towers.findIndex((t) => t.id === towerId);
  if (idx < 0) return 0;
  const t = entities.towers[idx];
  const refund = Math.floor(0.5 * t.totalInvested);
  gameState.money += refund;
  entities.towers.splice(idx, 1);
  spawnFloater(t.x, t.y - 10, '+' + refund, '#39ff14');
  return refund;
}
