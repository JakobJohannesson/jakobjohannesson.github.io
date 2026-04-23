import { entities, spawnFloater } from '../game/entities.svelte';
import { gameState } from '../game/state.svelte';
import { TOTAL_PATH_LENGTH, positionAtDistance } from '../paths/track01';
import type { Enemy } from './types';

// Advance statuses (freeze / slow) and sync e.speed
export function updateStatuses(timeMs: number) {
  for (const e of entities.enemies) {
    if (!e.alive) continue;
    const frozen = e.freezeUntil > timeMs;
    const stunned = e.empUntil > timeMs;
    const slowed = e.slowUntil > timeMs;
    const slowPct = (e as Enemy & { _slowPct?: number })._slowPct ?? 0;

    if (frozen || stunned) {
      e.speed = 0;
    } else if (slowed && slowPct > 0) {
      e.speed = e.baseSpeed * (1 - slowPct);
    } else {
      e.speed = e.baseSpeed;
      // clear stored slow mag after expiry
      if (!slowed) (e as Enemy & { _slowPct?: number })._slowPct = 0;
    }
  }
}

export function moveEnemies(dtSec: number) {
  for (const e of entities.enemies) {
    if (!e.alive) continue;
    e.pathProgress += e.speed * dtSec;
    if (e.pathProgress >= TOTAL_PATH_LENGTH) {
      // leak
      e.alive = false;
      gameState.lives = Math.max(0, gameState.lives - e.damageOnLeak);
      spawnFloater(880, 580, '-' + e.damageOnLeak, '#ff3355');
      continue;
    }
    const prevX = e.x;
    const prevY = e.y;
    const p = positionAtDistance(e.pathProgress);
    e.x = p.x;
    e.y = p.y;
    e.pathIndex = p.segIndex;
    const dx = e.x - prevX;
    const dy = e.y - prevY;
    if (dx !== 0 || dy !== 0) e.rotation = Math.atan2(dy, dx);
  }
}
