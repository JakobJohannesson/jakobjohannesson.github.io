export type TowerKind = 'laser' | 'plasma' | 'missile' | 'emp' | 'cryo' | 'railgun';

export type TargetingMode = 'first' | 'last' | 'strongest' | 'closest';

export interface Tower {
  id: number;
  kind: TowerKind;
  col: number;
  row: number;
  x: number;
  y: number;
  range: number;
  damage: number;
  fireRateMs: number;
  splashRadius?: number;
  pierce?: number;
  slowPct?: number;
  slowMs?: number;
  freezeMs?: number;
  empMs?: number;
  critChance?: number;
  lastFireAt: number;
  cost: number;
  totalInvested: number;
  upgradeLeft: number; // 0..3
  upgradeRight: number; // 0..3
  pathLocked: null | 'L' | 'R';
  targetingMode: TargetingMode;
  // laser visuals
  beamActiveUntil: number;
  beamTargetId: number | null;
  rotation: number;
}
