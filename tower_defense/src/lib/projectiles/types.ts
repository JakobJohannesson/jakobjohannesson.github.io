export type ProjectileKind = 'bolt' | 'missile' | 'slug' | 'pulse';

export interface ProjectileStatusApply {
  slowPct?: number;
  slowMs?: number;
  freezeMs?: number;
  empMs?: number;
}

export interface Projectile {
  id: number;
  kind: ProjectileKind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  damage: number;
  splashRadius?: number;
  pierce?: number;
  piercedIds: Set<number>;
  targetId: number | null;
  ttlMs: number;
  statusApply?: ProjectileStatusApply;
  color: string;
  alive: boolean;
  // missile seeking
  speed: number;
  turnRate?: number;
  // visual trail
  trail: Array<{ x: number; y: number; t: number }>;
}
