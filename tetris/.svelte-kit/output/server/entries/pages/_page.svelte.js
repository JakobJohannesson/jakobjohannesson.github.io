import { h as head, a as attr, e as escape_html, b as stringify } from "../../chunks/root.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const COLORS = {
  I: "#00f0f0",
  O: "#f0f000",
  T: "#a000f0",
  S: "#00f000",
  Z: "#f00000",
  J: "#0000f0",
  L: "#f0a000"
};
const SHAPES = {
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
function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}
function randomPiece() {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  return {
    shape: SHAPES[name].map((row) => [...row]),
    color: COLORS[name],
    pos: { x: Math.floor((COLS - SHAPES[name][0].length) / 2), y: 0 }
  };
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    createBoard();
    randomPiece();
    randomPiece();
    let score = 0;
    let lines = 0;
    let level = 0;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap" rel="stylesheet" class="svelte-1uha8ag"/>`);
    });
    $$renderer2.push(`<audio${attr("src", `${stringify(base)}/tetris.mp3`)} loop="" preload="auto" class="svelte-1uha8ag"></audio> <div class="game-container svelte-1uha8ag"><div class="title svelte-1uha8ag">TETRIS</div> <div class="game-area svelte-1uha8ag"><div class="board-container svelte-1uha8ag"><canvas${attr("width", COLS * BLOCK_SIZE)}${attr("height", ROWS * BLOCK_SIZE)} class="board svelte-1uha8ag"></canvas> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="start-overlay svelte-1uha8ag"><div class="start-text svelte-1uha8ag">PRESS ENTER<br class="svelte-1uha8ag"/>TO START</div></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="sidebar svelte-1uha8ag"><div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">SCORE</div> <div class="panel-value svelte-1uha8ag">${escape_html(score.toString().padStart(6, "0"))}</div></div> <div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">LEVEL</div> <div class="panel-value svelte-1uha8ag">${escape_html(level)}</div></div> <div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">LINES</div> <div class="panel-value svelte-1uha8ag">${escape_html(lines)}</div></div> <div class="panel svelte-1uha8ag"><div class="panel-title svelte-1uha8ag">NEXT</div> <div class="next-container svelte-1uha8ag"><canvas${attr("width", 120)}${attr("height", 120)} class="next-canvas svelte-1uha8ag"></canvas></div></div> <div class="controls svelte-1uha8ag"><div class="control-title svelte-1uha8ag">CONTROLS</div> <div class="control-row svelte-1uha8ag"><span class="key svelte-1uha8ag">←→</span> MOVE</div> <div class="control-row svelte-1uha8ag"><span class="key svelte-1uha8ag">↑</span> ROTATE</div> <div class="control-row svelte-1uha8ag"><span class="key svelte-1uha8ag">↓</span> SOFT DROP</div> <div class="control-row svelte-1uha8ag"><span class="key svelte-1uha8ag">SPACE</span> HARD DROP</div> <div class="control-row svelte-1uha8ag"><span class="key svelte-1uha8ag">P</span> PAUSE</div></div></div></div></div>`);
  });
}
export {
  _page as default
};
