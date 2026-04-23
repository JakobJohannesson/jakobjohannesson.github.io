import { CANVAS_H, CANVAS_W, COLS, NEON, ROWS, TILE } from '../constants';
import { LAYER_COLORS, ENEMY_STATS } from '../enemies/definitions';
import type { Enemy } from '../enemies/types';
import { PATH_TILES, WAYPOINTS } from '../paths/track01';
import type { Projectile } from '../projectiles/types';
import { TOWER_STATS } from '../towers/definitions';
import type { Tower } from '../towers/types';
import { entities } from './entities.svelte';
import { gameState } from './state.svelte';

let bgCanvas: HTMLCanvasElement | null = null;

export function initBackground() {
  const c = document.createElement('canvas');
  c.width = CANVAS_W;
  c.height = CANVAS_H;
  const g = c.getContext('2d');
  if (!g) return;

  // Deep space gradient
  const grad = g.createLinearGradient(0, 0, 0, CANVAS_H);
  grad.addColorStop(0, '#0a0220');
  grad.addColorStop(0.5, '#1a0938');
  grad.addColorStop(1, '#05010f');
  g.fillStyle = grad;
  g.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // Starfield
  for (let i = 0; i < 110; i++) {
    const x = Math.random() * CANVAS_W;
    const y = Math.random() * CANVAS_H * 0.9;
    const r = Math.random() * 1.2 + 0.2;
    const a = Math.random() * 0.6 + 0.3;
    g.fillStyle = 'rgba(255,255,255,' + a.toFixed(2) + ')';
    g.fillRect(x, y, r, r);
  }

  // Horizon glow (synthwave sun)
  g.save();
  g.globalCompositeOperation = 'lighter';
  const hgrad = g.createRadialGradient(
    CANVAS_W / 2,
    CANVAS_H * 0.75,
    20,
    CANVAS_W / 2,
    CANVAS_H * 0.75,
    CANVAS_W * 0.55
  );
  hgrad.addColorStop(0, 'rgba(255, 43, 214, 0.25)');
  hgrad.addColorStop(0.5, 'rgba(199, 36, 255, 0.1)');
  hgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  g.fillStyle = hgrad;
  g.fillRect(0, 0, CANVAS_W, CANVAS_H);
  g.restore();

  // Grid horizon — receding lines
  g.save();
  g.strokeStyle = NEON.gridLine;
  g.lineWidth = 1;
  // vertical grid
  for (let c = 0; c <= COLS; c++) {
    g.beginPath();
    g.moveTo(c * TILE + 0.5, 0);
    g.lineTo(c * TILE + 0.5, CANVAS_H);
    g.stroke();
  }
  for (let r = 0; r <= ROWS; r++) {
    g.beginPath();
    g.moveTo(0, r * TILE + 0.5);
    g.lineTo(CANVAS_W, r * TILE + 0.5);
    g.stroke();
  }
  g.restore();

  // Path glow & track
  drawPathOnto(g);

  bgCanvas = c;
}

function drawPathOnto(g: CanvasRenderingContext2D) {
  // outer glow
  g.save();
  g.strokeStyle = NEON.magenta;
  g.shadowColor = NEON.magenta;
  g.shadowBlur = 18;
  g.lineWidth = 26;
  g.lineJoin = 'round';
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(WAYPOINTS[0].x, WAYPOINTS[0].y);
  for (let i = 1; i < WAYPOINTS.length; i++) g.lineTo(WAYPOINTS[i].x, WAYPOINTS[i].y);
  g.stroke();
  g.restore();

  // inner track
  g.save();
  g.strokeStyle = '#2a055e';
  g.lineWidth = 18;
  g.lineJoin = 'round';
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(WAYPOINTS[0].x, WAYPOINTS[0].y);
  for (let i = 1; i < WAYPOINTS.length; i++) g.lineTo(WAYPOINTS[i].x, WAYPOINTS[i].y);
  g.stroke();

  // dashed cyan line for speed vibe
  g.strokeStyle = 'rgba(0, 240, 255, 0.55)';
  g.lineWidth = 2;
  g.setLineDash([8, 12]);
  g.beginPath();
  g.moveTo(WAYPOINTS[0].x, WAYPOINTS[0].y);
  for (let i = 1; i < WAYPOINTS.length; i++) g.lineTo(WAYPOINTS[i].x, WAYPOINTS[i].y);
  g.stroke();
  g.restore();
}

