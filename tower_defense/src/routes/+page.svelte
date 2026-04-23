<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { CANVAS_H, CANVAS_W, TOTAL_WAVES } from '$lib/constants';
  import { gameState, resetGameState } from '$lib/game/state.svelte';
  import { entities, resetEntities } from '$lib/game/entities.svelte';
  import { attachLoop, beginWave, startLoop, stopLoop } from '$lib/game/loop';
  import {
    cancelSelection,
    onCanvasMouseDown,
    onCanvasMouseLeave,
    onCanvasMouseMove,
    onKeyDown,
    selectTower,
    selectTowerKind,
    setSpeed,
    togglePause
  } from '$lib/game/input';
  import { TOWER_KINDS, TOWER_STATS } from '$lib/towers/definitions';
  import type { TowerKind } from '$lib/towers/types';
  import { sellTower } from '$lib/game/placement';
  import { applyUpgrade, canUpgrade, UPGRADES, upgradeCostNext } from '$lib/towers/upgrades';
  import type { Path } from '$lib/towers/upgrades';

  let canvasEl: HTMLCanvasElement | null = $state(null);
  let mounted = $state(false);

  // Derived selected tower reference (re-evaluates when gameState.selectedTowerId changes OR tower list updates).
  // Note: because towers can be sold, we look up each time.
  const selectedTower = $derived(
    gameState.selectedTowerId != null
      ? entities.towers.find((t) => t.id === gameState.selectedTowerId) ?? null
      : null
  );

  const currentWaveNumber = $derived(gameState.waveIndex + 1);

  const speedLabel = $derived(
    gameState.speedMultiplier === 0
      ? 'PAUSED'
      : gameState.speedMultiplier === 1
        ? '1x'
        : gameState.speedMultiplier === 2
          ? '2x'
          : '3x'
  );

  const hudPhaseLabel = $derived(
    gameState.phase === 'between-waves'
      ? 'READY'
      : gameState.phase === 'playing'
        ? 'WAVE ACTIVE'
        : gameState.phase === 'paused'
          ? 'PAUSED'
          : gameState.phase === 'placing'
            ? 'PLACE TOWER'
            : gameState.phase === 'gameover'
              ? 'GAME OVER'
              : gameState.phase === 'victory'
                ? 'VICTORY'
                : 'IDLE'
  );

  function handleSelect(_id: number | null) {
    // reserved hook for future
    void _id;
  }

  function handleKey(ev: KeyboardEvent) {
    onKeyDown(ev, handleSelect);
  }

  function handleMouseMove(ev: MouseEvent) {
    if (canvasEl) onCanvasMouseMove(canvasEl, ev);
  }
  function handleMouseLeave() {
    onCanvasMouseLeave();
  }
  function handleMouseDown(ev: MouseEvent) {
    if (canvasEl) onCanvasMouseDown(canvasEl, ev, handleSelect);
  }
  function handleContextMenu(ev: Event) {
    ev.preventDefault();
  }

  function restart() {
    resetEntities();
    resetGameState();
    gameState.phase = 'between-waves';
  }

  function pickKind(kind: TowerKind) {
    selectTowerKind(kind);
  }

  function doUpgrade(path: Path) {
    const t = selectedTower;
    if (!t) return;
    if (!canUpgrade(t, path)) return;
    const cost = upgradeCostNext(t, path);
    if (gameState.money < cost) return;
    if (applyUpgrade(t, path)) {
      gameState.money -= cost;
    }
  }

  function doSell() {
    const t = selectedTower;
    if (!t) return;
    sellTower(t.id);
    selectTower(null);
  }

  function closePanel() {
    selectTower(null);
    cancelSelection();
  }

  function startNextWave() {
    beginWave();
  }

  function canAfford(kind: TowerKind): boolean {
    return gameState.money >= TOWER_STATS[kind].cost;
  }

  function tierLabel(path: Path): string {
    const t = selectedTower;
    if (!t) return '';
    const tier = path === 'L' ? t.upgradeLeft : t.upgradeRight;
    return 'T' + tier + '/3';
  }

  function tierNodeLabel(path: Path, idx: 0 | 1 | 2): string {
    const t = selectedTower;
    if (!t) return '';
    return UPGRADES[t.kind][path].nodes[idx].label;
  }

  function tierNodeCost(path: Path, idx: 0 | 1 | 2): number {
    const t = selectedTower;
    if (!t) return 0;
    return UPGRADES[t.kind][path].nodes[idx].cost;
  }

  function tierNodeState(path: Path, idx: 0 | 1 | 2): 'bought' | 'available' | 'locked' {
    const t = selectedTower;
    if (!t) return 'locked';
    const cur = path === 'L' ? t.upgradeLeft : t.upgradeRight;
    if (cur > idx) return 'bought';
    if (t.pathLocked && t.pathLocked !== path) return 'locked';
    if (cur === idx) return 'available';
    return 'locked';
  }

  function buyTier(path: Path, idx: 0 | 1 | 2) {
    const t = selectedTower;
    if (!t) return;
    const cur = path === 'L' ? t.upgradeLeft : t.upgradeRight;
    if (cur !== idx) return; // must buy in order
    doUpgrade(path);
  }

  onMount(() => {
    resetEntities();
    resetGameState();
    gameState.phase = 'between-waves';
    if (canvasEl) {
      attachLoop(canvasEl);
      startLoop();
    }
    window.addEventListener('keydown', handleKey);
    mounted = true;
  });

  onDestroy(() => {
    stopLoop();
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKey);
    }
  });
