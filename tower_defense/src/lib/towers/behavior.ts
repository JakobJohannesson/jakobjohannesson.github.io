import type { Enemy } from '../enemies/types';
import { entities, spawnProjectile } from '../game/entities.svelte';
import { circleHit, distance, enemyRadius, isTargetable } from '../game/collision';
import { TOTAL_PATH_LENGTH } from '../paths/track01';
import type { Tower } from './types';

// pick a target for this tower based on targetingMode
export function pickTarget(t: Tower, timeMs: number): Enemy | null {
  const inRange: Enemy[] = [];
  for (const e of entities.enemies) {
    if (!isTargetable(e, timeMs)) continue;
    const d = distance(t.x, t.y, e.x, e.y);
    if (d <= t.range + enemyRadius(e)) inRange.push(e);
  }
  if (inRange.length === 0) return null;

  switch (t.targetingMode) {
    case 'first': {
      let best = inRange[0];
      for (const e of inRange) if (e.pathProgress > best.pathProgress) best = e;
      return best;
    }
    case 'last': {
      let best = inRange[0];
      for (const e of inRange) if (e.pathProgress < best.pathProgress) best = e;
      return best;
    }
    case 'strongest': {
      let best = inRange[0];
      const score = (e: Enemy) => e.hp + (e.layers - 1) * e.hpPerLayer;
      let bs = score(best);
      for (const e of inRange) {
        const s = score(e);
        if (s > bs) {
          bs = s;
          best = e;
        }
      }
      return best;
    }
    case 'closest': {
      let best = inRange[0];
      let bd = distance(t.x, t.y, best.x, best.y);
      for (const e of inRange) {
        const d = distance(t.x, t.y, e.x, e.y);
        if (d < bd) {
          bd = d;
          best = e;
        }
      }
      return best;
    }
  }
}

export function updateTowers(dtMs: number, timeMs: number) {
  void dtMs;
  for (const t of entities.towers) {
    const target = pickTarget(t, timeMs);
    if (!target) {
      if (t.kind === 'laser') {
        t.beamTargetId = null;
      }
      continue;
    }
    // smooth rotation toward target
    const desired = Math.atan2(target.y - t.y, target.x - t.x);
    t.rotation = lerpAngle(t.rotation, desired, 0.35);

    if (timeMs - t.lastFireAt < t.fireRateMs) continue;
    t.lastFireAt = timeMs;
    fireTower(t, target, timeMs);
  }
  void TOTAL_PATH_LENGTH;
}

function lerpAngle(a: number, b: number, k: number): number {
  let diff = b - a;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return a + diff * k;
}

function fireTower(t: Tower, target: Enemy, timeMs: number) {
  switch (t.kind) {
    case 'laser':
      fireLaser(t, target, timeMs);
      break;
    case 'plasma':
      firePlasma(t, target);
      break;
    case 'missile':
      fireMissile(t, target);
      break;
    case 'emp':
      fireEmp(t, target);
      break;
    case 'cryo':
      fireCryo(t, target);
      break;
    case 'railgun':
      fireRailgun(t, target);
      break;
  }
}

// Laser: instant damage, set beam visual
function fireLaser(t: Tower, target: Enemy, timeMs: number) {
  let dmg = t.damage;
  if (t.critChance && Math.random() < t.critChance) dmg *= 2;
  applyDamage(target, dmg);
  t.beamActiveUntil = timeMs + 100;
  t.beamTargetId = target.id;
}

function firePlasma(t: Tower, target: Enemy) {
  const dx = target.x - t.x;
  const dy = target.y - t.y;
  const len = Math.hypot(dx, dy) || 1;
  const speed = 480;
  spawnProjectile({
    kind: 'bolt',
    x: t.x,
    y: t.y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    speed,
    damage: t.damage,
    color: '#c724ff',
    splashRadius: t.splashRadius,
    targetId: target.id,
    ttlMs: 1600
  });
}

function fireMissile(t: Tower, target: Enemy) {
  const dx = target.x - t.x;
  const dy = target.y - t.y;
  const len = Math.hypot(dx, dy) || 1;
  const speed = 360;
  spawnProjectile({
    kind: 'missile',
    x: t.x,
    y: t.y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    speed,
    damage: t.damage,
    color: '#f9f002',
    splashRadius: t.splashRadius,
    targetId: target.id,
    ttlMs: 3500,
    turnRate: 6
  });
}

function fireEmp(t: Tower, target: Enemy) {
  const dx = target.x - t.x;
  const dy = target.y - t.y;
  const len = Math.hypot(dx, dy) || 1;
  const speed = 520;
  spawnProjectile({
    kind: 'pulse',
    x: t.x,
    y: t.y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    speed,
    damage: t.damage,
    color: '#00f0ff',
    splashRadius: t.splashRadius,
    targetId: target.id,
    ttlMs: 1200,
    statusApply: {
      slowPct: t.slowPct,
      slowMs: t.slowMs,
      empMs: t.empMs
    }
  });
}

function fireCryo(t: Tower, target: Enemy) {
  const dx = target.x - t.x;
  const dy = target.y - t.y;
  const len = Math.hypot(dx, dy) || 1;
  const speed = 440;
  spawnProjectile({
    kind: 'pulse',
    x: t.x,
    y: t.y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    speed,
    damage: t.damage,
    color: '#39ff14',
    targetId: target.id,
    ttlMs: 1400,
    statusApply: {
      slowPct: t.slowPct,
      slowMs: t.slowMs,
      freezeMs: t.freezeMs
    }
  });
}

function fireRailgun(t: Tower, target: Enemy) {
  const dx = target.x - t.x;
  const dy = target.y - t.y;
  const len = Math.hypot(dx, dy) || 1;
  const speed = 1400;
  spawnProjectile({
    kind: 'slug',
    x: t.x,
    y: t.y,
    vx: (dx / len) * speed,
    vy: (dy / len) * speed,
    speed,
    damage: t.damage,
    color: '#f9f002',
    pierce: t.pierce ?? 2,
    targetId: target.id,
    ttlMs: 800
  });
}

// Apply plain damage ignoring status apply — used by laser + splash
export function applyDamage(e: Enemy, amount: number) {
  if (!e.alive) return;
  if (e.cloaked) {
    // hitting reveals permanently
    e.cloaked = false;
  }
  e.hp -= amount;
  if (e.hp <= 0) {
    popLayer(e);
  }
}

export function popLayer(e: Enemy) {
  if (e.layers > 1) {
    e.layers -= 1;
    e.hp = e.hpPerLayer;
    e.maxHp = e.hpPerLayer;
    e.baseSpeed *= 1.25;
    // preserve current slow ratio when speed changes
    e.speed = e.baseSpeed;
  } else {
    e.layers = 0;
    e.alive = false;
  }
}

// ensure circleHit referenced
void circleHit;