export function render(ctx: CanvasRenderingContext2D, timeMs: number) {
  if (!bgCanvas) initBackground();
  // background
  if (bgCanvas) ctx.drawImage(bgCanvas, 0, 0);

  // placement highlight
  renderHoverHighlight(ctx);

  // towers & ranges
  renderTowers(ctx, timeMs);

  // enemies
  renderEnemies(ctx, timeMs);

  // projectiles
  renderProjectiles(ctx, timeMs);

  // explosions
  renderExplosions(ctx);

  // floaters
  renderFloaters(ctx);

  // HUD overlays drawn by Svelte, not here
}

function renderHoverHighlight(ctx: CanvasRenderingContext2D) {
  if (gameState.phase !== 'placing') return;
  if (gameState.hoverCol < 0 || gameState.hoverRow < 0) return;
  const kind = gameState.selectedKind;
  if (!kind) return;
  const stats = TOWER_STATS[kind];
  const x = gameState.hoverCol * TILE;
  const y = gameState.hoverRow * TILE;
  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = gameState.hoverValid ? 'rgba(0, 240, 255, 0.22)' : 'rgba(255, 51, 85, 0.25)';
  ctx.fillRect(x, y, TILE, TILE);
  ctx.strokeStyle = gameState.hoverValid ? NEON.cyan : NEON.red;
  ctx.lineWidth = 2;
  ctx.strokeRect(x + 1, y + 1, TILE - 2, TILE - 2);

  // range ring
  if (gameState.hoverValid) {
    ctx.shadowColor = stats.color;
    ctx.shadowBlur = 14;
    ctx.strokeStyle = stats.color;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(x + TILE / 2, y + TILE / 2, stats.range, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.restore();
}

function renderTowers(ctx: CanvasRenderingContext2D, timeMs: number) {
  const selectedId = gameState.selectedTowerId;
  for (const t of entities.towers) {
    // selection range
    if (t.id === selectedId) {
      ctx.save();
      ctx.strokeStyle = TOWER_STATS[t.kind].color;
      ctx.shadowColor = TOWER_STATS[t.kind].color;
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.range, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    drawTower(ctx, t, timeMs);
  }

  // laser beams second pass so they glow above everything
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const t of entities.towers) {
    if (t.kind !== 'laser') continue;
    if (!t.beamTargetId || timeMs > t.beamActiveUntil) continue;
    const target = entities.enemies.find((e) => e.id === t.beamTargetId && e.alive);
    if (!target) continue;
    ctx.strokeStyle = '#ff2bd6';
    ctx.shadowColor = '#ff2bd6';
    ctx.shadowBlur = 16;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(t.x, t.y);
    ctx.lineTo(target.x, target.y);
    ctx.stroke();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(t.x, t.y);
    ctx.lineTo(target.x, target.y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawTower(ctx: CanvasRenderingContext2D, t: Tower, timeMs: number) {
  const s = TOWER_STATS[t.kind];
  ctx.save();
  ctx.translate(t.x, t.y);

  // base plate
  ctx.fillStyle = '#140331';
  ctx.strokeStyle = s.color;
  ctx.shadowColor = s.color;
  ctx.shadowBlur = 12;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // upgrade pips (3 per side)
  ctx.shadowBlur = 0;
  for (let i = 0; i < 3; i++) {
    const fillL = i < t.upgradeLeft;
    const fillR = i < t.upgradeRight;
    ctx.fillStyle = fillL ? s.color : 'rgba(255,255,255,0.18)';
    ctx.fillRect(-12 + i * 2.5, -18, 2, 2);
    ctx.fillStyle = fillR ? s.accent : 'rgba(255,255,255,0.18)';
    ctx.fillRect(5 + i * 2.5, -18, 2, 2);
  }

  // turret rotating
  ctx.rotate(t.rotation);
  drawTurret(ctx, t, s.color, s.accent, timeMs);

  ctx.restore();
}

function drawTurret(
  ctx: CanvasRenderingContext2D,
  t: Tower,
  color: string,
  accent: string,
  timeMs: number
) {
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  switch (t.kind) {
    case 'laser':
      ctx.fillStyle = color;
      ctx.fillRect(-2, -10, 16, 5);
      ctx.fillStyle = accent;
      ctx.fillRect(-4, -3, 8, 6);
      break;
    case 'plasma':
      ctx.fillStyle = accent;
      ctx.fillRect(-3, -10, 10, 4);
      ctx.beginPath();
      ctx.arc(8, 0, 4 + Math.sin(timeMs / 120) * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      break;
    case 'missile':
      ctx.fillStyle = color;
      ctx.fillRect(-5, -6, 14, 4);
      ctx.fillRect(-5, 2, 14, 4);
      ctx.fillStyle = accent;
      ctx.fillRect(9, -3, 3, 6);
      break;
    case 'emp':
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, 6 + i * 3 + Math.sin(timeMs / 200 + i) * 1, -0.8, 0.8);
        ctx.stroke();
      }
      ctx.fillStyle = accent;
      ctx.fillRect(-2, -2, 4, 4);
      break;
    case 'cryo':
      ctx.fillStyle = accent;
      ctx.fillRect(-3, -8, 8, 16);
      ctx.fillStyle = color;
      ctx.fillRect(5, -3, 6, 6);
      break;
    case 'railgun':
      ctx.fillStyle = color;
      ctx.fillRect(-4, -2, 20, 4);
      ctx.fillStyle = accent;
      ctx.fillRect(-6, -5, 4, 10);
      ctx.fillRect(14, -3, 3, 6);
      break;
  }
  ctx.shadowBlur = 0;
}

function renderEnemies(ctx: CanvasRenderingContext2D, timeMs: number) {
  for (const e of entities.enemies) {
    if (!e.alive) continue;
    if (e.cloaked && e.empUntil <= timeMs) {
      // invisible — draw faint shimmer to hint but not clearly
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(e.x, e.y, 4 + Math.sin(timeMs / 100 + e.id) * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      continue;
    }
    drawEnemy(ctx, e, timeMs);
  }
}

function drawEnemy(ctx: CanvasRenderingContext2D, e: Enemy, timeMs: number) {
  const stats = ENEMY_STATS[e.kind];
  const r = stats.radius;
  ctx.save();
  ctx.translate(e.x, e.y);
  ctx.rotate(e.rotation);

  // Shield layers (Bloons-like popping)
  const colors = LAYER_COLORS[e.kind];
  const pulse = 0.5 + 0.5 * Math.sin(timeMs / 140 + e.id);
  for (let i = e.layers; i > 0; i--) {
    const colorIdx = Math.min(e.layers - 1, colors.length - 1);
    const color = colors[colorIdx];
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.lineWidth = i === e.layers ? 2 : 1;
    ctx.globalAlpha = i === e.layers ? 1 : 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, r + (i - 1) * 3 + pulse, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;

  // Ship body
  const bodyColor = colors[Math.min(e.layers - 1, colors.length - 1)];
  ctx.fillStyle = '#0a0220';
  ctx.strokeStyle = bodyColor;
  ctx.lineWidth = 2;
  ctx.shadowColor = bodyColor;
  ctx.shadowBlur = 8;

  switch (e.kind) {
    case 'scout':
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(-r * 0.7, -r * 0.7);
      ctx.lineTo(-r * 0.4, 0);
      ctx.lineTo(-r * 0.7, r * 0.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case 'fighter':
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(-r * 0.6, -r * 0.8);
      ctx.lineTo(-r, 0);
      ctx.lineTo(-r * 0.6, r * 0.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = bodyColor;
      ctx.fillRect(-2, -2, 4, 4);
      break;
    case 'cruiser':
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(r * 0.3, -r * 0.9);
      ctx.lineTo(-r, -r * 0.6);
      ctx.lineTo(-r * 0.8, 0);
      ctx.lineTo(-r, r * 0.6);
      ctx.lineTo(r * 0.3, r * 0.9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case 'stealth':
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(0, -r * 0.6);
      ctx.lineTo(-r * 0.9, -r * 0.3);
      ctx.lineTo(-r * 0.6, 0);
      ctx.lineTo(-r * 0.9, r * 0.3);
      ctx.lineTo(0, r * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      break;
    case 'boss':
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(r * 0.5, -r * 0.9);
      ctx.lineTo(-r * 0.3, -r);
      ctx.lineTo(-r, -r * 0.5);
      ctx.lineTo(-r * 0.7, 0);
      ctx.lineTo(-r, r * 0.5);
      ctx.lineTo(-r * 0.3, r);
      ctx.lineTo(r * 0.5, r * 0.9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#ff3355';
      ctx.fillRect(-3, -3, 6, 6);
      break;
  }
  ctx.shadowBlur = 0;

  // Status icons
  ctx.rotate(-e.rotation);
  if (e.freezeUntil > timeMs) {
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
      const a = ((Math.PI * 2) / 3) * i;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * (r + 6), Math.sin(a) * (r + 6));
      ctx.stroke();
    }
  }
  if (e.empUntil > timeMs) {
    ctx.strokeStyle = '#c724ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, r + 6 + Math.sin(timeMs / 60) * 1.2, 0, Math.PI * 2);
    ctx.stroke();
  }

  // HP bar (for multi-hp layer)
  if (e.hp < e.maxHp) {
    const w = r * 2;
    const h = 3;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(-w / 2, -r - 9, w, h);
    ctx.fillStyle = '#39ff14';
    ctx.fillRect(-w / 2, -r - 9, (w * Math.max(0, e.hp)) / e.maxHp, h);
  }

  ctx.restore();
}

function renderProjectiles(ctx: CanvasRenderingContext2D, timeMs: number) {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const p of entities.projectiles) {
    if (!p.alive) continue;
    // trail
    for (let i = 0; i < p.trail.length; i++) {
      const pt = p.trail[i];
      const alpha = i / p.trail.length;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha * 0.5;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, (p.kind === 'slug' ? 1.2 : 2.5) * alpha, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.shadowColor = p.color;
    ctx.shadowBlur = 14;
    ctx.fillStyle = p.color;
    switch (p.kind) {
      case 'bolt':
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'missile':
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.atan2(p.vy, p.vx));
        ctx.fillRect(-5, -2, 10, 4);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(3, -1, 3, 2);
        ctx.restore();
        break;
      case 'slug':
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.atan2(p.vy, p.vx));
        ctx.fillRect(-8, -1, 16, 2);
        ctx.restore();
        break;
      case 'pulse':
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6 + Math.sin(timeMs / 40 + p.id) * 1.5, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
  }
  ctx.shadowBlur = 0;
  ctx.restore();
}

function renderExplosions(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const now = performance.now();
  void now;
  for (const ex of entities.explosions) {
    const t = 1 - ex.ttlMs / ex.maxTtlMs;
    const r = ex.radius + (ex.maxRadius - ex.radius) * t;
    ctx.strokeStyle = ex.color;
    ctx.shadowColor = ex.color;
    ctx.shadowBlur = 20;
    ctx.lineWidth = 3 * (1 - t);
    ctx.globalAlpha = 1 - t;
    ctx.beginPath();
    ctx.arc(ex.x, ex.y, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
  ctx.restore();
}

function renderFloaters(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.font = '10px "Press Start 2P", monospace';
  ctx.textAlign = 'center';
  for (const f of entities.floaters) {
    const a = f.ttlMs / f.maxTtlMs;
    ctx.globalAlpha = a;
    ctx.fillStyle = f.color;
    ctx.shadowColor = f.color;
    ctx.shadowBlur = 6;
    ctx.fillText(f.text, f.x, f.y);
  }
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
  ctx.restore();
}

// ensure referenced
void PATH_TILES;
