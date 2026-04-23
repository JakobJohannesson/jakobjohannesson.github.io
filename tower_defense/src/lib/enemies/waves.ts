import { TOTAL_WAVES } from '../constants';
import { spawnEnemy } from '../game/entities.svelte';
import type { EnemyKind } from './types';

export interface WaveEntry {
  kind: EnemyKind;
  count: number;
  spacingMs: number;
  delayMs?: number; // delay before this group starts (after previous group completes)
}

export interface Wave {
  groups: WaveEntry[];
  hpMult: number;
  speedMult: number;
}

// Hand-crafted 20 waves
function buildWaves(): Wave[] {
  const waves: Wave[] = [];

  waves.push({
    groups: [{ kind: 'scout', count: 8, spacingMs: 700 }],
    hpMult: 1,
    speedMult: 1
  });

  waves.push({
    groups: [{ kind: 'scout', count: 14, spacingMs: 600 }],
    hpMult: 1,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 10, spacingMs: 550 },
      { kind: 'fighter', count: 4, spacingMs: 800, delayMs: 900 }
    ],
    hpMult: 1,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 12, spacingMs: 500 },
      { kind: 'fighter', count: 8, spacingMs: 700, delayMs: 700 }
    ],
    hpMult: 1,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 14, spacingMs: 600 },
      { kind: 'scout', count: 10, spacingMs: 350, delayMs: 1200 }
    ],
    hpMult: 1.05,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 8, spacingMs: 400 },
      { kind: 'fighter', count: 8, spacingMs: 500, delayMs: 500 },
      { kind: 'cruiser', count: 2, spacingMs: 1200, delayMs: 800 }
    ],
    hpMult: 1.1,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 12, spacingMs: 500 },
      { kind: 'cruiser', count: 4, spacingMs: 1000, delayMs: 600 }
    ],
    hpMult: 1.15,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 20, spacingMs: 300 },
      { kind: 'cruiser', count: 5, spacingMs: 900, delayMs: 900 }
    ],
    hpMult: 1.2,
    speedMult: 1
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 18, spacingMs: 450 },
      { kind: 'cruiser', count: 6, spacingMs: 800, delayMs: 700 }
    ],
    hpMult: 1.25,
    speedMult: 1.05
  });

  // Wave 10 — mini boss
  waves.push({
    groups: [
      { kind: 'scout', count: 12, spacingMs: 350 },
      { kind: 'boss', count: 1, spacingMs: 500, delayMs: 1500 }
    ],
    hpMult: 1.3,
    speedMult: 1.05
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 10, spacingMs: 500 },
      { kind: 'stealth', count: 4, spacingMs: 700, delayMs: 600 },
      { kind: 'cruiser', count: 4, spacingMs: 900, delayMs: 700 }
    ],
    hpMult: 1.35,
    speedMult: 1.05
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 16, spacingMs: 300 },
      { kind: 'stealth', count: 6, spacingMs: 550, delayMs: 700 },
      { kind: 'cruiser', count: 5, spacingMs: 800, delayMs: 800 }
    ],
    hpMult: 1.4,
    speedMult: 1.1
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 14, spacingMs: 400 },
      { kind: 'stealth', count: 8, spacingMs: 500, delayMs: 600 },
      { kind: 'cruiser', count: 6, spacingMs: 750, delayMs: 800 }
    ],
    hpMult: 1.5,
    speedMult: 1.1
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 16, spacingMs: 350 },
      { kind: 'stealth', count: 10, spacingMs: 450, delayMs: 600 },
      { kind: 'cruiser', count: 8, spacingMs: 700, delayMs: 800 }
    ],
    hpMult: 1.6,
    speedMult: 1.1
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 24, spacingMs: 250 },
      { kind: 'fighter', count: 12, spacingMs: 400, delayMs: 600 },
      { kind: 'cruiser', count: 8, spacingMs: 700, delayMs: 800 },
      { kind: 'stealth', count: 8, spacingMs: 500, delayMs: 600 }
    ],
    hpMult: 1.75,
    speedMult: 1.15
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 18, spacingMs: 350 },
      { kind: 'cruiser', count: 10, spacingMs: 650, delayMs: 500 },
      { kind: 'stealth', count: 10, spacingMs: 400, delayMs: 600 }
    ],
    hpMult: 1.9,
    speedMult: 1.15
  });

  waves.push({
    groups: [
      { kind: 'cruiser', count: 14, spacingMs: 550 },
      { kind: 'stealth', count: 12, spacingMs: 400, delayMs: 500 },
      { kind: 'fighter', count: 14, spacingMs: 300, delayMs: 500 }
    ],
    hpMult: 2.0,
    speedMult: 1.2
  });

  waves.push({
    groups: [
      { kind: 'scout', count: 30, spacingMs: 180 },
      { kind: 'cruiser', count: 10, spacingMs: 550, delayMs: 600 },
      { kind: 'stealth', count: 12, spacingMs: 380, delayMs: 600 },
      { kind: 'boss', count: 1, spacingMs: 0, delayMs: 1200 }
    ],
    hpMult: 2.15,
    speedMult: 1.2
  });

  waves.push({
    groups: [
      { kind: 'fighter', count: 22, spacingMs: 280 },
      { kind: 'cruiser', count: 14, spacingMs: 500, delayMs: 500 },
      { kind: 'stealth', count: 16, spacingMs: 350, delayMs: 500 }
    ],
    hpMult: 2.3,
    speedMult: 1.25
  });

  // Wave 20 — finale
  waves.push({
    groups: [
      { kind: 'cruiser', count: 20, spacingMs: 450 },
      { kind: 'stealth', count: 15, spacingMs: 350, delayMs: 400 },
      { kind: 'boss', count: 1, spacingMs: 0, delayMs: 800 },
      { kind: 'boss', count: 1, spacingMs: 0, delayMs: 3000 }
    ],
    hpMult: 2.5,
    speedMult: 1.3
  });

  return waves;
}

