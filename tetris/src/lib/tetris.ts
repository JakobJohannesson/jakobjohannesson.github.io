export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;

export type Cell = string | null;
export type Board = Cell[][];

export interface Position {
  x: number;
  y: number;
}

export interface Piece {
  shape: number[][];
  color: string;
  pos: Position;
}

// Classic Tetris piece colors (Game Boy-ish palette)
const COLORS = {
  I: '#00f0f0',
  O: '#f0f000',
  T: '#a000f0',
  S: '#00f000',
  Z: '#f00000',
  J: '#0000f0',
  L: '#f0a000'
};

const SHAPES: Record<string, number[][]> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ]
};

const PIECE_NAMES = Object.keys(SHAPES);

// Points per lines cleared (original NES scoring at level 0 base)
const LINE_SCORES = [0, 40, 100, 300, 1200];

export function createBoard(): Board {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

export function randomPiece(): Piece {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  return {
    shape: SHAPES[name].map((row) => [...row]),
    color: COLORS[name as keyof typeof COLORS],
    pos: { x: Math.floor((COLS - SHAPES[name][0].length) / 2), y: 0 }
  };
}

export function rotate(shape: number[][]): number[][] {
  const n = shape.length;
  const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rotated[x][n - 1 - y] = shape[y][x];
    }
  }
  return rotated;
}

export function collides(board: Board, piece: Piece): boolean {
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const newX = piece.pos.x + x;
        const newY = piece.pos.y + y;
        if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
        if (newY >= 0 && board[newY][newX]) return true;
      }
    }
  }
  return false;
}

export function merge(board: Board, piece: Piece): Board {
  const newBoard = board.map((row) => [...row]);
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.pos.y + y;
        const boardX = piece.pos.x + x;
        if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
          newBoard[boardY][boardX] = piece.color;
        }
      }
    }
  }
  return newBoard;
}

export function clearLines(board: Board): { board: Board; linesCleared: number } {
  const newBoard = board.filter((row) => row.some((cell) => !cell));
  const linesCleared = ROWS - newBoard.length;
  while (newBoard.length < ROWS) {
    newBoard.unshift(Array(COLS).fill(null));
  }
  return { board: newBoard, linesCleared };
}

export function calculateScore(linesCleared: number, level: number): number {
  return LINE_SCORES[linesCleared] * (level + 1);
}

export function getLevel(totalLines: number): number {
  return Math.floor(totalLines / 10);
}

export function getDropInterval(level: number): number {
  // Approximate NES Tetris speed curve
  const speeds = [800, 720, 630, 550, 470, 380, 300, 220, 140, 100, 80, 80, 80, 70, 70, 70, 50, 50, 50, 30];
  return speeds[Math.min(level, speeds.length - 1)];
}

export function getGhostPosition(board: Board, piece: Piece): Position {
  let ghostY = piece.pos.y;
  while (
    !collides(board, {
      ...piece,
      pos: { x: piece.pos.x, y: ghostY + 1 }
    })
  ) {
    ghostY++;
  }
  return { x: piece.pos.x, y: ghostY };
}
