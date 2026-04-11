<script lang="ts">
  import { base } from '$app/paths';
  import {
    COLS,
    ROWS,
    BLOCK_SIZE,
    createBoard,
    randomPiece,
    rotate,
    collides,
    merge,
    clearLines,
    calculateScore,
    getLevel,
    getDropInterval,
    getGhostPosition,
    type Board,
    type Piece
  } from '$lib/tetris';

  let board: Board = $state(createBoard());
  let currentPiece: Piece = $state(randomPiece());
  let nextPiece: Piece = $state(randomPiece());
  let score: number = $state(0);
  let lines: number = $state(0);
  let level: number = $state(0);
  let gameOver: boolean = $state(false);
  let paused: boolean = $state(false);
  let started: boolean = $state(false);
  let dropInterval: number = $state(800);
  let lastDrop: number = $state(0);
  let animationId: number = $state(0);
  let musicOn: boolean = $state(false);

  let canvas: HTMLCanvasElement;
  let nextCanvas: HTMLCanvasElement;
  let music: HTMLAudioElement;

  function toggleMusic() {
    if (!music) return;
    if (musicOn) {
      music.pause();
      musicOn = false;
    } else {
      music.currentTime = music.currentTime || 0;
      music
        .play()
        .then(() => {
          musicOn = true;
        })
        .catch((err) => {
          console.error('Music playback failed:', err);
          musicOn = false;
        });
    }
  }

  function startGame() {
    board = createBoard();
    currentPiece = randomPiece();
    nextPiece = randomPiece();
    score = 0;
    lines = 0;
    level = 0;
    gameOver = false;
    paused = false;
    started = true;
    dropInterval = 800;
    lastDrop = performance.now();
    cancelAnimationFrame(animationId);

    // Restart music from the beginning if it's currently on
    if (music && musicOn) {
      music.currentTime = 0;
      music.play().catch(() => {});
    }

    gameLoop(performance.now());
  }

  function movePiece(dx: number, dy: number): boolean {
    const moved: Piece = {
      ...currentPiece,
      pos: { x: currentPiece.pos.x + dx, y: currentPiece.pos.y + dy }
    };
    if (!collides(board, moved)) {
      currentPiece = moved;
      return true;
    }
    return false;
  }

  function rotatePiece() {
    const rotatedShape = rotate(currentPiece.shape);
    const rotated: Piece = { ...currentPiece, shape: rotatedShape };

    // Wall kick: try original, then left/right offsets
    for (const offset of [0, -1, 1, -2, 2]) {
      const kicked: Piece = {
        ...rotated,
        pos: { x: rotated.pos.x + offset, y: rotated.pos.y }
      };
      if (!collides(board, kicked)) {
        currentPiece = kicked;
        return;
      }
    }
  }

  function hardDrop() {
    const ghost = getGhostPosition(board, currentPiece);
    currentPiece = { ...currentPiece, pos: ghost };
    lockPiece();
  }

  function lockPiece() {
    board = merge(board, currentPiece);
    const result = clearLines(board);
    board = result.board;

    if (result.linesCleared > 0) {
      score += calculateScore(result.linesCleared, level);
      lines += result.linesCleared;
      level = getLevel(lines);
      dropInterval = getDropInterval(level);
    }

    currentPiece = nextPiece;
    nextPiece = randomPiece();

    if (collides(board, currentPiece)) {
      gameOver = true;
      if (music && musicOn) music.pause();
    }
  }

  function gameLoop(timestamp: number) {
    if (gameOver) return;
    if (paused) {
      animationId = requestAnimationFrame(gameLoop);
      return;
    }

    if (timestamp - lastDrop > dropInterval) {
      if (!movePiece(0, 1)) {
        lockPiece();
      }
      lastDrop = timestamp;
    }

    draw();
    drawNext();

    if (!gameOver) {
      animationId = requestAnimationFrame(gameLoop);
    }
  }

  function drawBlock(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    size: number = BLOCK_SIZE
  ) {
    // Retro 3D block style
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);

    // Highlight (top-left)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(x * size, y * size, size, 2);
    ctx.fillRect(x * size, y * size, 2, size);

    // Shadow (bottom-right)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(x * size, y * size + size - 2, size, 2);
    ctx.fillRect(x * size + size - 2, y * size, 2, size);

    // Inner border
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.strokeRect(x * size + 0.5, y * size + 0.5, size - 1, size - 1);
  }

  function draw() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const width = COLS * BLOCK_SIZE;
    const height = ROWS * BLOCK_SIZE;

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * BLOCK_SIZE, 0);
      ctx.lineTo(x * BLOCK_SIZE, height);
      ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * BLOCK_SIZE);
      ctx.lineTo(width, y * BLOCK_SIZE);
      ctx.stroke();
    }

    // Board cells
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (board[y][x]) {
          drawBlock(ctx, x, y, board[y][x]!);
        }
      }
    }

    // Ghost piece
    if (currentPiece && !gameOver) {
      const ghost = getGhostPosition(board, currentPiece);
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            const gx = ghost.x + x;
            const gy = ghost.y + y;
            if (gy >= 0) {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
              ctx.fillRect(gx * BLOCK_SIZE, gy * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
              ctx.strokeRect(
                gx * BLOCK_SIZE + 0.5,
                gy * BLOCK_SIZE + 0.5,
                BLOCK_SIZE - 1,
                BLOCK_SIZE - 1
              );
            }
          }
        }
      }
    }

    // Current piece
    if (currentPiece && !gameOver) {
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            const px = currentPiece.pos.x + x;
            const py = currentPiece.pos.y + y;
            if (py >= 0) {
              drawBlock(ctx, px, py, currentPiece.color);
            }
          }
        }
      }
    }

    // Game over overlay
    if (gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#ff0000';
      ctx.font = 'bold 28px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME', width / 2, height / 2 - 20);
      ctx.fillText('OVER', width / 2, height / 2 + 20);
      ctx.font = '12px "Press Start 2P", monospace';
      ctx.fillStyle = '#aaa';
      ctx.fillText('PRESS ENTER', width / 2, height / 2 + 60);
    }
  }

  function drawNext() {
    if (!nextCanvas) return;
    const ctx = nextCanvas.getContext('2d')!;
    const size = 20;
    const canvasSize = 6 * size;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    if (nextPiece) {
      const offsetX = (6 - nextPiece.shape[0].length) / 2;
      const offsetY = (6 - nextPiece.shape.length) / 2;
      for (let y = 0; y < nextPiece.shape.length; y++) {
        for (let x = 0; x < nextPiece.shape[y].length; x++) {
          if (nextPiece.shape[y][x]) {
            drawBlock(ctx, offsetX + x, offsetY + y, nextPiece.color, size);
          }
        }
      }
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (gameOver && e.key === 'Enter') {
      startGame();
      return;
    }
    if (!started) {
      if (e.key === 'Enter') startGame();
      return;
    }
    if (e.key === 'p' || e.key === 'P') {
      paused = !paused;
      if (music && musicOn) {
        if (paused) music.pause();
        else music.play().catch(() => {});
      }
      return;
    }
    if (paused || gameOver) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        movePiece(-1, 0);
        break;
      case 'ArrowRight':
        e.preventDefault();
        movePiece(1, 0);
        break;
      case 'ArrowDown':
        e.preventDefault();
        movePiece(0, 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        rotatePiece();
        break;
      case ' ':
        e.preventDefault();
        hardDrop();
        break;
    }
  }

  $effect(() => {
    if (canvas && !started) {
      draw();
      drawNext();
    }
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<audio bind:this={music} src="{base}/tetris.mp3" loop preload="auto"></audio>

<div class="game-container">
  <div class="title">TETRIS</div>

  <div class="game-area">
    <div class="board-container">
      <canvas
        bind:this={canvas}
        width={COLS * BLOCK_SIZE}
        height={ROWS * BLOCK_SIZE}
        class="board"
      ></canvas>

      {#if !started}
        <div class="start-overlay">
          <div class="start-text">PRESS ENTER<br />TO START</div>
        </div>
      {/if}

      {#if paused && !gameOver}
        <div class="start-overlay">
          <div class="start-text">PAUSED</div>
        </div>
      {/if}
    </div>

    <div class="sidebar">
      <div class="panel">
        <div class="panel-title">SCORE</div>
        <div class="panel-value">{score.toString().padStart(6, '0')}</div>
      </div>

      <div class="panel">
        <div class="panel-title">LEVEL</div>
        <div class="panel-value">{level}</div>
      </div>

      <div class="panel">
        <div class="panel-title">LINES</div>
        <div class="panel-value">{lines}</div>
      </div>

      <div class="panel">
        <div class="panel-title">NEXT</div>
        <div class="next-container">
          <canvas bind:this={nextCanvas} width={120} height={120} class="next-canvas"></canvas>
        </div>
      </div>

      <div class="controls">
        <div class="control-title">CONTROLS</div>
        <div class="control-row"><span class="key">&larr;&rarr;</span> MOVE</div>
        <div class="control-row"><span class="key">&uarr;</span> ROTATE</div>
        <div class="control-row"><span class="key">&darr;</span> SOFT DROP</div>
        <div class="control-row"><span class="key">SPACE</span> HARD DROP</div>
        <div class="control-row"><span class="key">P</span> PAUSE</div>
      </div>

      <button type="button" class="music-button" onclick={toggleMusic}>
        {musicOn ? 'MUSIC: ON' : 'MUSIC: OFF'}
      </button>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Press Start 2P', monospace;
    overflow: hidden;
  }

  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .title {
    font-size: 36px;
    color: #ff0000;
    text-shadow:
      3px 3px 0 #800000,
      -1px -1px 0 #ff6666;
    letter-spacing: 8px;
  }

  .game-area {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .board-container {
    position: relative;
    border: 4px solid #333;
    box-shadow:
      0 0 20px rgba(0, 0, 0, 0.8),
      inset 0 0 10px rgba(0, 0, 0, 0.5);
    background: #0a0a0a;
  }

  .board {
    display: block;
  }

  .start-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start-text {
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 2;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 160px;
  }

  .panel {
    border: 2px solid #333;
    background: #0a0a0a;
    padding: 10px;
  }

  .panel-title {
    color: #888;
    font-size: 10px;
    margin-bottom: 6px;
  }

  .panel-value {
    color: #0f0;
    font-size: 16px;
  }

  .next-container {
    display: flex;
    justify-content: center;
    padding: 4px 0;
  }

  .next-canvas {
    display: block;
    border: 1px solid #222;
  }

  .controls {
    border: 2px solid #333;
    background: #0a0a0a;
    padding: 10px;
  }

  .control-title {
    color: #888;
    font-size: 10px;
    margin-bottom: 8px;
  }

  .control-row {
    color: #666;
    font-size: 8px;
    margin-bottom: 4px;
  }

  .key {
    color: #aaa;
  }
</style>
