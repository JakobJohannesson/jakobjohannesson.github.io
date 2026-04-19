import { a0 as ssr_context, a1 as head, a2 as attr } from "../../chunks/renderer.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const W = 800;
    const H = 500;
    let animId;
    onDestroy(() => cancelAnimationFrame(animId));
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Pong</title>`);
      });
    });
    $$renderer2.push(`<div class="wrapper svelte-1uha8ag"><a class="back svelte-1uha8ag" href="../../arcade.html">← Arcade</a> <canvas${attr("width", W)}${attr("height", H)} class="svelte-1uha8ag"></canvas> <p class="hint svelte-1uha8ag">W / S or ↑ / ↓ to move  ·  Space to pause  ·  First to 7 wins</p></div>`);
  });
}
export {
  _page as default
};
