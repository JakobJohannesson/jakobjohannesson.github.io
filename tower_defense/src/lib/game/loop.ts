import { STEP_MS, TOTAL_WAVES } from '../constants';
import { moveEnemies, updateStatuses } from '../enemies/behavior';
import {
  clearScheduler,
  remainingQueued,
  spawnFromWaveScheduler,
  startWave,
  waveStillProducing
} from '../enemies/waves';
import { updateProjectiles } from '../projectiles/behavior';
import { updateTowers } from '../towers/behavior';
import { entities } from './entities.svelte';
import { render } from './renderer';
import { gameState } from './state.svelte';

let rafId = 0;
let last = 0;
let acc = 0;
let ctx: CanvasRenderingContext2D | null = null;
let running = false;

export function attachLoop(canvas: HTMLCanvasElement) {
  ctx = canvas.getContext('2d');
  if (!ctx) return;
  // disable smoothing for crisp pixel feel
  ctx.imageSmoothingEnabled = false;
}

export function startLoop() {
  if (running) return;
  running = true;
  last = performance.now();
  acc = 0;
  rafId = requestAnimationFrame(frame);
}

export function stopLoop() {
  running = false;
  cancelAnimationFrame(rafId);
}

function frame(now: number) {
  if (!ctx) {
    rafId = requestAnimationFrame(frame);
    return;
  }
  const raw = Math.min(now - last, 100);
  last = now;
  acc += raw * gameState.speedMultiplier;
  let ticks = 0;
  while (acc >= STEP_MS && ticks < 30) {
    tick(STEP_MS / 1000);
    acc -= STEP_MS;
    ticks++;
  }
  render(ctx, gameState.timeMs);
  rafId = requestAnimationFrame(frame);
}

function tick(dtSec: number) {
  const dtMs = dtSec * 1000;
  gameState.timeMs += dtMs;
  gameState.tickCount++;
  const now = gameState.timeMs;

  updateStatuses(now);
  moveEnemies(dtSec);

  if (gameState.phase === 'playing') {
    spawnFromWaveScheduler(now);
  }

  updateTowers(dtMs, now);
  updateProjectiles(dtSec, now);

  // decay floaters + explosions
  for (const f of entities.floaters) {
    f.ttlMs -= dtMs;
    f.y += f.vy * dtSec;
  }
  entities.floaters.splice(
    0,
    entities.floaters.length,
    ...entities.floaters.filter((f) => f.ttlMs > 0)
  );
  for (const ex of entities.explosions) ex.ttlMs -= dtMs;
  entities.explosions.splice(
    0,
    entities.explosions.length,
    ...entities.explosions.filter((e) => e.ttlMs > 0)
  );

  // sweep dead projectiles & enemies
  entities.projectiles.splice(
    0,
    entities.projectiles.length,
    ...entities.projectiles.filter((p) => p.alive)
  );
  entities.enemies.splice(0, entities.enemies.length, ...entities.enemies.filter((e) => e.alive));

  checkEndStates();
}

function checkEndStates() {
  if (gameState.lives <= 0 && gameState.phase !== 'gameover') {
    gameState.phase = 'gameover';
    gameState.waveRunning = false;
    clearScheduler();
    return;
  }

  if (gameState.phase !== 'playing') return;
  if (waveStillProducing() || remainingQueued() > 0) return;
  if (entities.enemies.length > 0) return;

  // wave complete
  const waveNumber = gameState.waveIndex + 1;
  const bonus = 50 + 10 * waveNumber;
  gameState.money += bonus;

  clearScheduler();
  if (gameState.waveIndex + 1 >= TOTAL_WAVES) {
    gameState.phase = 'victory';
    gameState.waveRunning = false;
    return;
  }
  gameState.waveIndex += 1;
  gameState.phase = 'between-waves';
  gameState.waveRunning = false;
}

export function beginWave() {
  if (gameState.phase === 'gameover' || gameState.phase === 'victory') return;
  if (gameState.waveRunning) return;
  startWave(gameState.waveIndex, gameState.timeMs);
  gameState.phase = 'playing';
  gameState.waveRunning = true;
}
