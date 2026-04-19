<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const W = 480;
  const H = 640;
  const PADDLE_H = 12;
  const PADDLE_Y = H - 40;
  const BALL_R = 7;
  const BRICK_ROWS = 8;
  const BRICK_COLS = 10;
  const BRICK_W = 42;
  const BRICK_H = 16;
  const BRICK_PAD = 4;
  const BRICK_LEFT = (W - (BRICK_COLS * (BRICK_W + BRICK_PAD) - BRICK_PAD)) / 2;
  const BRICK_TOP = 60;

  type GameState = 'idle' | 'playing' | 'paused' | 'dead' | 'levelup' | 'gameover' | 'won';

  // Brick types: hp 1-3, indestructible (-1)
  const LEVEL_MAPS: number[][][] = [
    // Level 1 — simple grid
    [
      [0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3,3],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ],
    // Level 2 — diamond
    [
      [0,0,0,1,1,1,1,0,0,0],
      [0,0,2,2,2,2,2,2,0,0],
      [0,2,3,3,3,3,3,3,2,0],
      [1,2,3,3,3,3,3,3,2,1],
      [1,2,3,3,3,3,3,3,2,1],
      [0,2,3,3,3,3,3,3,2,0],
      [0,0,2,2,2,2,2,2,0,0],
      [0,0,0,1,1,1,1,0,0,0],
    ],
    // Level 3 — fortress with indestructibles
    [
      [1,1,1,1,1,1,1,1,1,1],
      [2,-1,2,2,2,2,2,2,-1,2],
      [2,2,2,2,2,2,2,2,2,2],
      [3,3,-1,3,3,3,3,-1,3,3],
      [3,3,3,3,3,3,3,3,3,3],
      [2,-1,2,2,2,2,2,2,-1,2],
      [1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0],
    ],
    // Level 4 — checkerboard chaos
    [
      [3,0,3,0,3,0,3,0,3,0],
      [0,2,0,2,0,2,0,2,0,2],
      [3,0,3,0,3,0,3,0,3,0],
      [0,2,0,2,0,2,0,2,0,2],
      [-1,3,-1,3,-1,3,-1,3,-1,3],
      [3,-1,3,-1,3,-1,3,-1,3,-1],
      [2,2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3,3],
    ],
    // Level 5 — full destruction
    [
      [3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3],
      [2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2],
      [1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1],
      [3,3,3,3,3,3,3,3,3,3],
    ],
  ];

  // Powerup types
  type PowerupType = 'wide' | 'multi' | 'slow' | 'laser' | 'life';
  const POWERUP_COLORS: Record<PowerupType, string> = {
    wide: '#4fc3f7',
    multi: '#ffd93d',
    slow: '#6bcb77',
    laser: '#ff6b6b',
    life: '#ff80ab',
  };
  const POWERUP_LABELS: Record<PowerupType, string> = {
    wide: 'WIDE', multi: 'MULTI', slow: 'SLOW', laser: 'LASER', life: '❤',
  };

  type Ball = { x: number; y: number; vx: number; vy: number };
  type Brick = { row: number; col: number; hp: number };
  type Powerup = { x: number; y: number; type: PowerupType };
  type Laser = { x: number; y: number };

  let canvas: HTMLCanvasElement;
  let animId: number;
  let lastTime = 0;

  let gameState: GameState = $state('idle');
  let score = $state(0);
  let hiScore = $state(0);
  let lives = $state(3);
  let level = $state(1);

  let paddleX = $state(W / 2 - 40);
  let paddleW = $state(80);

  let balls: Ball[] = $state([]);
  let bricks: Brick[] = $state([]);
  let powerups: Powerup[] = $state([]);
  let lasers: Laser[] = $state([]);
  let laserActive = $state(false);
  let laserCooldown = 0;
  let laserTimer = 0;

  let ballSpeed = $state(5);
  let levelUpTimer = 0;

  const keys: Record<string, boolean> = {};
  let mouseX = -1;
  let audioCtx: AudioContext | null = null;

  function beep(freq: number, dur: number, type: OscillatorType = 'square', vol = 0.12) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (_) {}
  }

  function buildBricks(lvl: number): Brick[] {
    const map = LEVEL_MAPS[(lvl - 1) % LEVEL_MAPS.length];
    const result: Brick[] = [];
    for (let r = 0; r < BRICK_ROWS; r++) {
      for (let c = 0; c < BRICK_COLS; c++) {
        const hp = map[r][c];
        if (hp !== 0) result.push({ row: r, col: c, hp });
      }
    }
    return result;
  }

  function spawnBall(speed: number): Ball {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3);
    return {
      x: paddleX + paddleW / 2,
      y: PADDLE_Y - BALL_R - 1,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  }

  function startLevel(lvl: number) {
    level = lvl;
    bricks = buildBricks(lvl);
    balls = [spawnBall(ballSpeed)];
    powerups = [];
    lasers = [];
    laserActive = false;
    laserTimer = 0;
    laserCooldown = 0;
    paddleW = 80;
    paddleX = W / 2 - paddleW / 2;
  }

  function startGame() {
    score = 0;
    lives = 3;
    ballSpeed = 5;
    if (!audioCtx) audioCtx = new AudioContext();
    startLevel(1);
    gameState = 'playing';
  }

  function brickX(b: Brick) { return BRICK_LEFT + b.col * (BRICK_W + BRICK_PAD); }
  function brickY(b: Brick) { return BRICK_TOP + b.row * (BRICK_H + BRICK_PAD); }

  function brickColor(hp: number): string {
    if (hp === -1) return '#555';
    if (hp === 1) return '#4fc3f7';
    if (hp === 2) return '#ffd93d';
    return '#ff6b6b';
  }

  function maybeDrop(brick: Brick) {
    if (Math.random() > 0.18) return;
    const types: PowerupType[] = ['wide', 'multi', 'slow', 'laser', 'life'];
    const weights = [3, 2, 2, 2, 1];
    let total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let t: PowerupType = 'wide';
    for (let i = 0; i < types.length; i++) {
      r -= weights[i];
      if (r <= 0) { t = types[i]; break; }
    }
    powerups = [...powerups, { x: brickX(brick) + BRICK_W / 2 - 18, y: brickY(brick), type: t }];
  }

  function applyPowerup(type: PowerupType) {
    beep(880, 0.2, 'sine', 0.15);
    if (type === 'wide') {
      paddleW = Math.min(160, paddleW + 30);
    } else if (type === 'multi') {
      const newBalls: Ball[] = [];
      for (const b of balls) {
        newBalls.push({ ...b, vx: -b.vx + 1, vy: b.vy });
        newBalls.push({ ...b, vx: b.vx - 1, vy: b.vy });
      }
      balls = [...balls, ...newBalls.slice(0, 4)];
    } else if (type === 'slow') {
      balls = balls.map((b) => {
        const spd = Math.sqrt(b.vx ** 2 + b.vy ** 2);
        const s = Math.max(3, spd * 0.7);
        const ratio = s / spd;
        return { ...b, vx: b.vx * ratio, vy: b.vy * ratio };
      });
    } else if (type === 'laser') {
      laserActive = true;
      laserTimer = 8000;
    } else if (type === 'life') {
      lives = Math.min(5, lives + 1);
    }
  }

  function reflectBall(ball: Ball, axis: 'x' | 'y') {
    if (axis === 'x') ball.vx = -ball.vx;
    else ball.vy = -ball.vy;
    // Keep minimum speed
    const spd = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
    if (Math.abs(ball.vy) < 1.5) {
      ball.vy = ball.vy < 0 ? -1.5 : 1.5;
      const newSpd = Math.sqrt(ball.vx ** 2 + ball.vy ** 2);
      ball.vx = (ball.vx / newSpd) * spd;
      ball.vy = (ball.vy / newSpd) * spd;
    }
  }

  function gameLoop(ts: number) {
    if (gameState !== 'playing') return;
    const dt = Math.min(ts - lastTime, 50);
    lastTime = ts;

    // Level-up flash pause
    if (levelUpTimer > 0) {
      levelUpTimer -= dt;
      if (levelUpTimer <= 0) {
        const nextLvl = level + 1;
        if (nextLvl > LEVEL_MAPS.length) {
          if (score > hiScore) hiScore = score;
          gameState = 'won';
          draw(); return;
        }
        ballSpeed = Math.min(10, ballSpeed + 0.5);
        startLevel(nextLvl);
      }
      draw(); animId = requestAnimationFrame(gameLoop); return;
    }

    // Paddle movement
    const PADDLE_SPEED = 7;
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) paddleX = Math.max(0, paddleX - PADDLE_SPEED);
    if (keys['ArrowRight'] || keys['d'] || keys['D']) paddleX = Math.min(W - paddleW, paddleX + PADDLE_SPEED);
    if (mouseX >= 0) paddleX = Math.max(0, Math.min(W - paddleW, mouseX - paddleW / 2));

    // Laser
    if (laserActive) {
      laserTimer -= dt;
      if (laserTimer <= 0) { laserActive = false; lasers = []; }
      laserCooldown -= dt;
      if (laserCooldown <= 0 && (keys[' '] || keys['z'] || keys['Z'])) {
        lasers = [
          ...lasers,
          { x: paddleX + 6, y: PADDLE_Y },
          { x: paddleX + paddleW - 6, y: PADDLE_Y },
        ];
        laserCooldown = 300;
        beep(1200, 0.05);
      }
    }

    // Move lasers
    const nextLasers: Laser[] = [];
    for (const l of lasers) {
      const nl = { ...l, y: l.y - 12 };
      if (nl.y < 0) continue;
      let hitBrick = false;
      for (const brick of bricks) {
        if (brick.hp === 0) continue;
        const bx = brickX(brick), by = brickY(brick);
        if (nl.x >= bx && nl.x <= bx + BRICK_W && nl.y >= by && nl.y <= by + BRICK_H) {
          if (brick.hp !== -1) {
            brick.hp--;
            if (brick.hp === 0) {
              score += 10 * level;
              maybeDrop(brick);
              beep(400, 0.05);
            }
          }
          hitBrick = true; break;
        }
      }
      if (!hitBrick) nextLasers.push(nl);
    }
    lasers = nextLasers;
    bricks = bricks.filter((b) => b.hp !== 0);

    // Move powerups
    const nextPowerups: Powerup[] = [];
    for (const p of powerups) {
      const np = { ...p, y: p.y + 2 };
      if (np.y > H) continue;
      if (np.x + 36 >= paddleX && np.x <= paddleX + paddleW &&
          np.y + 14 >= PADDLE_Y && np.y <= PADDLE_Y + PADDLE_H) {
        applyPowerup(np.type);
        continue;
      }
      nextPowerups.push(np);
    }
    powerups = nextPowerups;

    // Move balls
    const nextBalls: Ball[] = [];
    for (const ball of balls) {
      let { x, y, vx, vy } = ball;

      // Sub-step to avoid tunnelling
      const steps = Math.ceil(Math.max(Math.abs(vx), Math.abs(vy)) / BALL_R);
      const sx = vx / steps, sy = vy / steps;
      let dead = false;

      for (let s = 0; s < steps; s++) {
        x += sx; y += sy;

        // Walls
        if (x - BALL_R < 0) { x = BALL_R; vx = Math.abs(vx); beep(300, 0.04); }
        if (x + BALL_R > W) { x = W - BALL_R; vx = -Math.abs(vx); beep(300, 0.04); }
        if (y - BALL_R < 0) { y = BALL_R; vy = Math.abs(vy); beep(300, 0.04); }

        // Paddle
        if (vy > 0 && y + BALL_R >= PADDLE_Y && y - BALL_R <= PADDLE_Y + PADDLE_H &&
            x >= paddleX - BALL_R && x <= paddleX + paddleW + BALL_R) {
          y = PADDLE_Y - BALL_R;
          // Angle based on hit position
          const hitPos = (x - paddleX) / paddleW; // 0-1
          const angle = -Math.PI / 2 + (hitPos - 0.5) * (Math.PI * 0.75);
          const spd = Math.sqrt(vx ** 2 + vy ** 2);
          vx = Math.cos(angle) * spd;
          vy = Math.sin(angle) * spd;
          beep(200, 0.06, 'triangle');
        }

        // Bottom — ball lost
        if (y - BALL_R > H) { dead = true; break; }

        // Bricks
        for (const brick of bricks) {
          if (brick.hp === 0) continue;
          const bx = brickX(brick), by = brickY(brick);
          const overlapX = x > bx && x < bx + BRICK_W;
          const overlapY = y > by && y < by + BRICK_H;
          const nearLeft = Math.abs(x - bx) < BALL_R + 2;
          const nearRight = Math.abs(x - (bx + BRICK_W)) < BALL_R + 2;
          const nearTop = Math.abs(y - by) < BALL_R + 2;
          const nearBot = Math.abs(y - (by + BRICK_H)) < BALL_R + 2;

          const hitH = (overlapX && (nearTop || nearBot));
          const hitV = (overlapY && (nearLeft || nearRight));

          if (hitH || hitV) {
            if (brick.hp !== -1) {
              brick.hp--;
              if (brick.hp === 0) {
                score += 10 * level;
                maybeDrop(brick);
                beep(500 + brick.row * 40, 0.07);
              } else {
                beep(300, 0.04);
              }
            } else {
              beep(180, 0.05, 'sawtooth');
            }
            if (hitH && !hitV) { vy = -vy; y += vy * 0.5; }
            else if (hitV && !hitH) { vx = -vx; x += vx * 0.5; }
            else { vx = -vx; vy = -vy; }
            break;
          }
        }
      }

      bricks = bricks.filter((b) => b.hp !== 0);

      if (!dead) nextBalls.push({ x, y, vx, vy });
    }
    balls = nextBalls;

    // All balls lost
    if (balls.length === 0) {
      lives--;
      beep(100, 0.5, 'sawtooth', 0.2);
      if (lives <= 0) {
        if (score > hiScore) hiScore = score;
        gameState = 'gameover';
        draw(); return;
      }
      paddleX = W / 2 - paddleW / 2;
      balls = [spawnBall(ballSpeed)];
      powerups = [];
      lasers = [];
    }

    // All destructible bricks cleared
    const remaining = bricks.filter((b) => b.hp !== -1).length;
    if (remaining === 0) {
      levelUpTimer = 1200;
      beep(880, 0.1, 'sine'); beep(1100, 0.15, 'sine');
    }

    draw();
    animId = requestAnimationFrame(gameLoop);
  }

  function draw() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#0d0d1a');
    grad.addColorStop(1, '#1a0d2e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Stars
    const rng = mulberry32(7);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    for (let i = 0; i < 60; i++) {
      ctx.fillRect(Math.floor(rng() * W), Math.floor(rng() * H), rng() > 0.8 ? 2 : 1, 1);
    }

    // HUD
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`SCORE  ${String(score).padStart(6, '0')}`, 10, 22);
    ctx.textAlign = 'center';
    ctx.fillText(`HI  ${String(hiScore).padStart(6, '0')}`, W / 2, 22);
    ctx.textAlign = 'right';
    ctx.fillText(`LEVEL ${level}`, W - 10, 22);

    // Lives pips
    for (let i = 0; i < lives; i++) {
      ctx.beginPath();
      ctx.arc(14 + i * 18, H - 14, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff80ab';
      ctx.fill();
    }

    // Laser timer bar
    if (laserActive) {
      ctx.fillStyle = 'rgba(255,107,107,0.3)';
      ctx.fillRect(0, H - 6, W * (laserTimer / 8000), 4);
    }

    // Bricks
    for (const brick of bricks) {
      const bx = brickX(brick), by = brickY(brick);
      const color = brickColor(brick.hp);

      if (brick.hp === -1) {
        ctx.fillStyle = '#444';
        ctx.beginPath();
        ctx.roundRect(bx, by, BRICK_W, BRICK_H, 3);
        ctx.fill();
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        // Glow
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(bx, by, BRICK_W, BRICK_H, 3);
        ctx.fill();
        ctx.shadowBlur = 0;
        // Shine
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.beginPath();
        ctx.roundRect(bx + 2, by + 2, BRICK_W - 4, 4, 2);
        ctx.fill();
        // HP crack marks
        if (brick.hp === 2) {
          ctx.strokeStyle = 'rgba(0,0,0,0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(bx + BRICK_W * 0.35, by + 2);
          ctx.lineTo(bx + BRICK_W * 0.45, by + BRICK_H - 2);
          ctx.stroke();
        }
      }
    }

    // Powerups
    for (const p of powerups) {
      ctx.fillStyle = POWERUP_COLORS[p.type];
      ctx.shadowColor = POWERUP_COLORS[p.type];
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.roundRect(p.x, p.y, 36, 14, 4);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#000';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(POWERUP_LABELS[p.type], p.x + 18, p.y + 10);
    }

    // Lasers
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#ff6b6b';
    ctx.shadowBlur = 8;
    for (const l of lasers) {
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x, l.y - 20);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;

    // Paddle
    const pg = ctx.createLinearGradient(paddleX, PADDLE_Y, paddleX, PADDLE_Y + PADDLE_H);
    pg.addColorStop(0, laserActive ? '#ff6b6b' : '#4fc3f7');
    pg.addColorStop(1, laserActive ? '#c62828' : '#0288d1');
    ctx.fillStyle = pg;
    ctx.shadowColor = laserActive ? '#ff6b6b' : '#4fc3f7';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.roundRect(paddleX, PADDLE_Y, paddleW, PADDLE_H, 5);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Balls
    for (const ball of balls) {
      const bg = ctx.createRadialGradient(ball.x - 2, ball.y - 2, 1, ball.x, ball.y, BALL_R);
      bg.addColorStop(0, '#fff');
      bg.addColorStop(1, '#90caf9');
      ctx.fillStyle = bg;
      ctx.shadowColor = '#90caf9';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, BALL_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Level-up flash
    if (levelUpTimer > 0) {
      ctx.fillStyle = `rgba(255,255,150,${Math.min(0.35, levelUpTimer / 1200 * 0.35)})`;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('LEVEL CLEAR!', W / 2, H / 2);
    }

    // Overlays
    if (gameState === 'idle') overlay(ctx, 'BREAKOUT', 'Press Space or tap to start', '← → / mouse to move  ·  Space = shoot laser');
    if (gameState === 'paused') overlay(ctx, 'PAUSED', 'Press Space to resume', '');
    if (gameState === 'gameover') overlay(ctx, 'GAME OVER', `Score: ${score}`, 'Press Space to play again');
    if (gameState === 'won') overlay(ctx, 'YOU WIN!', `Final score: ${score}`, 'Press Space to play again');
  }

  function overlay(ctx: CanvasRenderingContext2D, title: string, sub: string, sub2: string) {
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px monospace';
    ctx.fillText(title, W / 2, H / 2 - 30);
    ctx.shadowBlur = 0;
    ctx.font = '18px monospace';
    ctx.fillStyle = '#aaa';
    ctx.fillText(sub, W / 2, H / 2 + 16);
    if (sub2) {
      ctx.font = '13px monospace';
      ctx.fillStyle = '#666';
      ctx.fillText(sub2, W / 2, H / 2 + 46);
    }
  }

  function mulberry32(seed: number) {
    return () => {
      seed |= 0; seed = seed + 0x6d2b79f5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function handleKey(e: KeyboardEvent) {
    keys[e.key] = e.type === 'keydown';
    if (e.type === 'keydown' && e.key === ' ') {
      e.preventDefault();
      if (gameState === 'idle' || gameState === 'gameover' || gameState === 'won') startGame();
      else if (gameState === 'playing' && levelUpTimer <= 0) { gameState = 'paused'; draw(); }
      else if (gameState === 'paused') { gameState = 'playing'; lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
    }
  }

  function handleMouseMove(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const scale = W / rect.width;
    mouseX = (e.clientX - rect.left) * scale;
  }

  function handleMouseLeave() { mouseX = -1; }

  function handleTap() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (gameState === 'idle' || gameState === 'gameover' || gameState === 'won') startGame();
    else if (gameState === 'playing' && levelUpTimer <= 0) { gameState = 'paused'; draw(); }
    else if (gameState === 'paused') { gameState = 'playing'; lastTime = performance.now(); animId = requestAnimationFrame(gameLoop); }
  }

  let touchX = -1;
  function handleTouchStart(e: TouchEvent) {
    if (!audioCtx) audioCtx = new AudioContext();
    touchX = e.touches[0].clientX;
    if (gameState !== 'playing') { handleTap(); return; }
    const rect = canvas.getBoundingClientRect();
    const scale = W / rect.width;
    mouseX = (e.touches[0].clientX - rect.left) * scale;
  }
  function handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    if (gameState !== 'playing') return;
    const rect = canvas.getBoundingClientRect();
    const scale = W / rect.width;
    mouseX = (e.touches[0].clientX - rect.left) * scale;
  }
  function handleTouchEnd() { mouseX = -1; if (gameState === 'playing' && laserActive) keys[' '] = true; }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKey);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    draw();
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKey);
    };
  });

  $effect(() => {
    if (gameState === 'playing') {
      cancelAnimationFrame(animId);
      lastTime = performance.now();
      animId = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(animId);
  });

  onDestroy(() => cancelAnimationFrame(animId));
</script>

<svelte:head>
  <title>Breakout</title>
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
  <p class="hint">← → / mouse to move &nbsp;·&nbsp; Space to pause &nbsp;·&nbsp; Catch powerups!</p>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #0d0d1a;
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
    max-height: 90vh;
    border: 1px solid #1a1a2e;
    touch-action: none;
    cursor: none;
  }

  .hint {
    color: #333;
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
