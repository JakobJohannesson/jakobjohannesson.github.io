import { a0 as ssr_context, a1 as head, e as escape_html, a2 as attr, a3 as ensure_array_like, a4 as attr_class, a5 as attr_style, a6 as stringify, $ as derived } from "../../chunks/renderer.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const TILE = 30;
const COLS = 30;
const ROWS = 20;
const CANVAS_W = COLS * TILE;
const CANVAS_H = ROWS * TILE;
const NEON = {
  pink: "#ff2bd6",
  cyan: "#00f0ff",
  magenta: "#c724ff",
  yellow: "#f9f002",
  green: "#39ff14",
  red: "#ff3355"
};
const START_MONEY = 650;
const START_LIVES = 100;
const TOTAL_WAVES = 20;
const PATH_THICKNESS_TILES = 1;
const gameState = {
  phase: "idle",
  money: START_MONEY,
  lives: START_LIVES,
  waveIndex: 0,
  waveRunning: false,
  selectedKind: null,
  selectedTowerId: null,
  speedMultiplier: 1,
  timeMs: 0,
  prevSpeed: 1
};
const WAYPOINTS = [
  { x: 0, y: 90 },
  { x: 240, y: 90 },
  { x: 240, y: 330 },
  { x: 540, y: 330 },
  { x: 540, y: 120 },
  { x: 780, y: 120 },
  { x: 780, y: 450 },
  { x: 420, y: 450 },
  { x: 420, y: 540 },
  { x: 900, y: 540 }
];
function pathLength() {
  let sum = 0;
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const a = WAYPOINTS[i - 1];
    const b = WAYPOINTS[i];
    sum += Math.hypot(b.x - a.x, b.y - a.y);
  }
  return sum;
}
pathLength();
function buildPathTileSet() {
  const tiles = /* @__PURE__ */ new Set();
  const mark = (col, row) => {
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return;
    tiles.add(col + "," + row);
  };
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const a = WAYPOINTS[i - 1];
    const b = WAYPOINTS[i];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.ceil(len / 4));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = a.x + dx * t;
      const y = a.y + dy * t;
      const col = Math.floor(x / TILE);
      const row = Math.floor(y / TILE);
      for (let oc = -PATH_THICKNESS_TILES; oc <= PATH_THICKNESS_TILES; oc++) {
        for (let or = -PATH_THICKNESS_TILES; or <= PATH_THICKNESS_TILES; or++) {
          mark(col + oc, row + or);
        }
      }
    }
  }
  return tiles;
}
buildPathTileSet();
const TOWER_STATS = {
  laser: {
    cost: 180,
    damage: 12,
    fireRateMs: 200,
    range: 120,
    color: NEON.pink,
    accent: NEON.cyan,
    hotkey: "1",
    label: "LASER",
    blurb: "Rapid beam. Fast fire."
  },
  plasma: {
    cost: 350,
    damage: 22,
    fireRateMs: 900,
    range: 140,
    splashRadius: 45,
    color: NEON.magenta,
    accent: NEON.pink,
    hotkey: "2",
    label: "PLASMA",
    blurb: "AOE ball. Crowd wipe."
  },
  missile: {
    cost: 450,
    damage: 95,
    fireRateMs: 1600,
    range: 200,
    splashRadius: 30,
    color: NEON.yellow,
    accent: NEON.red,
    hotkey: "3",
    label: "MISSILE",
    blurb: "Seeker. Big boom."
  },
  emp: {
    cost: 300,
    damage: 5,
    fireRateMs: 1300,
    range: 140,
    slowPct: 0.4,
    slowMs: 2e3,
    empMs: 2500,
    color: NEON.cyan,
    accent: NEON.green,
    hotkey: "4",
    label: "EMP",
    blurb: "Stuns. Reveals stealth."
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
    hotkey: "5",
    label: "CRYO",
    blurb: "Slows & freezes."
  },
  railgun: {
    cost: 600,
    damage: 90,
    fireRateMs: 2200,
    range: 260,
    pierce: 2,
    color: NEON.yellow,
    accent: NEON.pink,
    hotkey: "6",
    label: "RAILGUN",
    blurb: "Pierces. Long range."
  }
};
const TOWER_KINDS = [
  "laser",
  "plasma",
  "missile",
  "emp",
  "cryo",
  "railgun"
];
const entities = {
  towers: []
};
function buildWaves() {
  const waves = [];
  waves.push({
    groups: [{ kind: "scout", count: 8, spacingMs: 700 }],
    hpMult: 1,
    speedMult: 1
  });
  waves.push({
    groups: [{ kind: "scout", count: 14, spacingMs: 600 }],
    hpMult: 1,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "scout", count: 10, spacingMs: 550 },
      { kind: "fighter", count: 4, spacingMs: 800, delayMs: 900 }
    ],
    hpMult: 1,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "scout", count: 12, spacingMs: 500 },
      { kind: "fighter", count: 8, spacingMs: 700, delayMs: 700 }
    ],
    hpMult: 1,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 14, spacingMs: 600 },
      { kind: "scout", count: 10, spacingMs: 350, delayMs: 1200 }
    ],
    hpMult: 1.05,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "scout", count: 8, spacingMs: 400 },
      { kind: "fighter", count: 8, spacingMs: 500, delayMs: 500 },
      { kind: "cruiser", count: 2, spacingMs: 1200, delayMs: 800 }
    ],
    hpMult: 1.1,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 12, spacingMs: 500 },
      { kind: "cruiser", count: 4, spacingMs: 1e3, delayMs: 600 }
    ],
    hpMult: 1.15,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "scout", count: 20, spacingMs: 300 },
      { kind: "cruiser", count: 5, spacingMs: 900, delayMs: 900 }
    ],
    hpMult: 1.2,
    speedMult: 1
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 18, spacingMs: 450 },
      { kind: "cruiser", count: 6, spacingMs: 800, delayMs: 700 }
    ],
    hpMult: 1.25,
    speedMult: 1.05
  });
  waves.push({
    groups: [
      { kind: "scout", count: 12, spacingMs: 350 },
      { kind: "boss", count: 1, spacingMs: 500, delayMs: 1500 }
    ],
    hpMult: 1.3,
    speedMult: 1.05
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 10, spacingMs: 500 },
      { kind: "stealth", count: 4, spacingMs: 700, delayMs: 600 },
      { kind: "cruiser", count: 4, spacingMs: 900, delayMs: 700 }
    ],
    hpMult: 1.35,
    speedMult: 1.05
  });
  waves.push({
    groups: [
      { kind: "scout", count: 16, spacingMs: 300 },
      { kind: "stealth", count: 6, spacingMs: 550, delayMs: 700 },
      { kind: "cruiser", count: 5, spacingMs: 800, delayMs: 800 }
    ],
    hpMult: 1.4,
    speedMult: 1.1
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 14, spacingMs: 400 },
      { kind: "stealth", count: 8, spacingMs: 500, delayMs: 600 },
      { kind: "cruiser", count: 6, spacingMs: 750, delayMs: 800 }
    ],
    hpMult: 1.5,
    speedMult: 1.1
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 16, spacingMs: 350 },
      { kind: "stealth", count: 10, spacingMs: 450, delayMs: 600 },
      { kind: "cruiser", count: 8, spacingMs: 700, delayMs: 800 }
    ],
    hpMult: 1.6,
    speedMult: 1.1
  });
  waves.push({
    groups: [
      { kind: "scout", count: 24, spacingMs: 250 },
      { kind: "fighter", count: 12, spacingMs: 400, delayMs: 600 },
      { kind: "cruiser", count: 8, spacingMs: 700, delayMs: 800 },
      { kind: "stealth", count: 8, spacingMs: 500, delayMs: 600 }
    ],
    hpMult: 1.75,
    speedMult: 1.15
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 18, spacingMs: 350 },
      { kind: "cruiser", count: 10, spacingMs: 650, delayMs: 500 },
      { kind: "stealth", count: 10, spacingMs: 400, delayMs: 600 }
    ],
    hpMult: 1.9,
    speedMult: 1.15
  });
  waves.push({
    groups: [
      { kind: "cruiser", count: 14, spacingMs: 550 },
      { kind: "stealth", count: 12, spacingMs: 400, delayMs: 500 },
      { kind: "fighter", count: 14, spacingMs: 300, delayMs: 500 }
    ],
    hpMult: 2,
    speedMult: 1.2
  });
  waves.push({
    groups: [
      { kind: "scout", count: 30, spacingMs: 180 },
      { kind: "cruiser", count: 10, spacingMs: 550, delayMs: 600 },
      { kind: "stealth", count: 12, spacingMs: 380, delayMs: 600 },
      { kind: "boss", count: 1, spacingMs: 0, delayMs: 1200 }
    ],
    hpMult: 2.15,
    speedMult: 1.2
  });
  waves.push({
    groups: [
      { kind: "fighter", count: 22, spacingMs: 280 },
      { kind: "cruiser", count: 14, spacingMs: 500, delayMs: 500 },
      { kind: "stealth", count: 16, spacingMs: 350, delayMs: 500 }
    ],
    hpMult: 2.3,
    speedMult: 1.25
  });
  waves.push({
    groups: [
      { kind: "cruiser", count: 20, spacingMs: 450 },
      { kind: "stealth", count: 15, spacingMs: 350, delayMs: 400 },
      { kind: "boss", count: 1, spacingMs: 0, delayMs: 800 },
      { kind: "boss", count: 1, spacingMs: 0, delayMs: 3e3 }
    ],
    hpMult: 2.5,
    speedMult: 1.3
  });
  return waves;
}
const WAVES = buildWaves();
function startWave(waveIndex, timeMs) {
  const w = WAVES[waveIndex];
  if (!w) return;
  const groups = w.groups.map((g) => ({
    kind: g.kind,
    remaining: g.count,
    spacingMs: g.spacingMs,
    delayMs: g.delayMs ?? 0,
    nextSpawnMs: 0,
    started: false
  }));
  groups.reduce((s, g) => s + g.remaining, 0);
  ({
    groups,
    hpMult: w.hpMult,
    speedMult: w.speedMult,
    activeIndex: 0,
    lastSpawnMs: timeMs
  });
}
let rafId = 0;
function stopLoop() {
  cancelAnimationFrame(rafId);
}
function beginWave() {
  if (gameState.phase === "gameover" || gameState.phase === "victory") return;
  if (gameState.waveRunning) return;
  startWave(gameState.waveIndex, gameState.timeMs);
  gameState.phase = "playing";
  gameState.waveRunning = true;
}
function selectTowerKind(kind) {
  if (gameState.phase === "gameover" || gameState.phase === "victory") return;
  if (gameState.money < TOWER_STATS[kind].cost) return;
  gameState.selectedKind = kind;
  gameState.selectedTowerId = null;
  gameState.phase = "placing";
}
function cancelSelection() {
  gameState.selectedKind = null;
  gameState.selectedTowerId = null;
  if (gameState.phase === "placing") {
    gameState.phase = gameState.waveRunning ? "playing" : "between-waves";
  }
}
function setSpeed(mult) {
  if (gameState.phase === "gameover" || gameState.phase === "victory") return;
  if (mult === 0) {
    if (gameState.speedMultiplier !== 0) {
      gameState.prevSpeed = gameState.speedMultiplier;
      gameState.speedMultiplier = 0;
      gameState.phase = gameState.waveRunning ? "paused" : gameState.phase;
    }
  } else {
    gameState.speedMultiplier = mult;
    if (gameState.phase === "paused") {
      gameState.phase = gameState.waveRunning ? "playing" : "between-waves";
    }
  }
}
function togglePause() {
  if (gameState.speedMultiplier === 0) {
    const restore = gameState.prevSpeed && gameState.prevSpeed > 0 ? gameState.prevSpeed : 1;
    setSpeed(restore);
  } else {
    setSpeed(0);
  }
}
function onKeyDown(ev, onSelect) {
  if (ev.key === "Escape") {
    cancelSelection();
    return;
  }
  if (ev.key === "p" || ev.key === "P") {
    togglePause();
    return;
  }
  if (ev.key === " ") {
    ev.preventDefault();
    if (gameState.phase === "between-waves") beginWave();
    else togglePause();
    return;
  }
  if (ev.key === "f" || ev.key === "F") {
    if (ev.shiftKey) setSpeed(3);
    else setSpeed(2);
    return;
  }
  if (ev.key >= "1" && ev.key <= "6") {
    const idx = parseInt(ev.key, 10) - 1;
    selectTowerKind(TOWER_KINDS[idx]);
    return;
  }
}
const UPGRADES = {
  laser: {
    L: {
      label: "FOCUS",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "PULSE",
          apply: (t) => {
            t.damage = 18;
            t.fireRateMs = 175;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "OVERCLOCK",
          apply: (t) => {
            t.damage = 26;
            t.fireRateMs = 150;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "DEATH RAY",
          apply: (t) => {
            t.damage = 40;
            t.fireRateMs = 120;
          }
        }
      ]
    },
    R: {
      label: "SCOPE",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "EXTEND",
          apply: (t) => {
            t.range = 150;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "PRECISION",
          apply: (t) => {
            t.range = 180;
            t.critChance = 0.1;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "ORBITAL",
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
      label: "CORE",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "IGNITE",
          apply: (t) => {
            t.damage = 34;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "SOLAR",
          apply: (t) => {
            t.damage = 52;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "SUPERNOVA",
          apply: (t) => {
            t.damage = 85;
          }
        }
      ]
    },
    R: {
      label: "BLOOM",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "SPREAD",
          apply: (t) => {
            t.splashRadius = 65;
            t.fireRateMs = 850;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "FLARE",
          apply: (t) => {
            t.splashRadius = 90;
            t.fireRateMs = 800;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "INFERNO",
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
      label: "WARHEAD",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "HE",
          apply: (t) => {
            t.damage = 150;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "PLASMA-TIP",
          apply: (t) => {
            t.damage = 230;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "MIRV",
          apply: (t) => {
            t.damage = 380;
          }
        }
      ]
    },
    R: {
      label: "GUIDANCE",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "LOCK",
          apply: (t) => {
            t.splashRadius = 60;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "SEEK",
          apply: (t) => {
            t.splashRadius = 100;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "SWARM",
          apply: (t) => {
            t.splashRadius = 160;
          }
        }
      ]
    }
  },
  emp: {
    L: {
      label: "SURGE",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "PULSE",
          apply: (t) => {
            t.empMs = 3500;
            t.slowPct = 0.5;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "OVERLOAD",
          apply: (t) => {
            t.empMs = 5e3;
            t.slowPct = 0.6;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "BLACKOUT",
          apply: (t) => {
            t.empMs = 8e3;
            t.slowPct = 0.75;
          }
        }
      ]
    },
    R: {
      label: "FIELD",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "WAVE",
          apply: (t) => {
            t.splashRadius = 45;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "SHOCK",
          apply: (t) => {
            t.splashRadius = 80;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "STORM",
          apply: (t) => {
            t.splashRadius = 130;
          }
        }
      ]
    }
  },
  cryo: {
    L: {
      label: "FREEZE",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "CHILL",
          apply: (t) => {
            t.freezeMs = 800;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "FROST",
          apply: (t) => {
            t.freezeMs = 1300;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "ICE AGE",
          apply: (t) => {
            t.freezeMs = 2e3;
          }
        }
      ]
    },
    R: {
      label: "SNOW",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "FLURRY",
          apply: (t) => {
            t.range = 130;
            t.slowPct = 0.45;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "BLIZZARD",
          apply: (t) => {
            t.range = 150;
            t.slowPct = 0.6;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "ABSOLUTE ZERO",
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
      label: "SLUG",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "AP",
          apply: (t) => {
            t.damage = 160;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "DU",
          apply: (t) => {
            t.damage = 260;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "ANTIMATTER",
          apply: (t) => {
            t.damage = 440;
          }
        }
      ]
    },
    R: {
      label: "RAIL",
      nodes: [
        {
          tier: 1,
          cost: 120,
          label: "PENETRATOR",
          apply: (t) => {
            t.pierce = 4;
            t.range = 300;
          }
        },
        {
          tier: 2,
          cost: 260,
          label: "LANCE",
          apply: (t) => {
            t.pierce = 6;
            t.range = 340;
          }
        },
        {
          tier: 3,
          cost: 550,
          label: "VOID RAIL",
          apply: (t) => {
            t.pierce = 10;
            t.range = 400;
          }
        }
      ]
    }
  }
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mounted = false;
    const selectedTower = derived(() => gameState.selectedTowerId != null ? entities.towers.find((t) => t.id === gameState.selectedTowerId) ?? null : null);
    const currentWaveNumber = derived(() => gameState.waveIndex + 1);
    const speedLabel = derived(() => gameState.speedMultiplier === 0 ? "PAUSED" : gameState.speedMultiplier === 1 ? "1x" : gameState.speedMultiplier === 2 ? "2x" : "3x");
    const hudPhaseLabel = derived(() => gameState.phase === "between-waves" ? "READY" : gameState.phase === "playing" ? "WAVE ACTIVE" : gameState.phase === "paused" ? "PAUSED" : gameState.phase === "placing" ? "PLACE TOWER" : gameState.phase === "gameover" ? "GAME OVER" : gameState.phase === "victory" ? "VICTORY" : "IDLE");
    function handleKey(ev) {
      onKeyDown(ev);
    }
    function canAfford(kind) {
      return gameState.money >= TOWER_STATS[kind].cost;
    }
    function tierLabel(path) {
      const t = selectedTower();
      if (!t) return "";
      const tier = path === "L" ? t.upgradeLeft : t.upgradeRight;
      return "T" + tier + "/3";
    }
    function tierNodeLabel(path, idx) {
      const t = selectedTower();
      if (!t) return "";
      return UPGRADES[t.kind][path].nodes[idx].label;
    }
    function tierNodeCost(path, idx) {
      const t = selectedTower();
      if (!t) return 0;
      return UPGRADES[t.kind][path].nodes[idx].cost;
    }
    function tierNodeState(path, idx) {
      const t = selectedTower();
      if (!t) return "locked";
      const cur = path === "L" ? t.upgradeLeft : t.upgradeRight;
      if (cur > idx) return "bought";
      if (t.pathLocked && t.pathLocked !== path) return "locked";
      if (cur === idx) return "available";
      return "locked";
    }
    onDestroy(() => {
      stopLoop();
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKey);
      }
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Tower Defense // NEON</title>`);
      });
      $$renderer3.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap" rel="stylesheet"/>`);
    });
    $$renderer2.push(`<div class="arcade-root svelte-1uha8ag"><div class="scene svelte-1uha8ag"><header class="topbar svelte-1uha8ag"><div class="logo svelte-1uha8ag"><span class="logo-pink svelte-1uha8ag">NEON</span> <span class="logo-cyan svelte-1uha8ag">DEFENSE</span></div> <div class="hud svelte-1uha8ag"><div class="hud-item svelte-1uha8ag"><span class="hud-label svelte-1uha8ag">MONEY</span> <span class="hud-value yellow svelte-1uha8ag">$${escape_html(gameState.money)}</span></div> <div class="hud-item svelte-1uha8ag"><span class="hud-label svelte-1uha8ag">LIVES</span> <span class="hud-value green svelte-1uha8ag">${escape_html(gameState.lives)}</span></div> <div class="hud-item svelte-1uha8ag"><span class="hud-label svelte-1uha8ag">WAVE</span> <span class="hud-value cyan svelte-1uha8ag">${escape_html(currentWaveNumber())} / ${escape_html(TOTAL_WAVES)}</span></div> <div class="hud-item svelte-1uha8ag"><span class="hud-label svelte-1uha8ag">STATUS</span> <span class="hud-value pink svelte-1uha8ag">${escape_html(hudPhaseLabel())}</span></div></div></header> <div class="main svelte-1uha8ag"><div class="canvas-wrap svelte-1uha8ag"><canvas${attr("width", CANVAS_W)}${attr("height", CANVAS_H)} class="svelte-1uha8ag"></canvas> `);
    if (gameState.phase === "between-waves") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="overlay start-overlay svelte-1uha8ag"><button class="btn btn-primary svelte-1uha8ag">> START WAVE ${escape_html(currentWaveNumber())} _</button> <div class="hint svelte-1uha8ag">[SPACE] start wave   [1-6] towers   [F] speed   [P] pause</div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (gameState.phase === "gameover") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="overlay end-overlay svelte-1uha8ag"><div class="end-title red svelte-1uha8ag">GAME OVER</div> <div class="end-sub svelte-1uha8ag">Reached wave ${escape_html(currentWaveNumber())}</div> <button class="btn btn-primary svelte-1uha8ag">> RESTART _</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (gameState.phase === "victory") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="overlay end-overlay svelte-1uha8ag"><div class="end-title green svelte-1uha8ag">YOU WIN</div> <div class="end-sub svelte-1uha8ag">All ${escape_html(TOTAL_WAVES)} waves cleared.</div> <button class="btn btn-primary svelte-1uha8ag">> PLAY AGAIN _</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (gameState.phase === "paused" && mounted) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="overlay pause-overlay svelte-1uha8ag"><div class="end-title cyan svelte-1uha8ag">PAUSED</div> <button class="btn btn-primary svelte-1uha8ag">> RESUME _</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <aside class="sidebar svelte-1uha8ag"><div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">TOWERS</div> <div class="tower-grid svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(TOWER_KINDS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let kind = each_array[$$index];
      const s = TOWER_STATS[kind];
      $$renderer2.push(`<button${attr_class("tower-btn svelte-1uha8ag", void 0, {
        "selected": gameState.selectedKind === kind && gameState.phase === "placing",
        "disabled": !canAfford(kind)
      })}${attr("title", kind === "emp" ? s.blurb + " Only tower that can target cloaked STEALTH enemies." : s.blurb)}>`);
      if (kind === "emp") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="detect-badge svelte-1uha8ag" title="Detects stealth">DETECT</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="tb-head svelte-1uha8ag"><span class="tb-key svelte-1uha8ag">${escape_html(s.hotkey)}</span> <span class="tb-label svelte-1uha8ag"${attr_style(`color:${stringify(s.color)}`)}>${escape_html(s.label)}</span></div> <div class="tb-glyph svelte-1uha8ag"${attr_style(`--tw:${stringify(s.color)}; --tg:${stringify(s.accent)}`)}><div${attr_class(`glyph glyph-${stringify(kind)}`, "svelte-1uha8ag")}></div></div> <div${attr_class("tb-cost svelte-1uha8ag", void 0, { "insuff": !canAfford(kind) })}>$${escape_html(s.cost)}</div></button>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (selectedTower()) {
      $$renderer2.push("<!--[0-->");
      const t = selectedTower();
      const stats = TOWER_STATS[t.kind];
      $$renderer2.push(`<div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag"><span${attr_style(`color:${stringify(stats.color)}`)}>${escape_html(stats.label)}</span> <button class="close-btn svelte-1uha8ag">X</button></div> <div class="stat-row svelte-1uha8ag"><span class="svelte-1uha8ag">DMG</span><span class="svelte-1uha8ag">${escape_html(t.damage)}</span></div> <div class="stat-row svelte-1uha8ag"><span class="svelte-1uha8ag">RATE</span><span class="svelte-1uha8ag">${escape_html(t.fireRateMs)}ms</span></div> <div class="stat-row svelte-1uha8ag"><span class="svelte-1uha8ag">RANGE</span><span class="svelte-1uha8ag">${escape_html(t.range)}</span></div> `);
      if (t.splashRadius) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="stat-row svelte-1uha8ag"><span class="svelte-1uha8ag">AOE</span><span class="svelte-1uha8ag">${escape_html(t.splashRadius)}</span></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (t.pierce) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="stat-row svelte-1uha8ag"><span class="svelte-1uha8ag">PIERCE</span><span class="svelte-1uha8ag">${escape_html(t.pierce)}</span></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="upgrade-cols svelte-1uha8ag"><div class="upgrade-col svelte-1uha8ag"><div class="upgrade-col-title pink svelte-1uha8ag">L ${escape_html(UPGRADES[t.kind].L.label)}</div> <div class="tier-row svelte-1uha8ag">${escape_html(tierLabel("L"))}</div> <!--[-->`);
      const each_array_1 = ensure_array_like([0, 1, 2]);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let idx = each_array_1[$$index_1];
        const st = tierNodeState("L", idx);
        $$renderer2.push(`<button${attr_class("upgrade-btn svelte-1uha8ag", void 0, { "bought": st === "bought", "locked": st === "locked" })}${attr("disabled", st !== "available" || gameState.money < tierNodeCost("L", idx), true)}><span>T${escape_html(idx + 1)} ${escape_html(tierNodeLabel("L", idx))}</span> `);
        if (st === "bought") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="ok svelte-1uha8ag">OK</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<span class="cost svelte-1uha8ag">$${escape_html(tierNodeCost("L", idx))}</span>`);
        }
        $$renderer2.push(`<!--]--></button>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="upgrade-col svelte-1uha8ag"><div class="upgrade-col-title cyan svelte-1uha8ag">R ${escape_html(UPGRADES[t.kind].R.label)}</div> <div class="tier-row svelte-1uha8ag">${escape_html(tierLabel("R"))}</div> <!--[-->`);
      const each_array_2 = ensure_array_like([0, 1, 2]);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let idx = each_array_2[$$index_2];
        const st = tierNodeState("R", idx);
        $$renderer2.push(`<button${attr_class("upgrade-btn svelte-1uha8ag", void 0, { "bought": st === "bought", "locked": st === "locked" })}${attr("disabled", st !== "available" || gameState.money < tierNodeCost("R", idx), true)}><span>T${escape_html(idx + 1)} ${escape_html(tierNodeLabel("R", idx))}</span> `);
        if (st === "bought") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="ok svelte-1uha8ag">OK</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<span class="cost svelte-1uha8ag">$${escape_html(tierNodeCost("R", idx))}</span>`);
        }
        $$renderer2.push(`<!--]--></button>`);
      }
      $$renderer2.push(`<!--]--></div></div> <button class="sell-btn svelte-1uha8ag">SELL (+$${escape_html(Math.floor(0.5 * t.totalInvested))})</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="panel controls-panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">SPEED</div> <div class="speed-row svelte-1uha8ag"><button${attr_class("speed-btn svelte-1uha8ag", void 0, { "active": gameState.speedMultiplier === 1 })}>1x</button> <button${attr_class("speed-btn svelte-1uha8ag", void 0, { "active": gameState.speedMultiplier === 2 })}>2x</button> <button${attr_class("speed-btn svelte-1uha8ag", void 0, { "active": gameState.speedMultiplier === 3 })}>3x</button> <button class="speed-btn svelte-1uha8ag">${escape_html(gameState.speedMultiplier === 0 ? "PLAY" : "PAUSE")}</button></div> <div class="speed-readout svelte-1uha8ag"><span class="hud-label svelte-1uha8ag">CURRENT</span> <span class="hud-value pink svelte-1uha8ag">${escape_html(speedLabel())}</span></div></div></aside></div></div></div>`);
  });
}
export {
  _page as default
};
