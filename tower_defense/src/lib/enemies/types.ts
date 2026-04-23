export type EnemyKind = 'scout' | 'fighter' | 'cruiser' | 'stealth' | 'boss';

export interface Enemy {
  id: number;
  kind: EnemyKind;
  x: number;
  y: number;
  pathIndex: number;
  pathProgress: number; // global distance along path in pixels
  speed: number;
  baseSpeed: number;
  layers: number;
  hpPerLayer: number;
  hp: number;
  maxHp: number;
  reward: number;
  damageOnLeak: number;
  cloaked: boolean;
  slowUntil: number; // timeMs
  freezeUntil: number;
  empUntil: number;
  alive: boolean;
  // visual
  rotation: number;
  spawnTimeMs: number;
}