export const WAVES: Wave[] = buildWaves();

// Scheduler state for active wave
interface GroupSched {
  kind: import('./types').EnemyKind;
  remaining: number;
  spacingMs: number;
  nextSpawnMs: number; // absolute timeMs
  started: boolean;
  delayMs: number;
}

interface WaveScheduler {
  groups: GroupSched[];
  hpMult: number;
  speedMult: number;
  activeIndex: number;
  lastSpawnMs: number;
}

let scheduler: WaveScheduler | null = null;
let queuedCount = 0;

export function startWave(waveIndex: number, timeMs: number) {
  const w = WAVES[waveIndex];
  if (!w) return;
  const groups: GroupSched[] = w.groups.map((g) => ({
    kind: g.kind,
    remaining: g.count,
    spacingMs: g.spacingMs,
    delayMs: g.delayMs ?? 0,
    nextSpawnMs: 0,
    started: false
  }));
  queuedCount = groups.reduce((s, g) => s + g.remaining, 0);
  scheduler = {
    groups,
    hpMult: w.hpMult,
    speedMult: w.speedMult,
    activeIndex: 0,
    lastSpawnMs: timeMs
  };
}

export function spawnFromWaveScheduler(timeMs: number) {
  if (!scheduler) return;
  // Groups run sequentially: start group i only after group i-1 is fully spawned
  // plus its delayMs.
  while (scheduler.activeIndex < scheduler.groups.length) {
    const g = scheduler.groups[scheduler.activeIndex];
    if (!g.started) {
      // wait for delay relative to last spawn
      if (timeMs < scheduler.lastSpawnMs + g.delayMs) return;
      g.started = true;
      g.nextSpawnMs = timeMs;
    }
    if (g.remaining <= 0) {
      scheduler.activeIndex++;
      continue;
    }
    if (timeMs >= g.nextSpawnMs) {
      spawnEnemy(g.kind, timeMs, scheduler.hpMult, scheduler.speedMult);
      g.remaining--;
      queuedCount--;
      g.nextSpawnMs = timeMs + g.spacingMs;
      scheduler.lastSpawnMs = timeMs;
      if (g.remaining <= 0) {
        scheduler.activeIndex++;
      }
    }
    return; // do at most one spawn per tick
  }
}

export function waveStillProducing(): boolean {
  return scheduler != null && scheduler.activeIndex < scheduler.groups.length;
}

export function remainingQueued(): number {
  return queuedCount;
}

export function clearScheduler() {
  scheduler = null;
  queuedCount = 0;
}

export function totalWaves(): number {
  return TOTAL_WAVES;
}
