import { NEON } from '../constants';
import type { TowerKind } from './types';

export interface TowerBaseStats {
  cost: number;
  damage: number;
  fireRateMs: number;
  range: number;
  splashRadius?: number;
  pierce?: number;
  slowPct?: number;
  slowMs?: number;
  freezeMs?: number;
  empMs?: number;
  critChance?: number;
  color: string;
  accent: string;
  hotkey: string;
  label: string;
  blurb: string;
}

export const TOWER_STATS: Record<TowerKind, TowerBaseStats> = {
  laser: {
    cost: 180,
    damage: 12,
    fireRateMs: 200,
    range: 120,
    color: NEON.pink,
    accent: NEON.cyan,
    hotkey: '1',
    label: 'LASER',
    blurb: 'Rapid beam. Fast fire.'
  },
  plasma: {
    cost: 350,
    damage: 22,
    fireRateMs: 900,
    range: 140,
    splashRadius: 45,
    color: NEON.magenta,
    accent: NEON.pink,
    hotkey: '2',
    label: 'PLASMA',
    blurb: 'AOE ball. Crowd wipe.'
  },
  missile: {
    cost: 450,
    damage: 95,
    fireRateMs: 1600,
    range: 200,
    splashRadius: 30,
    color: NEON.yellow,
    accent: NEON.red,
    hotkey: '3',
    label: 'MISSILE',
    blurb: 'Seeker. Big boom.'
  },
  emp: {
    cost: 300,
    damage: 5,
    fireRateMs: 1300,
    range: 140,
    slowPct: 0.4,
    slowMs: 2000,
    empMs: 2500,
    color: NEON.cyan,
    accent: NEON.green,
    hotkey: '4',
    label: 'EMP',
    blurb: 'Stuns. Reveals stealth.'
  },
  cryo: {
    cost: 275,
    damage: 4,
    fireRateMs: 1500,
    range: 110,
    freezeMs: 500,
    slowPct: 0.3,
    slowMs: 1500,
    color: NEON.green,
    accent: NEON.cyan,
    hotkey: '5',
    label: 'CRYO',
    blurb: 'Slows & freezes.'
  },
  railgun: {
    cost: 600,
    damage: 90,
    fireRateMs: 2200,
    range: 260,
    pierce: 2,
    color: NEON.yellow,
    accent: NEON.pink,
    hotkey: '6',
    label: 'RAILGUN',
    blurb: 'Pierces. Long range.'
  }
};

export const TOWER_KINDS: TowerKind[] = [
  'laser',
  'plasma',
  'missile',
  'emp',
  'cryo',
  'railgun'
];

export function baseCostOf(kind: TowerKind): number {
  return TOWER_STATS[kind].cost;
}
