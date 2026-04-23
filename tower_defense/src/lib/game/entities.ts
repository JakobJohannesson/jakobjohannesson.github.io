import { TILE } from '../constants';
import type { Enemy, EnemyKind } from '../enemies/types';
import { ENEMY_STATS } from '../enemies/definitions';
import { WAYPOINTS, positionAtDistance } from '../paths/track01';
import type { Projectile, ProjectileKind, ProjectileStatusApply } from '../projectiles/types';
import type { Tower, TowerKind } from '../towers/types';
import { TOWER_STATS } from '../towers/definitions';

export const entities = $state({
  enemies: [] as Enemy[],
  towers: [] as Tower[],
  projectiles: [] as Projectile[],
  floaters: [] as Array<{
    id: number;
    x: number;
    y: number;
    vy: number;
    text: string;
    color: string;
    ttlMs: number;
    maxTtlMs: number;
  }>,
  explosions: [] as Array<{
    id: number;
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    ttlMs: number;
    maxTtlMs: number;
    color: string;
  }>
});

let nextEnemyId = 1;
let nextTowerId = 1;
let nextProjectileId = 1;
let nextFloaterId = 1;
let nextExplosionId = 1;

export function resetEntities() {
  entities.enemies.length = 0;
  entities.towers.length = 0;
  entities.projectiles.length = 0;
  entities.floaters.length = 0;
  entities.explosions.length = 0;
  nextEnemyId = 1;
  nextTowerId = 1;
  nextProjectileId = 1;
  nextFloaterId = 1;
  nextExplosionId = 1;
}

export function spawnEnemy(kind: EnemyKind, now: number, hpMult = 1, speedMult = 1): Enemy {
  const stats = ENEMY_STATS[kind];
  const start = WAYPOINTS[0];
  const hpPerLayer = Math.ceil(stats.hpPerLayer * hpMult);
  const baseSpeed = stats.baseSpeed * speedMult;
  const enemy: Enemy = {
    id: nextEnemyId++,
    kind,
    x: start.x,
    y: start.y,
    pathIndex: 0,
    pathProgress: 0,
    speed: baseSpeed,
    baseSpeed,
    layers: stats.layers,
    hpPerLayer,
    hp: hpPerLayer,
    maxHp: hpPerLayer,
    reward: stats.reward,
    damageOnLeak: stats.damageOnLeak,
    cloaked: stats.cloaked,
    slowUntil: 0,
    freezeUntil: 0,
    empUntil: 0,
    alive: true,
    rotation: 0,
    spawnTimeMs: now
  };
  entities.enemies.push(enemy);
  return enemy;
}

export function makeTower(kind: TowerKind, col: number, row: number): Tower {
  const s = TOWER_STATS[kind];
  const x = col * TILE + TILE / 2;
  const y = row * TILE + TILE / 2;
  const tower: Tower = {
    id: nextTowerId++,
    kind,
    col,
    row,
    x,
    y,
    range: s.range,
    damage: s.damage,
    fireRateMs: s.fireRateMs,
    splashRadius: s.splashRadius,
    pierce: s.pierce,
    slowPct: s.slowPct,
    slowMs: s.slowMs,
    freezeMs: s.freezeMs,
    empMs: s.empMs,
    critChance: s.critChance,
    lastFireAt: 0,
    cost: s.cost,
    totalInvested: s.cost,
    upgradeLeft: 0,
    upgradeRight: 0,
    pathLocked: null,
    targetingMode: 'first',
    beamActiveUntil: 0,
    beamTargetId: null,
    rotation: 0
  };
  entities.towers.push(tower);
  return tower;
}

export function spawnProjectile(opts: {
  kind: ProjectileKind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  damage: number;
  color: string;
  splashRadius?: number;
  pierce?: number;
  targetId?: number | null;
  ttlMs?: number;
  statusApply?: ProjectileStatusApply;
  turnRate?: number;
}): Projectile {
  const p: Projectile = {
    id: nextProjectileId++,
    kind: opts.kind,
    x: opts.x,
    y: opts.y,
    vx: opts.vx,
    vy: opts.vy,
    speed: opts.speed,
    damage: opts.damage,
    color: opts.color,
    splashRadius: opts.splashRadius,
    pierce: opts.pierce,
    piercedIds: new Set<number>(),
    targetId: opts.targetId ?? null,
    ttlMs: opts.ttlMs ?? 3000,
    statusApply: opts.statusApply,
    alive: true,
    turnRate: opts.turnRate,
    trail: []
  };
  entities.projectiles.push(p);
  return p;
}

export function spawnFloater(x: number, y: number, text: string, color: string) {
  entities.floaters.push({
    id: nextFloaterId++,
    x,
    y,
    vy: -40,
    text,
    color,
    ttlMs: 700,
    maxTtlMs: 700
  });
}

export function spawnExplosion(x: number, y: number, radius: number, color: string) {
  entities.explosions.push({
    id: nextExplosionId++,
    x,
    y,
    radius: 4,
    maxRadius: radius,
    ttlMs: 260,
    maxTtlMs: 260,
    color
  });
}

export function getEnemyById(id: number): Enemy | undefined {
  return entities.enemies.find((e) => e.id === id && e.alive);
}

export function getTowerAt(col: number, row: number): Tower | undefined {
  return entities.towers.find((t) => t.col === col && t.row === row);
}

// compute screen position of an enemy (wrapper for renderer)
export function enemyPosition(e: Enemy): { x: number; y: number } {
  const p = positionAtDistance(e.pathProgress);
  return { x: p.x, y: p.y };
}
