// Grid & canvas dimensions
export const TILE = 30;
export const COLS = 30;
export const ROWS = 20;
export const CANVAS_W = COLS * TILE; // 900
export const CANVAS_H = ROWS * TILE; // 600

// Neon palette
export const NEON = {
  pink: '#ff2bd6',
  cyan: '#00f0ff',
  magenta: '#c724ff',
  yellow: '#f9f002',
  green: '#39ff14',
  red: '#ff3355',
  orange: '#ff8a00',
  white: '#ffffff',
  dark: '#0a0220',
  darker: '#05010f',
  mid: '#1a0938',
  pathCore: '#170138',
  pathEdge: '#5a00a8',
  gridLine: 'rgba(199, 36, 255, 0.18)',
  horizon: '#2b1a5c'
};

// Starting resources
export const START_MONEY = 650;
export const START_LIVES = 100;
export const TOTAL_WAVES = 20;

// Path thickness (tiles either side)
export const PATH_THICKNESS_TILES = 1;

// Fixed timestep
export const STEP_MS = 1000 / 60;
