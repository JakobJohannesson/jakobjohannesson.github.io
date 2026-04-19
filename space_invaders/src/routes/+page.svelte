<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const W = 800;
  const H = 600;

  // Alien grid
  const COLS = 11;
  const ROWS = 5;
  const ALIEN_W = 36;
  const ALIEN_H = 24;
  const ALIEN_PAD_X = 16;
  const ALIEN_PAD_Y = 14;
  const GRID_LEFT = 60;
  const GRID_TOP = 80;

  // Points per row (top to bottom: hardest = most points)
  const ROW_POINTS = [30, 20, 20, 10, 10];

  // Shapes: two animation frames per alien type (rows 0, 1–2, 3–4)
  const ALIEN_SHAPES: string[][][] = [
    // type 0 — top row (UFO-like)
    [
      ['  XXX  ', ' XXXXX ', 'XX X XX', 'XXXXXXX', ' X   X ', '  X X  '],
      ['  XXX  ', ' XXXXX ', 'XX X XX', 'XXXXXXX', '  X X  ', ' X   X '],
    ],
    // type 1 — middle rows
    [
      [' X   X ', '  X X  ', ' XXXXX ', 'XX   XX', 'XXXXXXX', 'X X X X'],
      [' X   X ', 'X X X X', 'XXXXXXX', 'XX   XX', ' XXXXX ', '  X X  '],
    ],
    // type 2 — bottom rows
    [
      ['   X   ', '  XXX  ', ' XXXXX ', 'XX X XX', 'XXXXXXX', 'X     X'],
      ['   X   ', 'X  X  X', 'XXXXXXX', 'XX X XX', ' XXXXX ', '  X X  '],
    ],
  ];

  const ALIEN_COLORS = ['#ff6b6b', '#ffd93d', '#6bcb77'];

  // Shields
  const SHIELD_COUNT = 4;
  const SHIELD_W = 52;
  const SHIELD_H = 36;
  const SHIELD_BLOCK = 4; // pixels per shield block
  const SHIELD_Y = H - 120;

  type Alien = { row: number; col: number; alive: boolean };
  type Bullet = { x: number; y: number; dy: number };
  type ShieldBlock = { x: number; y: number; hp: number };
  type State = 'idle' | 'playing' | 'paused' | 'dead' | 'won' | 'gameover';

  let canvas: HTMLCanvasElement;
  let animId: number;
  let lastTime = 0;
  let alienTick = 0;  // ms accumulator for alien step
  let alienFrame = 0; // animation frame 0/1
  let shootTick = 0;  // ms accumulator for alien shoot interval

  let state: State = $state('idle');
  let score = $state(0);
  let hiScore = $state(0);
  let lives = $state(3);
  let wave = $state(1);

  let aliens: Alien[] = $state([]);
  let alienDX = $state(1); // direction
  let alienOffX = $state(0);
  let alienOffY = $state(0);
  let alienStepMs = $state(800);

  let playerX = $state(W / 2 - 20);
  const PLAYER_W = 40;
  const PLAYER_H = 20;
  const PLAYER_Y = H - 50;
  const PLAYER_SPEED = 5;

  let bullets: Bullet[] = $state([]);
  let shieldBlocks: ShieldBlock[] = $state([]);

  let ufo: { x: number; active: boolean } = $state({ x: 0, active: false });
  let ufoTick = 0;
  let ufoInterval = 0;

  const keys: Record<string, boolean> = {};
  let canShoot = true;
  let respawnTimer = 0;
  let isRespawning = false;

  // AudioContext for beeps
  let audioCtx: AudioContext | null = null;

  function beep(freq: number, dur: number, vol = 0.15) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    osc.type = 'square';
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
  }

  function buildShields() {
    const blocks: ShieldBlock[] = [];
    const totalW = SHIELD_COUNT * SHIELD_W + (SHIELD_COUNT - 1) * 40;
    const startX = (W - totalW) / 2;
    // Shield pixel pattern (relative, in block units)
    const pattern = [
      '  XXXXXXXXXX  ',
      ' XXXXXXXXXXXX ',
      'XXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXX',
      'XXXX      XXXX',
      'XXX        XXX',
    ];
    for (let s = 0; s < SHIELD_COUNT; s++) {
      const sx = startX + s * (SHIELD_W + 40);
      for (let r = 0; r < pattern.length; r++) {
        for (let c = 0; c < pattern[r].length; c++) {
          if (pattern[r][c] === 'X') {
            blocks.push({ x: sx + c * SHIELD_BLOCK, y: SHIELD_Y + r * SHIELD_BLOCK, hp: 3 });
          }
        }
      }
    }
    return blocks;
  }

  function buildAliens(): Alien[] {
    const a: Alien[] = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        a.push({ row: r, col: c, alive: true });
    return a;
  }

  function alienType(row: number) {
    if (row === 0) return 0;
    if (row <= 2) return 1;
    return 2;
  }

  function alienX(col: number) {
    return GRID_LEFT + alienOffX + col * (ALIEN_W + ALIEN_PAD_X);
  }
  function alienY(row: number) {
    return GRID_TOP + alienOffY + row * (ALIEN_H + ALIEN_PAD_Y);
  }

  function aliveCount() {
    return aliens.filter((a) => a.alive).length;
  }

  function lowestAliveInCol(col: number) {
    const col_aliens = aliens.filter((a) => a.alive && a.col === col);
    if (!col_aliens.length) return null;
    return col_aliens.reduce((prev, cur) => (cur.row > prev.row ? cur : prev));
  }

  function startWave(w: number) {
    wave = w;
    aliens = buildAliens();
    alienOffX = 0;
    alienOffY = 0;
    alienDX = 1;
    alienStepMs = Math.max(150, 800 - (w - 1) * 80);
    alienTick = 0;
    shootTick = 0;
    alienFrame = 0;
    bullets = [];
    ufo = { x: 0, active: false };
    ufoTick = 0;
    ufoInterval = 20000 + Math.random() * 15000;
    if (w === 1) shieldBlocks = buildShields();
  }

  function startGame() {
    score = 0;
    lives = 3;
    playerX = W / 2 - PLAYER_W / 2;
    isRespawning = false;
    canShoot = true;
    startWave(1);
    state = 'playing';
    if (!audioCtx) audioCtx = new AudioContext();
  }

  function playerShoot() {
    if (!canShoot) return;
    const px = playerX + PLAYER_W / 2 - 2;
    bullets = [...bullets, { x: px, y: PLAYER_Y - 10, dy: -10 }];
    canShoot = false;
    beep(880, 0.05);
  }

  function alienShoot() {
    // Pick a random bottom alien in a random column
    const activeCols = [...new Set(aliens.filter((a) => a.alive).map((a) => a.col))];
    if (!activeCols.length) return;
    const col = activeCols[Math.floor(Math.random() * activeCols.length)];
    const shooter = lowestAliveInCol(col);
    if (!shooter) return;
    const bx = alienX(shooter.col) + ALIEN_W / 2 - 2;
    const by = alienY(shooter.row) + ALIEN_H;
    bullets = [...bullets, { x: bx, y: by, dy: 5 + wave * 0.5 }];
    beep(220, 0.08, 0.08);
  }

  function hitShield(bx: number, by: number, bw: number, bh: number): boolean {
    let hit = false;
    shieldBlocks = shieldBlocks.map((b) => {
      if (!hit && b.hp > 0 && bx < b.x + SHIELD_BLOCK && bx + bw > b.x && by < b.y + SHIELD_BLOCK && by + bh > b.y) {
        hit = true;
        return { ...b, hp: b.hp - 1 };
      }
      return b;
    });
    return hit;
  }

  function gameLoop(ts: number) {
    if (state !== 'playing') return;
    const dt = Math.min(ts - lastTime, 50);
    lastTime = ts;

    // Respawn delay
    if (isRespawning) {
      respawnTimer -= dt;
      if (respawnTimer <= 0) { isRespawning = false; canShoot = true; }
      draw();
      animId = requestAnimationFrame(gameLoop);
      return;
    }

    // Player movement
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) playerX = Math.max(0, playerX - PLAYER_SPEED);
    if (keys['ArrowRight'] || keys['d'] || keys['D']) playerX = Math.min(W - PLAYER_W, playerX + PLAYER_SPEED);
    if ((keys[' '] || keys['ArrowUp']) && canShoot) playerShoot();

    // UFO
    ufoTick += dt;
    if (!ufo.active && ufoTick >= ufoInterval) {
      ufo = { x: -60, active: true };
      ufoTick = 0;
      ufoInterval = 20000 + Math.random() * 15000;
    }
    if (ufo.active) {
      ufo = { ...ufo, x: ufo.x + 2 };
      if (ufo.x > W + 60) ufo = { x: 0, active: false };
    }

    // Alien step
    alienTick += dt;
    if (alienTick >= alienStepMs) {
      alienTick = 0;
      alienFrame = 1 - alienFrame;

      // Check if any alien would go out of bounds
      const alive = aliens.filter((a) => a.alive);
      const minCol = Math.min(...alive.map((a) => a.col));
      const maxCol = Math.max(...alive.map((a) => a.col));
      const leftEdge = GRID_LEFT + alienOffX + minCol * (ALIEN_W + ALIEN_PAD_X);
      const rightEdge = GRID_LEFT + alienOffX + maxCol * (ALIEN_W + ALIEN_PAD_X) + ALIEN_W;

      if ((alienDX === 1 && rightEdge >= W - 20) || (alienDX === -1 && leftEdge <= 20)) {
        alienOffY += 16;
        alienDX = -alienDX;
        alienStepMs = Math.max(80, alienStepMs - 10);
      } else {
        alienOffX += alienDX * 8;
      }

      beep(alienFrame === 0 ? 160 : 120, 0.04, 0.05);
    }

    // Alien shooting
    shootTick += dt;
    const shootInterval = Math.max(400, 1400 - wave * 100 - (55 - aliveCount()) * 10);
    if (shootTick >= shootInterval) {
      shootTick = 0;
      alienShoot();
    }

    // Move bullets
    const nextBullets: Bullet[] = [];
    for (const b of bullets) {
      const nb = { ...b, y: b.y + b.dy };
      if (nb.y < 0 || nb.y > H) {
        if (b.dy < 0) canShoot = true; // player bullet gone
        continue;
      }
      nextBullets.push(nb);
    }
    bullets = nextBullets;

    // Collision: player bullets vs aliens & UFO
    const survivingBullets: Bullet[] = [];
    for (const b of bullets) {
      if (b.dy >= 0) { survivingBullets.push(b); continue; }
      let hit = false;

      // vs UFO
      if (ufo.active && b.x >= ufo.x && b.x <= ufo.x + 52 && b.y <= 30 && b.y >= 10) {
        ufo = { x: 0, active: false };
        score += 100 + Math.floor(Math.random() * 5) * 50;
        beep(1200, 0.3);
        hit = true;
      }

      // vs aliens
      if (!hit) {
        for (const alien of aliens) {
          if (!alien.alive) continue;
          const ax = alienX(alien.col);
          const ay = alienY(alien.row);
          if (b.x >= ax && b.x <= ax + ALIEN_W && b.y >= ay && b.y <= ay + ALIEN_H) {
            alien.alive = false;
            score += ROW_POINTS[alien.row];
            alienStepMs = Math.max(80, alienStepMs - 5);
            beep(600, 0.15);
            hit = true;
            break;
          }
        }
      }

      // vs shields
      if (!hit && hitShield(b.x, b.y, 4, 10)) { hit = true; canShoot = true; }

      if (!hit) survivingBullets.push(b);
      else if (b.dy < 0) canShoot = true;
    }
    bullets = survivingBullets;

    // Collision: alien bullets vs player
    for (const b of bullets) {
      if (b.dy <= 0) continue;
      if (b.x >= playerX && b.x <= playerX + PLAYER_W && b.y >= PLAYER_Y && b.y <= PLAYER_Y + PLAYER_H) {
        beep(150, 0.4);
        lives--;
        bullets = bullets.filter((bb) => bb !== b);
        canShoot = false;
        isRespawning = true;
        respawnTimer = 1500;
        if (lives <= 0) { if (score > hiScore) hiScore = score; state = 'gameover'; draw(); return; }
        break;
      }
    }

    // Alien bullets vs shields
    for (const b of bullets) {
      if (b.dy > 0) hitShield(b.x, b.y, 4, 10);
    }

    // Aliens reach bottom
    for (const alien of aliens) {
      if (alien.alive && alienY(alien.row) + ALIEN_H >= PLAYER_Y) {
        if (score > hiScore) hiScore = score;
        state = 'gameover';
        draw(); return;
      }
    }

    // All aliens dead → next wave
    if (aliveCount() === 0) {
      if (score > hiScore) hiScore = score;
      state = 'won';
      draw(); return;
    }

    draw();
    animId = requestAnimationFrame(gameLoop);
  }

  function drawAlien(ctx: CanvasRenderingContext2D, alien: Alien) {
    const t = alienType(alien.row);
    const shape = ALIEN_SHAPES[t][alienFrame];
    const ax = alienX(alien.col);
    const ay = alienY(alien.row);
    const pw = ALIEN_W / shape[0].length;
    const ph = ALIEN_H / shape.length;
    ctx.fillStyle = ALIEN_COLORS[t];
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c] === 'X') {
          ctx.fillRect(ax + c * pw, ay + r * ph, pw - 0.5, ph - 0.5);
        }
      }
    }
  }

  function drawPlayer(ctx: CanvasRenderingContext2D) {
    if (isRespawning && Math.floor(Date.now() / 100) % 2 === 0) return;
    ctx.fillStyle = '#4fc3f7';
    // Body
    ctx.fillRect(playerX + 8, PLAYER_Y + 8, PLAYER_W - 16, PLAYER_H - 8);
    // Cannon
    ctx.fillRect(playerX + PLAYER_W / 2 - 3, PLAYER_Y, 6, 12);
    // Wings
    ctx.fillRect(playerX, PLAYER_Y + 12, PLAYER_W, PLAYER_H - 12);
  }

  function drawUFO(ctx: CanvasRenderingContext2D) {
    if (!ufo.active) return;
    ctx.fillStyle = '#ff4081';
    ctx.beginPath();
    ctx.ellipse(ufo.x + 26, 20, 26, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ff80ab';
    ctx.beginPath();
    ctx.ellipse(ufo.x + 26, 16, 14, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c51162';
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(ufo.x + 8 + i * 14, 22, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function draw() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);

    // Stars
    ctx.fillStyle = '#fff';
    const starRng = mulberry32(42);
    for (let i = 0; i < 80; i++) {
      const sx = Math.floor(starRng() * W);
      const sy = Math.floor(starRng() * H);
      const ss = starRng() > 0.8 ? 2 : 1;
      ctx.fillRect(sx, sy, ss, ss);
    }

    // HUD
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE  ${String(score).padStart(6, '0')}`, 20, 24);
    ctx.textAlign = 'center';
    ctx.fillText(`HI  ${String(hiScore).padStart(6, '0')}`, W / 2, 24);
    ctx.textAlign = 'right';
    ctx.fillText(`WAVE ${wave}`, W - 20, 24);

    // Lives
    for (let i = 0; i < lives; i++) {
      const lx = 20 + i * 28;
      ctx.fillStyle = '#4fc3f7';
      ctx.fillRect(lx + 8, H - 20, 12, 8);
      ctx.fillRect(lx + 4, H - 14, 20, 6);
      ctx.fillRect(lx, H - 10, 28, 4);
    }

    // Ground line
    ctx.fillStyle = '#1a6b3a';
    ctx.fillRect(0, H - 6, W, 3);

    if (state === 'idle') {
      overlay(ctx, 'SPACE INVADERS', 'Press Space or tap to start', '← → to move  |  Space to shoot');
      draw();
      return;
    }

    // Shields
    for (const b of shieldBlocks) {
      if (b.hp <= 0) continue;
      const alpha = b.hp / 3;
      ctx.fillStyle = `rgba(0, 230, 118, ${alpha})`;
      ctx.fillRect(b.x, b.y, SHIELD_BLOCK, SHIELD_BLOCK);
    }

    // Aliens
    for (const alien of aliens) {
      if (alien.alive) drawAlien(ctx, alien);
    }

    // UFO
    drawUFO(ctx);

    // Bullets
    for (const b of bullets) {
      if (b.dy < 0) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(b.x, b.y, 4, 12);
      } else {
        ctx.fillStyle = '#ff6b6b';
        // zigzag
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x + 4, b.y + 4);
        ctx.lineTo(b.x, b.y + 8);
        ctx.lineTo(b.x + 4, b.y + 12);
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // Player
    drawPlayer(ctx);

    // Overlays
    if (state === 'paused') overlay(ctx, 'PAUSED', 'Press Space to resume', '');
    if (state === 'won') overlay(ctx, `WAVE ${wave} CLEAR!`, `Score: ${score}`, 'Press Space for next wave');
    if (state === 'gameover') overlay(ctx, 'GAME OVER', `Score: ${score}`, 'Press Space to play again');
  }

  function overlay(ctx: CanvasRenderingContext2D, title: string, sub: string, sub2: string) {
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 52px monospace';
    ctx.fillText(title, W / 2, H / 2 - 30);
    ctx.font = '20px monospace';
    ctx.fillStyle = '#aaa';
    ctx.fillText(sub, W / 2, H / 2 + 18);
    if (sub2) {
      ctx.font = '15px monospace';
      ctx.fillStyle = '#666';
      ctx.fillText(sub2, W / 2, H / 2 + 50);
    }
  }

  // Simple seeded RNG for deterministic stars
  function mulberry32(seed: number) {
    return function () {
      seed |= 0; seed = seed + 0x6d2b79f5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function handleKey(e: KeyboardEvent) {
    keys[e.key] = e.type === 'keydown';
    if (e.type === 'keydown') {
      if (e.key === ' ') {
        e.preventDefault();
        if (state === 'idle') startGame();
        else if (state === 'won') { state = 'playing'; startWave(wave + 1); lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
        else if (state === 'gameover') startGame();
        else if (state === 'playing' && !isRespawning) { state = 'paused'; draw(); }
        else if (state === 'paused') { state = 'playing'; lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
      }
    }
  }

  function handleTap() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (state === 'idle') startGame();
    else if (state === 'won') { state = 'playing'; startWave(wave + 1); lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
    else if (state === 'gameover') startGame();
    else if (state === 'playing') { state = 'paused'; draw(); }
    else if (state === 'paused') { state = 'playing'; lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
  }

  // Touch controls
  let touchStartX = 0;
  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
    if (!audioCtx) audioCtx = new AudioContext();
    if (state !== 'playing') handleTap();
  }
  function handleTouchMove(e: TouchEvent) {
    if (state !== 'playing') return;
    e.preventDefault();
    const dx = e.touches[0].clientX - touchStartX;
    touchStartX = e.touches[0].clientX;
    const rect = canvas.getBoundingClientRect();
    const scale = W / rect.width;
    playerX = Math.max(0, Math.min(W - PLAYER_W, playerX + dx * scale));
  }
  function handleTouchEnd() {
    if (state === 'playing') playerShoot();
  }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKey);
    draw();
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKey);
    };
  });

  $effect(() => {
    if (state === 'playing') {
      cancelAnimationFrame(animId);
      lastTime = performance.now();
      animId = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(animId);
  });

  onDestroy(() => cancelAnimationFrame(animId));
</script>

<svelte:head>
  <title>Space Invaders</title>
</svelte:head>

<div class="wrapper">
  <a class="back" href="../../arcade.html">← Arcade</a>
  <canvas
    bind:this={canvas}
    width={W}
    height={H}
    onclick={handleTap}
    ontouchstart={handleTouchStart}
    ontouchmove={handleTouchMove}
    ontouchend={handleTouchEnd}
  ></canvas>
  <p class="hint">← → / A D to move &nbsp;·&nbsp; Space to shoot &nbsp;·&nbsp; Space to pause</p>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: monospace;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  canvas {
    display: block;
    max-width: 100vw;
    border: 1px solid #111;
    touch-action: none;
    cursor: crosshair;
  }

  .hint {
    color: #444;
    font-size: 13px;
    margin: 0;
  }

  .back {
    color: #444;
    font-size: 14px;
    text-decoration: none;
    align-self: flex-start;
  }
  .back:hover { color: #aaa; }
</style>
