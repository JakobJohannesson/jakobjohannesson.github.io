import type { Tower, TowerKind } from './types';

export type Path = 'L' | 'R';

export interface UpgradeNode {
  tier: 1 | 2 | 3;
  cost: number;
  label: string;
  apply: (t: Tower) => void;
}

export const TIER_COSTS = [0, 120, 260, 550];

function setIfHas(target: Tower, key: keyof Tower, value: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (target as any)[key] = value;
}

type UpgradePath = {
  label: string;
  nodes: [UpgradeNode, UpgradeNode, UpgradeNode];
};

type KindUpgrades = {
  L: UpgradePath;
  R: UpgradePath;
};

export const UPGRADES: Record<TowerKind, KindUpgrades> = {
  laser: {
    L: {
      label: 'FOCUS',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'PULSE',
          apply: (t) => {
            t.damage = 18;
            t.fireRateMs = 175;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'OVERCLOCK',
          apply: (t) => {
            t.damage = 26;
            t.fireRateMs = 150;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'DEATH RAY',
          apply: (t) => {
            t.damage = 40;
            t.fireRateMs = 120;
          }
        }
      ]
    },
    R: {
      label: 'SCOPE',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'EXTEND',
          apply: (t) => {
            t.range = 150;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'PRECISION',
          apply: (t) => {
            t.range = 180;
            t.critChance = 0.1;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'ORBITAL',
          apply: (t) => {
            t.range = 220;
            t.critChance = 0.25;
          }
        }
      ]
    }
  },
  plasma: {
    L: {
      label: 'CORE',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'IGNITE',
          apply: (t) => {
            t.damage = 34;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'SOLAR',
          apply: (t) => {
            t.damage = 52;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'SUPERNOVA',
          apply: (t) => {
            t.damage = 85;
          }
        }
      ]
    },
    R: {
      label: 'BLOOM',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'SPREAD',
          apply: (t) => {
            t.splashRadius = 65;
            t.fireRateMs = 850;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'FLARE',
          apply: (t) => {
            t.splashRadius = 90;
            t.fireRateMs = 800;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'INFERNO',
          apply: (t) => {
            t.splashRadius = 130;
            t.fireRateMs = 720;
          }
        }
      ]
    }
  },
  missile: {
    L: {
      label: 'WARHEAD',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'HE',
          apply: (t) => {
            t.damage = 150;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'PLASMA-TIP',
          apply: (t) => {
            t.damage = 230;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'MIRV',
          apply: (t) => {
            t.damage = 380;
          }
        }
      ]
    },
    R: {
      label: 'GUIDANCE',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'LOCK',
          apply: (t) => {
            t.splashRadius = 60;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'SEEK',
          apply: (t) => {
            t.splashRadius = 100;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'SWARM',
          apply: (t) => {
            t.splashRadius = 160;
          }
        }
      ]
    }
  },
  emp: {
    L: {
      label: 'SURGE',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'PULSE',
          apply: (t) => {
            t.empMs = 3500;
            t.slowPct = 0.5;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'OVERLOAD',
          apply: (t) => {
            t.empMs = 5000;
            t.slowPct = 0.6;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'BLACKOUT',
          apply: (t) => {
            t.empMs = 8000;
            t.slowPct = 0.75;
          }
        }
      ]
    },
    R: {
      label: 'FIELD',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'WAVE',
          apply: (t) => {
            t.splashRadius = 45;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'SHOCK',
          apply: (t) => {
            t.splashRadius = 80;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'STORM',
          apply: (t) => {
            t.splashRadius = 130;
          }
        }
      ]
    }
  },
  cryo: {
    L: {
      label: 'FREEZE',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'CHILL',
          apply: (t) => {
            t.freezeMs = 800;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'FROST',
          apply: (t) => {
            t.freezeMs = 1300;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'ICE AGE',
          apply: (t) => {
            t.freezeMs = 2000;
          }
        }
      ]
    },
    R: {
      label: 'SNOW',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'FLURRY',
          apply: (t) => {
            t.range = 130;
            t.slowPct = 0.45;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'BLIZZARD',
          apply: (t) => {
            t.range = 150;
            t.slowPct = 0.6;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'ABSOLUTE ZERO',
          apply: (t) => {
            t.range = 175;
            t.slowPct = 0.8;
          }
        }
      ]
    }
  },
  railgun: {
    L: {
      label: 'SLUG',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'AP',
          apply: (t) => {
            t.damage = 160;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'DU',
          apply: (t) => {
            t.damage = 260;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'ANTIMATTER',
          apply: (t) => {
            t.damage = 440;
          }
        }
      ]
    },
    R: {
      label: 'RAIL',
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: 'PENETRATOR',
          apply: (t) => {
            t.pierce = 4;
            t.range = 300;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: 'LANCE',
          apply: (t) => {
            t.pierce = 6;
            t.range = 340;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: 'VOID RAIL',
          apply: (t) => {
            t.pierce = 10;
            t.range = 400;
          }
        }
      ]
    }
  }
};

export function canUpgrade(t: Tower, path: Path): boolean {
  if (t.pathLocked && t.pathLocked !== path) return false;
  const current = path === 'L' ? t.upgradeLeft : t.upgradeRight;
  return current < 3;
}

export function upgradeCostNext(t: Tower, path: Path): number {
  const cur = path === 'L' ? t.upgradeLeft : t.upgradeRight;
  const tier = (cur + 1) as 1 | 2 | 3;
  const node = UPGRADES[t.kind][path].nodes[tier - 1];
  return node.cost;
}

export function applyUpgrade(t: Tower, path: Path): boolean {
  if (!canUpgrade(t, path)) return false;
  const cur = path === 'L' ? t.upgradeLeft : t.upgradeRight;
  const tier = (cur + 1) as 1 | 2 | 3;
  const node = UPGRADES[t.kind][path].nodes[tier - 1];
  node.apply(t);
  if (path === 'L') t.upgradeLeft = tier;
  else t.upgradeRight = tier;
  if (!t.pathLocked) t.pathLocked = path;
  t.totalInvested += node.cost;
  return true;
}

// noop reference
void setIfHas;
