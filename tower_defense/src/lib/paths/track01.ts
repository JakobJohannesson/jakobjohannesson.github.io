import { CANVAS_H, CANVAS_W, COLS, PATH_THICKNESS_TILES, ROWS, TILE } from '../constants';

export interface Waypoint {
  x: number;
  y: number;
}

export const WAYPOINTS: Waypoint[] = [
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

// Total path length in pixels for normalized progress
export function pathLength(): number {
  let sum = 0;
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const a = WAYPOINTS[i - 1];
    const b = WAYPOINTS[i];
    sum += Math.hypot(b.x - a.x, b.y - a.y);
  }
  return sum;
}

export const TOTAL_PATH_LENGTH = pathLength();

// Build a set of tile keys "col,row" that the path (plus thickness) occupies.
// Used to forbid placing towers on the path.
export function buildPathTileSet(): Set<string> {
  const tiles = new Set<string>();
  const mark = (col: number, row: number) => {
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return;
    tiles.add(col + ',' + row);
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

export const PATH_TILES = buildPathTileSet();

// Given a global path progress in pixels, return world x/y and the segment index.
export function positionAtDistance(dist: number): { x: number; y: number; segIndex: number } {
  if (dist <= 0) return { x: WAYPOINTS[0].x, y: WAYPOINTS[0].y, segIndex: 0 };
  let covered = 0;
  for (let i = 1; i < WAYPOINTS.length; i++) {
    const a = WAYPOINTS[i - 1];
    const b = WAYPOINTS[i];
    const segLen = Math.hypot(b.x - a.x, b.y - a.y);
    if (covered + segLen >= dist) {
      const t = (dist - covered) / segLen;
      return {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
        segIndex: i - 1
      };
    }
    covered += segLen;
  }
  const last = WAYPOINTS[WAYPOINTS.length - 1];
  return { x: last.x, y: last.y, segIndex: WAYPOINTS.length - 2 };
}

// ensure imports are referenced
void CANVAS_H;
void CANVAS_W;