</script>

<svelte:head>
  <title>Tower Defense // NEON</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="arcade-root">
  <div class="scene">
    <header class="topbar">
      <div class="logo">
        <span class="logo-pink">NEON</span>
        <span class="logo-cyan">DEFENSE</span>
      </div>
      <div class="hud">
        <div class="hud-item">
          <span class="hud-label">MONEY</span>
          <span class="hud-value yellow">${gameState.money}</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">LIVES</span>
          <span class="hud-value green">{gameState.lives}</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">WAVE</span>
          <span class="hud-value cyan">{currentWaveNumber} / {TOTAL_WAVES}</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">STATUS</span>
          <span class="hud-value pink">{hudPhaseLabel}</span>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="canvas-wrap">
        <canvas
          bind:this={canvasEl}
          width={CANVAS_W}
          height={CANVAS_H}
          onmousemove={handleMouseMove}
          onmouseleave={handleMouseLeave}
          onmousedown={handleMouseDown}
          oncontextmenu={handleContextMenu}
        ></canvas>

        {#if gameState.phase === 'between-waves'}
          <div class="overlay start-overlay">
            <button class="btn btn-primary" onclick={startNextWave}>
              &gt; START WAVE {currentWaveNumber} _
            </button>
            <div class="hint">
              [SPACE] start wave &nbsp; [1-6] towers &nbsp; [F] speed &nbsp; [P] pause
            </div>
          </div>
        {/if}

        {#if gameState.phase === 'gameover'}
          <div class="overlay end-overlay">
            <div class="end-title red">GAME OVER</div>
            <div class="end-sub">Reached wave {currentWaveNumber}</div>
            <button class="btn btn-primary" onclick={restart}>&gt; RESTART _</button>
          </div>
        {/if}

        {#if gameState.phase === 'victory'}
          <div class="overlay end-overlay">
            <div class="end-title green">YOU WIN</div>
            <div class="end-sub">All {TOTAL_WAVES} waves cleared.</div>
            <button class="btn btn-primary" onclick={restart}>&gt; PLAY AGAIN _</button>
          </div>
        {/if}

        {#if gameState.phase === 'paused' && mounted}
          <div class="overlay pause-overlay">
            <div class="end-title cyan">PAUSED</div>
            <button class="btn btn-primary" onclick={togglePause}>&gt; RESUME _</button>
          </div>
        {/if}
      </div>

      <aside class="sidebar">
        <div class="panel">
          <div class="panel-title">TOWERS</div>
          <div class="tower-grid">
            {#each TOWER_KINDS as kind (kind)}
              {@const s = TOWER_STATS[kind]}
              <button
                class="tower-btn"
                class:selected={gameState.selectedKind === kind && gameState.phase === 'placing'}
                class:disabled={!canAfford(kind)}
                onclick={() => pickKind(kind)}
                title={s.blurb}
              >
                <div class="tb-head">
                  <span class="tb-key">{s.hotkey}</span>
                  <span class="tb-label" style="color:{s.color}">{s.label}</span>
                </div>
                <div class="tb-glyph" style="--tw:{s.color}; --tg:{s.accent}">
                  <div class="glyph glyph-{kind}"></div>
                </div>
                <div class="tb-cost" class:insuff={!canAfford(kind)}>${s.cost}</div>
              </button>
            {/each}
          </div>
        </div>

        {#if selectedTower}
          {@const t = selectedTower}
          {@const stats = TOWER_STATS[t.kind]}
          <div class="panel">
            <div class="panel-title">
              <span style="color:{stats.color}">{stats.label}</span>
              <button class="close-btn" onclick={closePanel}>X</button>
            </div>
            <div class="stat-row"><span>DMG</span><span>{t.damage}</span></div>
            <div class="stat-row"><span>RATE</span><span>{t.fireRateMs}ms</span></div>
            <div class="stat-row"><span>RANGE</span><span>{t.range}</span></div>
            {#if t.splashRadius}
              <div class="stat-row"><span>AOE</span><span>{t.splashRadius}</span></div>
            {/if}
            {#if t.pierce}
              <div class="stat-row"><span>PIERCE</span><span>{t.pierce}</span></div>
            {/if}

            <div class="upgrade-cols">
              <div class="upgrade-col">
                <div class="upgrade-col-title pink">L {UPGRADES[t.kind].L.label}</div>
                <div class="tier-row">
                  {tierLabel('L')}
                </div>
                {#each [0, 1, 2] as idx (idx)}
                  {@const st = tierNodeState('L', idx as 0 | 1 | 2)}
                  <button
                    class="upgrade-btn"
                    class:bought={st === 'bought'}
                    class:locked={st === 'locked'}
                    disabled={st !== 'available' ||
                      gameState.money < tierNodeCost('L', idx as 0 | 1 | 2)}
                    onclick={() => buyTier('L', idx as 0 | 1 | 2)}
                  >
                    <span>T{idx + 1} {tierNodeLabel('L', idx as 0 | 1 | 2)}</span>
                    {#if st === 'bought'}
                      <span class="ok">OK</span>
                    {:else}
                      <span class="cost">${tierNodeCost('L', idx as 0 | 1 | 2)}</span>
                    {/if}
                  </button>
                {/each}
              </div>

              <div class="upgrade-col">
                <div class="upgrade-col-title cyan">R {UPGRADES[t.kind].R.label}</div>
                <div class="tier-row">
                  {tierLabel('R')}
                </div>
                {#each [0, 1, 2] as idx (idx)}
                  {@const st = tierNodeState('R', idx as 0 | 1 | 2)}
                  <button
                    class="upgrade-btn"
                    class:bought={st === 'bought'}
                    class:locked={st === 'locked'}
                    disabled={st !== 'available' ||
                      gameState.money < tierNodeCost('R', idx as 0 | 1 | 2)}
                    onclick={() => buyTier('R', idx as 0 | 1 | 2)}
                  >
                    <span>T{idx + 1} {tierNodeLabel('R', idx as 0 | 1 | 2)}</span>
                    {#if st === 'bought'}
                      <span class="ok">OK</span>
                    {:else}
                      <span class="cost">${tierNodeCost('R', idx as 0 | 1 | 2)}</span>
                    {/if}
                  </button>
                {/each}
              </div>
            </div>

            <button class="sell-btn" onclick={doSell}>
              SELL (+${Math.floor(0.5 * t.totalInvested)})
            </button>
          </div>
        {/if}

        <div class="panel controls-panel">
          <div class="panel-title">SPEED</div>
          <div class="speed-row">
            <button
              class="speed-btn"
              class:active={gameState.speedMultiplier === 1}
              onclick={() => setSpeed(1)}>1x</button
            >
            <button
              class="speed-btn"
              class:active={gameState.speedMultiplier === 2}
              onclick={() => setSpeed(2)}>2x</button
            >
            <button
              class="speed-btn"
              class:active={gameState.speedMultiplier === 3}
              onclick={() => setSpeed(3)}>3x</button
            >
            <button class="speed-btn" onclick={togglePause}>
              {gameState.speedMultiplier === 0 ? 'PLAY' : 'PAUSE'}
            </button>
          </div>
          <div class="speed-readout">
            <span class="hud-label">CURRENT</span>
            <span class="hud-value pink">{speedLabel}</span>
          </div>
        </div>
      </aside>
    </div>
  </div>
</div>

<style>
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    background: #05010f;
    color: #ffffff;
    font-family: 'Press Start 2P', monospace;
    overflow: auto;
  }

  .arcade-root {
    min-height: 100vh;
    width: 100%;
    background:
      radial-gradient(ellipse at 50% -10%, rgba(199, 36, 255, 0.25), transparent 60%),
      radial-gradient(ellipse at 10% 110%, rgba(255, 43, 214, 0.18), transparent 60%),
      #05010f;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  .scene {
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    border: 2px solid #00f0ff;
    background: rgba(10, 2, 32, 0.75);
    box-shadow:
      0 0 18px rgba(0, 240, 255, 0.45),
      inset 0 0 18px rgba(199, 36, 255, 0.18);
  }

  .logo {
    font-size: 18px;
    letter-spacing: 2px;
    display: flex;
    gap: 8px;
  }
  .logo-pink {
    color: #ff2bd6;
    text-shadow: 0 0 8px #ff2bd6;
  }
  .logo-cyan {
    color: #00f0ff;
    text-shadow: 0 0 8px #00f0ff;
  }

  .hud {
    display: flex;
    gap: 20px;
    font-size: 10px;
  }
  .hud-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
  .hud-label {
    color: rgba(255, 255, 255, 0.55);
    font-size: 8px;
  }
  .hud-value {
    font-size: 12px;
  }
  .yellow {
    color: #f9f002;
    text-shadow: 0 0 6px #f9f002;
  }
  .green {
    color: #39ff14;
    text-shadow: 0 0 6px #39ff14;
  }
  .cyan {
    color: #00f0ff;
    text-shadow: 0 0 6px #00f0ff;
  }
  .pink {
    color: #ff2bd6;
    text-shadow: 0 0 6px #ff2bd6;
  }
  .red {
    color: #ff3355;
    text-shadow: 0 0 8px #ff3355;
  }

  .main {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .canvas-wrap {
    position: relative;
    width: 900px;
    height: 600px;
    border: 2px solid #00f0ff;
    box-shadow:
      0 0 24px rgba(0, 240, 255, 0.45),
      0 0 48px rgba(199, 36, 255, 0.25),
      inset 0 0 24px rgba(0, 240, 255, 0.12);
    background: #05010f;
    overflow: hidden;
  }

  canvas {
    display: block;
    width: 900px;
    height: 600px;
    cursor: crosshair;
    image-rendering: pixelated;
  }

  .canvas-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 2px,
      rgba(0, 0, 0, 0.18) 3px,
      rgba(0, 0, 0, 0) 4px
    );
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    background: rgba(5, 1, 15, 0.55);
    backdrop-filter: blur(2px);
    z-index: 5;
  }
  .start-overlay {
    background: rgba(5, 1, 15, 0.25);
    pointer-events: none;
  }
  .start-overlay .btn,
  .start-overlay .hint {
    pointer-events: auto;
  }
  .start-overlay {
    justify-content: flex-end;
    padding-bottom: 36px;
  }

  .hint {
    font-size: 8px;
    color: rgba(255, 255, 255, 0.7);
    padding: 6px 10px;
    background: rgba(10, 2, 32, 0.8);
    border: 1px solid rgba(0, 240, 255, 0.35);
  }

  .end-title {
    font-size: 42px;
    letter-spacing: 3px;
  }
  .end-sub {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.75);
  }

  .btn {
    font-family: 'Press Start 2P', monospace;
    background: rgba(10, 2, 32, 0.9);
    color: #00f0ff;
    border: 2px solid #00f0ff;
    padding: 12px 20px;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 6px #00f0ff;
    box-shadow:
      0 0 12px rgba(0, 240, 255, 0.45),
      inset 0 0 8px rgba(0, 240, 255, 0.2);
  }
  .btn:hover {
    color: #ff2bd6;
    border-color: #ff2bd6;
    text-shadow: 0 0 6px #ff2bd6;
    box-shadow:
      0 0 14px rgba(255, 43, 214, 0.55),
      inset 0 0 8px rgba(255, 43, 214, 0.2);
  }
  .btn-primary {
    padding: 16px 28px;
    font-size: 16px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 340px;
  }

  .panel {
    border: 2px solid rgba(199, 36, 255, 0.55);
    background: rgba(10, 2, 32, 0.8);
    padding: 12px;
    box-shadow:
      0 0 12px rgba(199, 36, 255, 0.3),
      inset 0 0 12px rgba(199, 36, 255, 0.08);
  }

  .panel-title {
    font-size: 10px;
    color: #ff2bd6;
    text-shadow: 0 0 6px #ff2bd6;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 43, 214, 0.45);
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    background: transparent;
    border: 1px solid #ff2bd6;
    color: #ff2bd6;
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    padding: 2px 6px;
    cursor: pointer;
  }
  .close-btn:hover {
    background: #ff2bd6;
    color: #0a0220;
  }

  .tower-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
  .tower-btn {
    font-family: 'Press Start 2P', monospace;
    background: rgba(20, 3, 49, 0.9);
    border: 2px solid rgba(0, 240, 255, 0.4);
    color: #ffffff;
    padding: 8px 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    box-shadow: inset 0 0 8px rgba(0, 240, 255, 0.08);
  }
  .tower-btn:hover {
    border-color: #00f0ff;
    box-shadow:
      0 0 10px rgba(0, 240, 255, 0.4),
      inset 0 0 8px rgba(0, 240, 255, 0.2);
  }
  .tower-btn.selected {
    border-color: #ff2bd6;
    box-shadow:
      0 0 10px rgba(255, 43, 214, 0.55),
      inset 0 0 8px rgba(255, 43, 214, 0.22);
  }
  .tower-btn.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .tb-head {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 7px;
  }
  .tb-key {
    background: #ff2bd6;
    color: #0a0220;
    padding: 1px 4px;
    border-radius: 2px;
  }
  .tb-label {
    font-size: 7px;
    letter-spacing: 1px;
    text-shadow: 0 0 4px currentColor;
  }
  .tb-glyph {
    width: 34px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .glyph {
    width: 20px;
    height: 20px;
    background: var(--tw);
    box-shadow: 0 0 10px var(--tw);
  }
  .glyph-laser {
    clip-path: polygon(0 40%, 70% 40%, 70% 20%, 100% 50%, 70% 80%, 70% 60%, 0 60%);
  }
  .glyph-plasma {
    clip-path: circle(45% at 50% 50%);
  }
  .glyph-missile {
    clip-path: polygon(0 40%, 70% 40%, 100% 50%, 70% 60%, 0 60%);
  }
  .glyph-emp {
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 50%,
      80% 100%,
      20% 100%,
      0% 50%
    );
  }
  .glyph-cryo {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
  .glyph-railgun {
    clip-path: polygon(0 45%, 90% 45%, 90% 30%, 100% 50%, 90% 70%, 90% 55%, 0 55%);
  }
  .tb-cost {
    font-size: 9px;
    color: #f9f002;
    text-shadow: 0 0 4px #f9f002;
  }
  .tb-cost.insuff {
    color: #ff3355;
    text-shadow: 0 0 4px #ff3355;
  }

  .stat-row {
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    padding: 3px 0;
    border-bottom: 1px dashed rgba(199, 36, 255, 0.25);
  }
  .stat-row span:first-child {
    color: rgba(255, 255, 255, 0.55);
  }
  .stat-row span:last-child {
    color: #00f0ff;
  }

  .upgrade-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 10px;
  }
  .upgrade-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .upgrade-col-title {
    font-size: 9px;
    padding: 3px;
    text-align: center;
    border: 1px solid currentColor;
  }
  .tier-row {
    font-size: 8px;
    color: rgba(255, 255, 255, 0.55);
    text-align: center;
    margin-bottom: 2px;
  }
  .upgrade-btn {
    font-family: 'Press Start 2P', monospace;
    background: rgba(20, 3, 49, 0.9);
    border: 1px solid rgba(0, 240, 255, 0.4);
    color: #ffffff;
    font-size: 7px;
    padding: 6px 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }
  .upgrade-btn:not(:disabled):hover {
    border-color: #00f0ff;
    box-shadow: 0 0 8px rgba(0, 240, 255, 0.35);
  }
  .upgrade-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .upgrade-btn.bought {
    border-color: #39ff14;
    color: #39ff14;
    opacity: 0.85;
  }
  .upgrade-btn.locked {
    border-color: rgba(255, 51, 85, 0.35);
    color: rgba(255, 51, 85, 0.65);
  }
  .upgrade-btn .ok {
    color: #39ff14;
  }
  .upgrade-btn .cost {
    color: #f9f002;
  }

  .sell-btn {
    font-family: 'Press Start 2P', monospace;
    margin-top: 10px;
    width: 100%;
    background: rgba(255, 51, 85, 0.14);
    border: 1px solid #ff3355;
    color: #ff3355;
    padding: 8px;
    font-size: 9px;
    cursor: pointer;
    text-shadow: 0 0 4px #ff3355;
  }
  .sell-btn:hover {
    background: #ff3355;
    color: #0a0220;
  }

  .controls-panel {
    border-color: rgba(0, 240, 255, 0.6);
  }
  .speed-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6px;
  }
  .speed-btn {
    font-family: 'Press Start 2P', monospace;
    background: rgba(20, 3, 49, 0.9);
    border: 1px solid rgba(0, 240, 255, 0.45);
    color: #00f0ff;
    font-size: 10px;
    padding: 8px 4px;
    cursor: pointer;
  }
  .speed-btn:hover {
    border-color: #ff2bd6;
    color: #ff2bd6;
  }
  .speed-btn.active {
    background: #00f0ff;
    color: #0a0220;
    text-shadow: none;
  }
  .speed-readout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    font-size: 10px;
  }
</style>
