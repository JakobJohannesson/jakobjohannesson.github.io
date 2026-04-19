<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const W = 800;
  const H = 500;
  const PADDLE_W = 12;
  const PADDLE_H = 80;
  const BALL_SIZE = 10;
  const PADDLE_SPEED = 5;
  const WIN_SCORE = 7;

  type State = 'idle' | 'playing' | 'paused' | 'won' | 'lost';

  let canvas: HTMLCanvasElement;
  let animId: number;
  let state: State = $state('idle');

  let playerY = $state(H / 2 - PADDLE_H / 2);
  let aiY = $state(H / 2 - PADDLE_H / 2);
  let ballX = $state(W / 2);
  let ballY = $state(H / 2);
  let ballVX = $state(0);
  let ballVY = $state(0);
  let playerScore = $state(0);
  let aiScore = $state(0);
  let winner = $state('');

  const keys: Record<string, boolean> = {};

  function resetBall(towardPlayer: boolean) {
    ballX = W / 2;
    ballY = H / 2;
    const angle = (Math.random() * Math.PI) / 4 - Math.PI / 8;
    const speed = 5;
    ballVX = towardPlayer ? -speed : speed;
    ballVY = Math.tan(angle) * speed;
  }

  function startGame() {
    playerY = H / 2 - PADDLE_H / 2;
    aiY = H / 2 - PADDLE_H / 2;
    playerScore = 0;
    aiScore = 0;
    winner = '';
    resetBall(Math.random() < 0.5);
    state = 'playing';
  }

  function gameLoop() {
    if (state !== 'playing') return;

    // Player movement
    if ((keys['ArrowUp'] || keys['w'] || keys['W']) && playerY > 0) {
      playerY = Math.max(0, playerY - PADDLE_SPEED);
    }
    if ((keys['ArrowDown'] || keys['s'] || keys['S']) && playerY < H - PADDLE_H) {
      playerY = Math.min(H - PADDLE_H, playerY + PADDLE_SPEED);
    }

    // AI movement (follows ball with slight lag)
    const aiCenter = aiY + PADDLE_H / 2;
    const aiSpeed = 4.2;
    if (aiCenter < ballY - 5) aiY = Math.min(H - PADDLE_H, aiY + aiSpeed);
    else if (aiCenter > ballY + 5) aiY = Math.max(0, aiY - aiSpeed);

    // Ball movement
    ballX += ballVX;
    ballY += ballVY;

    // Top/bottom bounce
    if (ballY <= 0) { ballY = 0; ballVY = Math.abs(ballVY); }
    if (ballY >= H - BALL_SIZE) { ballY = H - BALL_SIZE; ballVY = -Math.abs(ballVY); }

    // Player paddle collision (left)
    const px = 20 + PADDLE_W;
    if (ballX <= px && ballX >= 20 && ballY + BALL_SIZE >= playerY && ballY <= playerY + PADDLE_H) {
      ballX = px;
      const hitPos = (ballY + BALL_SIZE / 2 - playerY) / PADDLE_H; // 0-1
      const angle = (hitPos - 0.5) * (Math.PI / 2.5);
      const speed = Math.min(Math.sqrt(ballVX ** 2 + ballVY ** 2) + 0.2, 12);
      ballVX = Math.cos(angle) * speed;
      ballVY = Math.sin(angle) * speed;
    }

    // AI paddle collision (right)
    const ax = W - 20 - PADDLE_W - BALL_SIZE;
    if (ballX >= ax && ballX <= W - 20 && ballY + BALL_SIZE >= aiY && ballY <= aiY + PADDLE_H) {
      ballX = ax;
      const hitPos = (ballY + BALL_SIZE / 2 - aiY) / PADDLE_H;
      const angle = (hitPos - 0.5) * (Math.PI / 2.5);
      const speed = Math.min(Math.sqrt(ballVX ** 2 + ballVY ** 2) + 0.2, 12);
      ballVX = -Math.cos(angle) * speed;
      ballVY = Math.sin(angle) * speed;
    }

    // Scoring
    if (ballX < 0) {
      aiScore++;
      if (aiScore >= WIN_SCORE) { state = 'lost'; winner = 'AI'; draw(); return; }
      resetBall(false);
    }
    if (ballX > W) {
      playerScore++;
      if (playerScore >= WIN_SCORE) { state = 'won'; winner = 'You'; draw(); return; }
      resetBall(true);
    }

    draw();
    animId = requestAnimationFrame(gameLoop);
  }

  function draw() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    // Center dashed line
    ctx.setLineDash([8, 8]);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();
    ctx.setLineDash([]);

    // Scores
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(String(playerScore), W / 4, 60);
    ctx.fillText(String(aiScore), (3 * W) / 4, 60);

    // Paddles
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.roundRect(20, playerY, PADDLE_W, PADDLE_H, 4);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(W - 20 - PADDLE_W, aiY, PADDLE_W, PADDLE_H, 4);
    ctx.fill();

    // Ball
    ctx.beginPath();
    ctx.roundRect(ballX, ballY, BALL_SIZE, BALL_SIZE, 2);
    ctx.fill();

    // Overlay for non-playing states
    if (state === 'idle') {
      overlay(ctx, 'PONG', 'Press Space or tap to start', '');
    } else if (state === 'paused') {
      overlay(ctx, 'PAUSED', 'Press Space to resume', '');
    } else if (state === 'won') {
      overlay(ctx, 'YOU WIN!', `Score: ${playerScore} – ${aiScore}`, 'Press Space to play again');
    } else if (state === 'lost') {
      overlay(ctx, 'GAME OVER', `Score: ${playerScore} – ${aiScore}`, 'Press Space to play again');
    }
  }

  function overlay(ctx: CanvasRenderingContext2D, title: string, sub: string, sub2: string) {
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 56px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(title, W / 2, H / 2 - 30);
    ctx.font = '22px monospace';
    ctx.fillStyle = '#aaa';
    ctx.fillText(sub, W / 2, H / 2 + 20);
    if (sub2) {
      ctx.font = '18px monospace';
      ctx.fillStyle = '#777';
      ctx.fillText(sub2, W / 2, H / 2 + 54);
    }
  }

  function handleKey(e: KeyboardEvent) {
    keys[e.key] = e.type === 'keydown';

    if (e.type === 'keydown' && e.key === ' ') {
      e.preventDefault();
      if (state === 'idle' || state === 'won' || state === 'lost') startGame();
      else if (state === 'playing') { state = 'paused'; draw(); }
      else if (state === 'paused') { state = 'playing'; animId = requestAnimationFrame(gameLoop); }
    }
  }

  function handleTap() {
    if (state === 'idle' || state === 'won' || state === 'lost') startGame();
    else if (state === 'playing') { state = 'paused'; draw(); }
    else if (state === 'paused') { state = 'playing'; animId = requestAnimationFrame(gameLoop); }
  }

  let touchStartY = 0;
  function handleTouchStart(e: TouchEvent) {
    touchStartY = e.touches[0].clientY;
  }
  function handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    const dy = e.touches[0].clientY - touchStartY;
    touchStartY = e.touches[0].clientY;
    playerY = Math.max(0, Math.min(H - PADDLE_H, playerY + dy * 1.5));
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
      animId = requestAnimationFrame(gameLoop);
    }
    return () => cancelAnimationFrame(animId);
  });

  onDestroy(() => cancelAnimationFrame(animId));
</script>

<svelte:head>
  <title>Pong</title>
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
  ></canvas>
  <p class="hint">W / S or ↑ / ↓ to move &nbsp;·&nbsp; Space to pause &nbsp;·&nbsp; First to {WIN_SCORE} wins</p>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #0a0a0a;
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
    gap: 12px;
  }

  canvas {
    display: block;
    max-width: 100vw;
    border: 1px solid #222;
    touch-action: none;
    cursor: pointer;
  }

  .hint {
    color: #555;
    font-size: 13px;
    margin: 0;
  }

  .back {
    color: #666;
    font-size: 14px;
    text-decoration: none;
    align-self: flex-start;
  }
  .back:hover { color: #aaa; }
</style>
