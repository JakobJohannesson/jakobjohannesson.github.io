import { CANVAS_H, CANVAS_W } from '../constants';
import type { Enemy } from '../enemies/types';
import { entities, getEnemyById, spawnExplosion, spawnFloater } from '../game/entities';
import { circleHit, distance, enemyRadius } from '../game/collision';
import { applyDamage, popLayer } from '../towers/behavior';
import type { Projectile, ProjectileStatusApply } from './types';
import { gameState } from '../game/state';

export function updateProjectiles(dtSec: number, timeMs: number) {
  const projectiles = entities.projectiles;
  for (const p of projectiles) {
    if (!p.alive) continue;

    // missile seeking
    if (p.kind === 'missile' && p.turnRate) {
      const target = p.targetId != null ? getEnemyById(p.targetId) : null;
      if (target) {
        const desired = Math.atan2(target.y - p.y, target.x - p.x);
        const current = Math.atan2(p.vy, p.vx);
        const delta = shortestAngleDelta(current, desired);
        const maxTurn = p.turnRate * dtSec;
        const applied = Math.max(-maxTurn, Math.min(maxTurn, delta));
        const newAngle = current + applied;
        p.vx = Math.cos(newAngle) * p.speed;
        p.vy = Math.sin(newAngle) * p.speed;
      }
    }

    const steps = p.kind === 'slug' ? 6 : 1;
    const sx = (p.vx * dtSec) / steps;
    const sy = (p.vy * dtSec) / steps;

    for (let step = 0; step < steps && p.alive; step++) {
      p.x += sx;
      p.y += sy;
      // trail
      p.trail.push({ x: p.x, y: p.y, t: timeMs });
      if (p.trail.length > 20) p.trail.shift();

      // off-canvas cull
      if (p.x < -40 || p.x > CANVAS_W + 40 || p.y < -40 || p.y > CANVAS_H + 40) {
        p.alive = false;
        break;
      }

      // collision check
      for (const e of entities.enemies) {
        if (!e.alive) continue;
        // Cloaked stealth (never emp'd, never hit) cannot be collided with
        if (e.cloaked && e.empUntil <= timeMs) continue;
        if (p.piercedIds.has(e.id)) continue;
        const er = enemyRadius(e);
        const hitR = er + (p.kind === 'slug' ? 4 : 6);
        if (circleHit(p.x, p.y, e.x, e.y, hitR)) {
          handleHit(p, e, timeMs);
          if (!p.alive) break;
        }
      }
    }

    // TTL
    p.ttlMs -= dtSec * 1000;
    if (p.ttlMs <= 0) p.alive = false;
  }
}

function handleHit(p: Projectile, target: Enemy, timeMs: number) {
  applyDamage(target, p.damage);
  if (p.statusApply) applyStatus(target, p.statusApply, timeMs);

  if (p.splashRadius && p.splashRadius > 0) {
    spawnExplosion(p.x, p.y, p.splashRadius, p.color);
    for (const e of entities.enemies) {
      if (!e.alive || e === target) continue;
      if (e.cloaked && e.empUntil <= timeMs) continue;
      if (distance(p.x, p.y, e.x, e.y) <= p.splashRadius + enemyRadius(e)) {
        // splash doesn't double-hit primary target
        // secondary damage = half (feel good)
        applyDamage(e, p.damage * 0.5);
        if (p.statusApply) applyStatus(e, p.statusApply, timeMs);
      }
    }
  }

  if (p.kind === 'slug') {
    p.piercedIds.add(target.id);
    const maxPierce = (p.pierce ?? 2) + 1;
    if (p.piercedIds.size >= maxPierce) p.alive = false;
  } else {
    p.alive = false;
  }

  // floater for player feedback (only when killed enemy)
  if (!target.alive && target.reward > 0) {
    gameState.money += target.reward;
    spawnFloater(target.x, target.y - 10, '+' + target.reward, '#f9f002');
  }
  // trivially reference popLayer so it's kept
  void popLayer;
}

function applyStatus(e: Enemy, s: ProjectileStatusApply, timeMs: number) {
  if (s.slowMs && s.slowPct) {
    e.slowUntil = Math.max(e.slowUntil, timeMs + s.slowMs);
    // mark slow strength by tweaking speed lazily in updateStatuses
    // store as negative multiplier via small field? Use rotation field? No — use extra state:
    (e as Enemy & { _slowPct?: number })._slowPct = Math.max(
      (e as Enemy & { _slowPct?: number })._slowPct ?? 0,
      s.slowPct
    );
  }
  if (s.freezeMs) {
    e.freezeUntil = Math.max(e.freezeUntil, timeMs + s.freezeMs);
  }
  if (s.empMs) {
    e.empUntil = Math.max(e.empUntil, timeMs + s.empMs);
    // EMP reveals stealth permanently on hit
    e.cloaked = false;
  }
}

function shortestAngleDelta(a: number, b: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
