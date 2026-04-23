import { ENEMY_STATS } from '../enemies/definitions';
import type { Enemy } from '../enemies/types';

export function enemyRadius(e: Enemy): number {
  return ENEMY_STATS[e.kind].radius;
}

export function distance(ax: number, ay: number, bx: number, by: number): number {
  return Math.hypot(bx - ax, by - ay);
}

export function distanceSq(ax: number, ay: number, bx: number, by: number): number {
  const dx = bx - ax;
  const dy = by - ay;
  return dx * dx + dy * dy;
}

export function circleHit(
  px: number,
  py: number,
  ex: number,
  ey: number,
  radius: number
): boolean {
  return distanceSq(px, py, ex, ey) <= radius * radius;
}

export function isTargetable(e: Enemy, timeMs: number, requireRevealStealth = true): boolean {
  if (!e.alive) return false;
  if (!requireRevealStealth) return true;
  if (e.cloaked && e.empUntil <= timeMs) return false;
  return true;
}
