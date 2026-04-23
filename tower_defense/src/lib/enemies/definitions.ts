import type { EnemyKind } from './types';

export interface EnemyStats {
  layers: number;
  hpPerLayer: number;
  baseSpeed: number; // px/s
  reward: number;
  damageOnLeak: number;
  cloaked: boolean;
  radius: number;
}

export const ENEMY_STATS: Record<EnemyKind, EnemyStats> = {
  scout: {
    layers: 1,
    hpPerLayer: 1,
    baseSpeed: 85,
    reward: 8,
    damageOnLeak: 1,
    cloaked: false,
    radius: 10
  },
  fighter: {
    layers: 2,
    hpPerLayer: 2,
    baseSpeed: 65,
    reward: 15,
    damageOnLeak: 2,
    cloaked: false,
    radius: 12
  },
  cruiser: {
    layers: 3,
    hpPerLayer: 4,
    baseSpeed: 45,
    reward: 35,
    damageOnLeak: 4,
    cloaked: false,
    radius: 14
  },
  stealth: {
    layers: 2,
    hpPerLayer: 2,
    baseSpeed: 75,
    reward: 25,
    damageOnLeak: 3,
    cloaked: true,
    radius: 11
  },
  boss: {
    layers: 12,
    hpPerLayer: 8,
    baseSpeed: 35,
    reward: 400,
    damageOnLeak: 20,
    cloaked: false,
    radius: 22
  }
};

// Per-layer neon color from outermost to innermost (index 0 = current outer when layers=1).
// We index by (remainingLayers - 1) so a 3-layer cruiser cycles: 0-> magenta, 1->pink, 2->yellow.
export const LAYER_COLORS: Record<EnemyKind, string[]> = {
  scout: ['#00f0ff'], // cyan
  fighter: ['#39ff14', '#f9f002'], // green -> yellow
  cruiser: ['#ff2bd6', '#c724ff', '#f9f002'], // pink -> magenta -> yellow
  stealth: ['#c724ff', '#00f0ff'], // magenta -> cyan
  boss: [
    '#ff3355',
    '#ff2bd6',
    '#c724ff',
    '#00f0ff',
    '#39ff14',
    '#f9f002',
    '#ff8a00',
    '#ff3355',
    '#ff2bd6',
    '#c724ff',
    '#00f0ff',
    '#39ff14'
  ]
};
